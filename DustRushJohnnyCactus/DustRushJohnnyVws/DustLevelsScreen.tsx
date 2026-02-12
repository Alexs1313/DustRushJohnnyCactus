import React, { useCallback, useMemo, useState } from 'react';
import {
  Image,
  ImageBackground,
  Pressable,
  ScrollView,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import type { ViewStyle } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useFocusEffect, useNavigation } from '@react-navigation/native';

import type { DustProgress } from '../DustRushJohnnyUtls/dustProgressStorage';
import {
  loadDustProgress,
  setLastSelectedLevel,
} from '../DustRushJohnnyUtls/dustProgressStorage';
import type { DustLevel } from '../DustRushJohnnyDt/dustLevels';
import { dustLevels } from '../DustRushJohnnyDt/dustLevels';

const backgroundImage = require('../../assets/images/dusthomeappbg.png');

type HeaderBarProps = {
  title: string;
  onBack: () => void;
};

const dustLevelsHeaderBorder = {
  borderWidth: 4,
  borderColor: '#7C3A20',
  borderRadius: 12,
  overflow: 'hidden' as const,
};

const HeaderBar: React.FC<HeaderBarProps> = ({ title, onBack }) => (
  <View style={dustLevelsHeaderWrapper}>
    <View style={dustLevelsHeaderBorder}>
      <LinearGradient
        colors={['#DB8F4C', '#A9462F']}
        style={dustLevelsHeaderBar}
      >
        <Pressable onPress={onBack} style={dustLevelsBackButton} hitSlop={12}>
          <Image source={require('../../assets/images/dusstback.png')} />
        </Pressable>

        <Text style={dustLevelsHeaderTitle}>{title}</Text>

        <View style={dustLevelsHeaderSpacer} />
      </LinearGradient>
    </View>
  </View>
);

type LevelTileProps = {
  number: number;
  unlocked: boolean;
  selected: boolean;
  onPress: () => void;
};

const LevelTile: React.FC<LevelTileProps> = ({
  number,
  unlocked,
  selected,
  onPress,
}) => {
  const tileStyle = [
    dustLevelsTileBase,
    !unlocked && dustLevelsTileLocked,
    unlocked && !selected && dustLevelsTileUnlocked,
    selected && dustLevelsTileSelected,
  ];

  return (
    <Pressable disabled={!unlocked} onPress={onPress} style={tileStyle}>
      <Text style={dustLevelsTileText}>{number}</Text>
    </Pressable>
  );
};

type DustButtonProps = {
  title: string;
  onPress: () => void;
};

const DustButton: React.FC<DustButtonProps> = ({ title, onPress }) => (
  <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
    <ImageBackground
      source={require('../../assets/images/dustonbtn.png')}
      style={dustLevelsDustButton}
    >
      <Text style={dustLevelsDustButtonText}>{title}</Text>
    </ImageBackground>
  </TouchableOpacity>
);

