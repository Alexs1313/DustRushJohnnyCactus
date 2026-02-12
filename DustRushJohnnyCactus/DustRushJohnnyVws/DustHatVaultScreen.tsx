import React, { useCallback, useMemo, useState } from 'react';
import {
  Image,
  ImageBackground,
  Pressable,
  ScrollView,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import type { ViewStyle } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useFocusEffect, useNavigation } from '@react-navigation/native';

import { loadDustProgress } from '../DustRushJohnnyUtls/dustProgressStorage';

const backgroundImage = require('../../assets/images/dusthomeappbg.png');

const hatItems = [
  { id: 1, image: require('../../assets/images/dusthat1.png') },
  { id: 2, image: require('../../assets/images/dusthat2.png') },
  { id: 3, image: require('../../assets/images/dusthat3.png') },
  { id: 4, image: require('../../assets/images/dusthat4.png') },
  { id: 5, image: require('../../assets/images/dusthat5.png') },
  { id: 6, image: require('../../assets/images/dusthat6.png') },
  { id: 7, image: require('../../assets/images/dusthat7.png') },
  { id: 8, image: require('../../assets/images/dusthat8.png') },
] as const;

type HeaderBarProps = {
  title: string;
  onBack: () => void;
};

const HeaderBar: React.FC<HeaderBarProps> = ({ title, onBack }) => (
  <View style={dustHatHeaderWrapper}>
    <View style={dustHatHeaderBorder}>
      <LinearGradient colors={['#DB8F4C', '#A9462F']} style={dustHatHeaderBar}>
        <Pressable onPress={onBack} style={dustHatBackButton} hitSlop={12}>
          <Image source={require('../../assets/images/dusstback.png')} />
        </Pressable>

        <Text style={dustHatHeaderTitle}>{title}</Text>

        <View style={dustHatHeaderSpacer} />
      </LinearGradient>
    </View>
  </View>
);

type HatTileProps = {
  unlocked: boolean;
  image: any;
  onPress?: () => void;
};

const HatTile: React.FC<HatTileProps> = ({ unlocked, image, onPress }) => {
  if (unlocked) {
    return (
      <ImageBackground
        source={require('../../assets/images/unlockedframe.png')}
        style={dustHatTileFrame}
      >
        <Pressable onPress={onPress}>
          <Image source={image} style={dustHatHatImage} />
        </Pressable>
      </ImageBackground>
    );
  }

  return (
    <ImageBackground
      source={require('../../assets/images/lockedframe.png')}
      style={dustHatTileFrame}
    >
      <View style={dustHatLockWrapper}>
        <Image
          source={require('../../assets/images/mingcute_lock-fill.png')}
          resizeMode="contain"
        />
      </View>
    </ImageBackground>
  );
};

export default function HatVaultScreen() {
  const navigation = useNavigation<any>();
  const { height } = useWindowDimensions();

  const [progress, setProgress] = useState<any>(null);

  const refreshProgress = useCallback(async () => {
    const p = await loadDustProgress();
    setProgress(p);
  }, []);

  useFocusEffect(
    useCallback(() => {
      refreshProgress();
    }, [refreshProgress]),
  );

  const unlockedCount = useMemo(() => {
    if (!progress) return 0;

    const hats = Number(progress.hats || 0);

    const completedLevels = progress.completedLevels || {};
    const completedCount = Object.keys(completedLevels).filter(
      key => completedLevels[key],
    ).length;

    return Math.max(hats, completedCount);
  }, [progress]);

  return (
    <ImageBackground
      source={backgroundImage}
      style={dustHatBackground}
      resizeMode="cover"
    >
      <ScrollView
        contentContainerStyle={dustHatScrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={[dustHatScreenContent, { paddingTop: height * 0.07 }]}>
          <HeaderBar title="Hat Vault" onBack={() => navigation.goBack()} />

          <View style={dustHatGridWrapper}>
            <View style={dustHatGrid}>
              {hatItems.map((hat, index) => {
                const unlocked = index < unlockedCount;

                return (
                  <HatTile
                    key={hat.id}
                    unlocked={unlocked}
                    image={hat.image}
                    onPress={() => {
                      // navigation.navigate('...', { hatId: hat.id })
                    }}
                  />
                );
              })}
            </View>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

const dustHatBackground = { flex: 1 };

const dustHatScrollContent = { flexGrow: 1 };

const dustHatScreenContent = { flex: 1, paddingBottom: 50 };

const dustHatHeaderWrapper = { paddingHorizontal: 16 };

const dustHatHeaderBorder = {
  borderWidth: 4,
  borderColor: '#7C3A20',
  borderRadius: 12,
  overflow: 'hidden' as const,
};

const dustHatHeaderBar = {
  height: 65,
  borderRadius: 6,
  alignItems: 'center' as const,
  justifyContent: 'center' as const,
};

const dustHatHeaderSpacer = { width: 34 };

const dustHatBackButton = {
  position: 'absolute' as const,
  left: 12,
  width: 34,
  height: 34,
  alignItems: 'center' as const,
  justifyContent: 'center' as const,
};

const dustHatHeaderTitle = {
  fontSize: 26,
  fontWeight: '900' as const,
  color: '#FFD77B',
  textShadowColor: 'rgba(0,0,0,0.35)',
  textShadowOffset: { width: 0, height: 2 },
  textShadowRadius: 2,
};

const dustHatGridWrapper = {
  flex: 1,
  alignItems: 'center' as const,
  justifyContent: 'center' as const,
  paddingTop: 30,
};

const dustHatGrid: ViewStyle = {
  width: '90%',
  flexDirection: 'row',
  flexWrap: 'wrap',
  gap: 12,
  justifyContent: 'center',
};

const dustHatTileFrame = {
  width: 115,
  height: 112,
  marginBottom: 8,
  alignItems: 'center' as const,
  justifyContent: 'center' as const,
};

const dustHatLockWrapper = {
  alignItems: 'center' as const,
  justifyContent: 'center' as const,
};

const dustHatHatImage = { width: 120, height: 65 };
