import React, { useCallback, useState } from 'react';
import {
  View,
  Text,
  ImageBackground,
  Pressable,
  Image,
  Modal,
  ScrollView,
  Platform,
} from 'react-native';
import type { ImageStyle, ViewStyle } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import type { DustProgress } from '../DustRushJohnnyUtls/dustProgressStorage';
import {
  loadDustProgress,
  repairBuilding,
} from '../DustRushJohnnyUtls/dustProgressStorage';

const townBackground = require('../../assets/images/townBg.png');
const boardsIcon = require('../../assets/images/boards.png');

const TOWN_BUILDINGS = [
  {
    id: 1,
    name: 'Saloon',
    ruinedImg: require('../../assets/images/town_saloon_ruined.png'),
    fixedImg: require('../../assets/images/town_saloon_fixed.png'),
    style: { left: 0, bottom: 12, width: 257, height: 257 },
    unlockBtnStyle: { left: 85, bottom: 72 },
  },
  {
    id: 2,
    name: 'Workshop',
    ruinedImg: require('../../assets/images/town_workshop_ruined.png'),
    fixedImg: require('../../assets/images/town_workshop_fixed.png'),
    pileImg: require('../../assets/images/pile2.png'),
    style: { right: 12, bottom: 165, width: 220, height: 220 },
    unlockBtnStyle: { right: 48, bottom: 80 },
  },
  {
    id: 3,
    name: 'Barn',
    ruinedImg: require('../../assets/images/town_barn_ruined.png'),
    fixedImg: require('../../assets/images/town_barn_fixed.png'),
    pileImg: require('../../assets/images/pile3.png'),
    style: { left: 10, bottom: 255, width: 182, height: 180 },
    unlockBtnStyle: { left: 45, bottom: 45 },
  },
  {
    id: 4,
    name: 'Houses',
    ruinedImg: require('../../assets/images/town_houses_ruined.png'),
    fixedImg: require('../../assets/images/town_houses_fixed.png'),
    pileImg: require('../../assets/images/pile4.png'),
    style: { right: 18, bottom: 380, width: 220, height: 220 },
    unlockBtnStyle: { right: 55, bottom: 60 },
  },
] as const;

type HeaderProps = {
  title: string;
  onBack: () => void;
};

const Header: React.FC<HeaderProps> = ({ title, onBack }) => (
  <View style={dustTownHeaderWrapper}>
    <View style={dustTownHeaderBorder}>
      <LinearGradient
        colors={['#DB8F4C', '#A9462F']}
        style={dustTownHeaderBackground}
      >
        <Pressable
          onPress={onBack}
          style={dustTownBackButton}
          hitSlop={12}
          accessibilityRole="button"
          accessibilityLabel="Back"
        >
          <Image source={require('../../assets/images/dusstback.png')} />
        </Pressable>

        <Text style={dustTownHeaderTitle}>{title}</Text>

        <View style={dustTownHeaderSpacer} />
      </LinearGradient>
    </View>
  </View>
);

type UnlockButtonProps = {
  onPress: () => void;
};

const UnlockButton: React.FC<UnlockButtonProps> = ({ onPress }) => (
  <Pressable
    onPress={onPress}
    style={({ pressed }) => [dustTownUnlockButton, pressed && { opacity: 0.9 }]}
    accessibilityRole="button"
    accessibilityLabel="Unlock"
  >
    <Text style={dustTownUnlockText}>UNLOCK</Text>
  </Pressable>
);