export default function LevelsScreen() {
  const navigation = useNavigation<any>();
  const { height } = useWindowDimensions();

  const [progress, setProgress] = useState<DustProgress | null>(null);
  const [selectedLevel, setSelectedLevel] = useState<number>(1);

  useFocusEffect(
    useCallback(() => {
      (async () => {
        const p = await loadDustProgress();
        setProgress(p);

        const lastSelected = p?.lastSelectedLevel ?? 1;

        if (Number.isFinite(lastSelected)) {
          setSelectedLevel(
            Math.max(1, Math.min(dustLevels.length, lastSelected)),
          );
        }
      })();
    }, []),
  );

  const maxUnlockedLevel = useMemo(() => {
    if (!progress) return 1;

    const completedLevels = progress.completedLevels || {};

    const completedIds = Object.keys(completedLevels)
      .filter(key => completedLevels[key])
      .map(key => parseInt(key, 10))
      .filter(n => Number.isFinite(n));

    const maxCompleted = completedIds.length ? Math.max(...completedIds) : 0;

    return Math.min(maxCompleted + 1, dustLevels.length);
  }, [progress]);

  const handleSelectLevel = async (levelId: number) => {
    if (levelId > maxUnlockedLevel) return;
    setSelectedLevel(levelId);
    await setLastSelectedLevel(levelId);
    navigation.navigate('DustPlay', { levelId });
  };

  const startSelectedLevel = () => {
    navigation.navigate('DustPlay', { levelId: selectedLevel });
  };

  return (
    <ImageBackground
      source={backgroundImage}
      style={dustLevelsBackground}
      resizeMode="cover"
    >
      <ScrollView
        contentContainerStyle={dustLevelsScrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={[dustLevelsScreenContent, { paddingTop: height * 0.07 }]}>
          <HeaderBar title="Levels" onBack={() => navigation.goBack()} />

          <View style={dustLevelsGridWrapper}>
            <View style={dustLevelsGrid}>
              {dustLevels.map(level => {
                const unlocked = level.id <= maxUnlockedLevel;

                return (
                  <LevelTile
                    key={level.id}
                    number={level.id}
                    unlocked={unlocked}
                    selected={selectedLevel === level.id}
                    onPress={() => handleSelectLevel(level.id)}
                  />
                );
              })}
            </View>
          </View>

          <View style={dustLevelsStartWrapper}>
            <DustButton
              title={`Start Level ${selectedLevel}`}
              onPress={startSelectedLevel}
            />
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

const dustLevelsBackground = { flex: 1 };

const dustLevelsScrollContent = { flexGrow: 1 };

const dustLevelsHeaderWrapper = { paddingHorizontal: 16 };

const dustLevelsHeaderSpacer = { width: 34 };

const dustLevelsHeaderBar = {
  height: 65,
  borderRadius: 6,
  alignItems: 'center' as const,
  justifyContent: 'center' as const,
};

const dustLevelsBackButton = {
  position: 'absolute' as const,
  left: 12,
  width: 34,
  height: 34,
  alignItems: 'center' as const,
  justifyContent: 'center' as const,
};

const dustLevelsHeaderTitle = {
  fontSize: 26,
  fontWeight: '900' as const,
  color: '#FFD77B',
  textShadowColor: 'rgba(0,0,0,0.35)',
  textShadowOffset: { width: 0, height: 2 },
  textShadowRadius: 2,
};

const dustLevelsScreenContent = { flex: 1, paddingBottom: 50 };

const dustLevelsGridWrapper = {
  flex: 1,
  alignItems: 'center' as const,
  justifyContent: 'center' as const,
};

const dustLevelsGrid: ViewStyle = {
  width: '86%',
  maxWidth: 360,
  flexDirection: 'row',
  flexWrap: 'wrap',
  gap: 28,
  justifyContent: 'center',
  paddingVertical: 10,
  marginTop: 30,
};

const dustLevelsTileBase = {
  width: 82,
  height: 82,
  borderRadius: 10,
  backgroundColor: '#AEFF82',
  borderWidth: 4,
  borderColor: '#824021',
  alignItems: 'center' as const,
  justifyContent: 'center' as const,
};

const dustLevelsTileLocked = { backgroundColor: '#F7B96E' };

const dustLevelsTileUnlocked = {};

const dustLevelsTileSelected = { backgroundColor: '#FF8A37' };

const dustLevelsTileText = {
  fontSize: 32,
  fontWeight: '900' as const,
  color: '#7C3A20',
};

const dustLevelsDustButton = {
  width: 194,
  height: 60,
  justifyContent: 'center' as const,
  alignItems: 'center' as const,
  marginTop: 20,
  alignSelf: 'center' as const,
};

const dustLevelsDustButtonText = {
  color: '#FBC914',
  fontSize: 22,
  fontWeight: '800' as const,
};

const dustLevelsStartWrapper = {
  paddingBottom: 26,
  alignItems: 'center' as const,
};