export default function CactusTownScreen() {
  const navigation = useNavigation();

  const [progress, setProgress] = useState<DustProgress | null>(null);
  const [unlockModalVisible, setUnlockModalVisible] = useState(false);
  const [buildingToRepair, setBuildingToRepair] = useState<number | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  const refreshProgress = useCallback(async () => {
    const p = await loadDustProgress();
    setProgress(p);
  }, []);

  useFocusEffect(
    useCallback(() => {
      refreshProgress();
      return () => {};
    }, [refreshProgress]),
  );

  const boards = Number(progress?.boards || 0);
  const townFixedIds: number[] = progress?.townFixedIds ?? [];
  const townFixed = townFixedIds.length;

  const handleUnlockPress = (buildingId: number) => {
    if (townFixedIds.includes(buildingId)) return;
    setBuildingToRepair(buildingId);
    setUnlockModalVisible(true);
  };

  const confirmUnlock = async () => {
    const id = buildingToRepair;
    setUnlockModalVisible(false);
    setBuildingToRepair(null);

    if (id == null) return;

    const result = await repairBuilding(id, 30);

    if (!result.ok) {
      if (result.reason === 'NOT_ENOUGH') {
        setMessage('Not enough boards.\nWin levels to earn more!');
      } else if (result.reason === 'ALREADY_FIXED') {
        setMessage('This building is already fixed!');
      } else {
        setMessage('All buildings are already fixed!');
      }
      return;
    }

    setProgress(result.next);

    const fixedCount = (result.next?.townFixedIds ?? []).length;
    if (fixedCount >= 4) {
      setMessage(
        'You didn’t just rebuild a town —\nyou brought its heart back to life.',
      );
    } else {
      setMessage('Nice work!\nA new part of town is coming to life.');
    }
  };

  return (
    <ImageBackground
      source={townBackground}
      style={dustTownBackground}
      resizeMode="cover"
    >
      <ScrollView
        contentContainerStyle={dustTownScrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={dustTownScreenContent}>
          <Header
            title="Cactus Town"
            onBack={() => (navigation as any).goBack()}
          />

          <View style={dustTownCounterContainer}>
            <Text style={dustTownCounterNumber}>{boards}</Text>
            <Image
              source={boardsIcon}
              style={dustTownCounterIcon}
              resizeMode="contain"
            />
          </View>

          <View style={dustTownScene}>
            {TOWN_BUILDINGS.map(building => {
              const isFixed = townFixedIds.includes(building.id);

              const imageSource = isFixed
                ? building.fixedImg
                : building.ruinedImg;

              return (
                <View
                  key={building.id}
                  style={[dustTownBuildingWrapper, building.style]}
                >
                  <Image
                    source={imageSource}
                    style={dustTownBuildingImage}
                    resizeMode="contain"
                  />

                  {!isFixed && (
                    <View
                      style={[dustTownUnlockPlacement, building.unlockBtnStyle]}
                    >
                      <UnlockButton
                        onPress={() => handleUnlockPress(building.id)}
                      />
                    </View>
                  )}
                </View>
              );
            })}
          </View>

          <Modal
            visible={unlockModalVisible}
            transparent
            animationType="fade"
            statusBarTranslucent={Platform.OS === 'android'}
            onRequestClose={() => {
              setUnlockModalVisible(false);
              setBuildingToRepair(null);
            }}
          >
            <View style={dustTownModalOverlay}>
              <View style={dustTownModalFrame}>
                <LinearGradient
                  colors={['#FEE1BE', '#F7B96E']}
                  style={dustTownConfirmCard}
                >
                  <Pressable
                    onPress={() => {
                      setUnlockModalVisible(false);
                      setBuildingToRepair(null);
                    }}
                    style={dustTownCloseButton}
                    hitSlop={10}
                    accessibilityRole="button"
                    accessibilityLabel="Close"
                  >
                    <Image
                      source={require('../../assets/images/tdesign_close.png')}
                    />
                  </Pressable>

                  <View style={{ alignItems: 'center', paddingVertical: 26 }}>
                    <Text style={dustTownConfirmTitle}>Unlock for:</Text>

                    <Pressable
                      onPress={confirmUnlock}
                      style={dustTownConfirmPricePill}
                      accessibilityRole="button"
                      accessibilityLabel="Unlock for 30 boards"
                    >
                      <Text style={dustTownConfirmPrice}>30</Text>
                      <Image
                        source={boardsIcon}
                        style={dustTownConfirmPriceIcon}
                        resizeMode="contain"
                      />
                    </Pressable>

                    <Pressable
                      onPress={() => {
                        setUnlockModalVisible(false);
                        setBuildingToRepair(null);
                      }}
                      style={{ marginTop: 10 }}
                      accessibilityRole="button"
                      accessibilityLabel="No"
                    >
                      <Text style={dustTownNoText}>No</Text>
                    </Pressable>
                  </View>
                </LinearGradient>
              </View>
            </View>
          </Modal>

          <Modal
            visible={!!message}
            transparent
            animationType="fade"
            onRequestClose={() => setMessage(null)}
            statusBarTranslucent={Platform.OS === 'android'}
          >
            <View style={dustTownModalOverlay}>
              <View style={dustTownMessageContainer}>
                <Pressable
                  onPress={() => setMessage(null)}
                  style={dustTownCloseButton}
                  hitSlop={10}
                  accessibilityRole="button"
                  accessibilityLabel="Close message"
                >
                  <Text style={{ fontSize: 20, fontWeight: '900' }}>×</Text>
                </Pressable>

                <Text style={dustTownMessageText}>{message}</Text>

                <Image
                  source={require('../../assets/images/dustcactus.png')}
                  style={dustTownMessageImage}
                  resizeMode="contain"
                />
              </View>
            </View>
          </Modal>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

const dustTownBackground = { flex: 1 };

const dustTownScrollContent = { flexGrow: 1, height: 800 };

const dustTownScreenContent = { flex: 1, paddingTop: 52 };

const dustTownHeaderWrapper = { paddingHorizontal: 16 };

const dustTownHeaderBorder = {
  borderWidth: 4,
  borderColor: '#7C3A20',
  borderRadius: 12,
  overflow: 'hidden' as const,
};

const dustTownHeaderBackground = {
  height: 65,
  borderRadius: 6,
  alignItems: 'center' as const,
  justifyContent: 'center' as const,
};

const dustTownHeaderSpacer = { width: 34 };

const dustTownBackButton = {
  position: 'absolute' as const,
  left: 12,
  width: 34,
  height: 34,
  alignItems: 'center' as const,
  justifyContent: 'center' as const,
};

const dustTownHeaderTitle = {
  fontSize: 26,
  fontWeight: '900' as const,
  color: '#FFD77B',
  textShadowColor: 'rgba(0,0,0,0.35)',
  textShadowOffset: { width: 0, height: 2 },
  textShadowRadius: 2,
};

const dustTownCounterContainer = {
  alignSelf: 'center' as const,
  marginTop: 12,
  paddingHorizontal: 16,
  height: 40,
  borderRadius: 20,
  backgroundColor: '#F7B96E',
  borderWidth: 3,
  borderColor: '#7C3A20',
  flexDirection: 'row' as const,
  alignItems: 'center' as const,
  gap: 10,
};

const dustTownCounterNumber = {
  fontSize: 20,
  fontWeight: '900' as const,
  color: '#2a190f',
};

const dustTownCounterIcon = { width: 46, height: 20 };

const dustTownScene = { flex: 1 };

const dustTownBuildingWrapper = { position: 'absolute' as const };

const dustTownBuildingImage: ImageStyle = { width: '100%', height: '100%' };

const dustTownUnlockPlacement = { position: 'absolute' as const };

const dustTownUnlockButton = {
  width: 120,
  height: 36,
  borderRadius: 50,
  backgroundColor: '#85C463',
  borderWidth: 3,
  borderColor: '#743E25',
  alignItems: 'center' as const,
  justifyContent: 'center' as const,
};

const dustTownUnlockText = {
  color: '#260C04',
  fontSize: 16,
  fontWeight: '800' as const,
};

const dustTownModalOverlay = {
  flex: 1,
  backgroundColor: 'rgba(0,0,0,0.25)',
  alignItems: 'center' as const,
  justifyContent: 'center' as const,
  paddingHorizontal: 18,
};

const dustTownModalFrame = {
  alignItems: 'center' as const,
  borderWidth: 3,
  borderColor: '#7C3A20',
  borderRadius: 30,
};

const dustTownConfirmCard = {
  borderRadius: 28,
  alignItems: 'center' as const,
  width: 200,
};

const dustTownCloseButton = {
  position: 'absolute' as const,
  right: 12,
  top: 10,
};

const dustTownConfirmTitle = {
  fontSize: 19,
  fontWeight: '600' as const,
  marginTop: 8,
  color: '#260C04',
  marginBottom: 10,
};

const dustTownConfirmPricePill = {
  marginTop: 12,
  height: 44,
  borderRadius: 22,
  paddingHorizontal: 16,
  backgroundColor: '#7CBA52',
  borderWidth: 3,
  borderColor: '#2E4A1E',
  flexDirection: 'row' as const,
  alignItems: 'center' as const,
  gap: 10,
};

const dustTownConfirmPrice = {
  fontSize: 18,
  fontWeight: '900' as const,
  color: '#1b1b1b',
};

const dustTownConfirmPriceIcon = { width: 46, height: 20 };

const dustTownNoText = {
  fontSize: 20,
  fontWeight: '700' as const,
  color: '#260C04',
};

const dustTownMessageContainer: ViewStyle = {
  width: '92%',
  maxWidth: 420,
  borderRadius: 18,
  backgroundColor: '#F3D3A3',
  borderWidth: 3,
  borderColor: '#7C3A20',
  padding: 16,
};

const dustTownMessageText = {
  fontSize: 18,
  fontWeight: '900' as const,
  color: '#2a190f',
  marginTop: 10,
  lineHeight: 24,
};

const dustTownMessageImage = {
  width: 140,
  height: 140,
  alignSelf: 'center' as const,
  marginTop: 12,
};
