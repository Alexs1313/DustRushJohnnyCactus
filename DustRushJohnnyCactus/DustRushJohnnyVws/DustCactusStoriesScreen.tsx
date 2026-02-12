import React, { useCallback, useEffect, useMemo, useState } from 'react';
import {
  View,
  Text,
  ImageBackground,
  Pressable,
  Image,
  ScrollView,
  Share,
} from 'react-native';
import type { ViewStyle } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import type { DustProgress } from '../DustRushJohnnyUtls/dustProgressStorage';
import {
  loadDustProgress,
  saveStory,
  removeSavedStory,
  isStorySaved,
} from '../DustRushJohnnyUtls/dustProgressStorage';

const townBackground = require('../../assets/images/townBg.png');

type HeaderProps = {
  title: string;
  onBack: () => void;
};

const Header: React.FC<HeaderProps> = ({ title, onBack }) => (
  <View style={dustStoriesHeaderWrapper}>
    <View style={dustStoriesHeaderBorder}>
      <LinearGradient
        colors={['#DB8F4C', '#A9462F']}
        style={dustStoriesHeaderBar}
      >
        <Pressable onPress={onBack} style={dustStoriesBackButton} hitSlop={12}>
          <Image source={require('../../assets/images/dusstback.png')} />
        </Pressable>

        <Text style={dustStoriesHeaderTitle}>{title}</Text>

        <View style={dustStoriesHeaderSpacer} />
      </LinearGradient>
    </View>
  </View>
);

type IconButtonProps = {
  onPress: () => void;
  icon: any;
};

const IconButton: React.FC<IconButtonProps> = ({ onPress, icon }) => (
  <Pressable
    onPress={onPress}
    style={({ pressed }) => [pressed && { opacity: 0.85 }]}
  >
    <Image source={icon} resizeMode="contain" />
  </Pressable>
);

type NextButtonProps = {
  onPress: () => void;
};

const NextButton: React.FC<NextButtonProps> = ({ onPress }) => (
  <Pressable
    onPress={onPress}
    style={({ pressed }) => [
      dustStoriesNextButton,
      pressed && { opacity: 0.9 },
    ]}
  >
    <Text style={dustStoriesNextButtonText}>Next</Text>
  </Pressable>
);

export default function CactusStoriesScreen() {
  const navigation = useNavigation();

  const [progress, setProgress] = useState<DustProgress | null>(null);
  const [storyIndex, setStoryIndex] = useState(0);
  const [savedStoryIds, setSavedStoryIds] = useState<Set<number>>(new Set());

  const refreshProgress = useCallback(async () => {
    const p = await loadDustProgress();
    setProgress(p);
  }, []);

  const refreshSavedStories = useCallback(async (storyIds: number[]) => {
    const saved = await Promise.all(
      storyIds.map(async id => ({
        id,
        saved: await isStorySaved(id),
      })),
    );
    const savedIds = new Set(saved.filter(s => s.saved).map(s => s.id));
    setSavedStoryIds(savedIds);
  }, []);

  useFocusEffect(
    useCallback(() => {
      refreshProgress();
      return () => {};
    }, [refreshProgress]),
  );

  const townFixed = Number(progress?.townFixed || 0);
  const unlockedCount = Math.max(0, Math.min(4, townFixed));

  const stories = useMemo(
    () => [
      {
        id: 1,
        title: 'Saloon Cactus – Bartender',
        image: require('../../assets/images/story1.png'),
        body:
          '"No music. No laughter. Just silence."\n' +
          'That’s what my saloon became after the storm.\n' +
          'Broken chairs, smashed bottles,\n' +
          'dust everywhere.\n' +
          'I thought the party was over for good.\n' +
          'But you brought the boards.\n' +
          'You raised the walls again.\n' +
          'Now the piano plays.\n' +
          'Glasses clink.\n' +
          'Stories flow like whiskey.',
      },
      {
        id: 2,
        title: 'Cactus Mechanic – Workshop Owner',
        image: require('../../assets/images/story2.png'),
        body:
          '"That storm nearly wiped out my workshop...\n' +
          'tools buried, walls cracked, everything gone."\n' +
          'I’ve spent my whole life fixing things — wagons,\n' +
          'doors, broken dreams.\n\n' +
          'When the dust settled, I thought it was over.\n' +
          'But you came.\n' +
          'You found my tools.\n' +
          'You rebuilt my shop.\n' +
          'Now the hammer sings again.\n' +
          'Sparks fly like fireflies.\n' +
          "Thank you, partner. This town still needs fixing — and I'm ready.",
      },
      {
        id: 3,
        title: 'Stable Cactus – Horse Keeper',
        image: require('../../assets/images/story3.png'),
        body:
          '"They ran... every single one of them."\n' +
          'The storm scared my horses.\n' +
          'They disappeared into the dust.\n' +
          'I stood alone, calling their names.\n' +
          'Thinking I lost them forever.\n\n' +
          'But you found them.\n' +
          'One by one.\n' +
          'You brought them home.\n' +
          'Now I hear hooves again.\n' +
          'That’s the sound of hope.\n' +
          'Thank you, friend. You saved more than a stable — you saved my heart.',
      },
      {
        id: 4,
        title: 'Local Cactus Mom – With Kids',
        image: require('../../assets/images/story4.png'),
        body:
          '"Mom... where will we sleep now?"\n' +
          'That’s what my little cactus asked after the storm.\n' +
          'Our roof was gone.\n' +
          'Windows broken. Everything felt cold.\n' +
          'I tried to smile. But inside... I was scared.\n\n' +
          'Then you came.\n' +
          'You rebuilt our home.\n' +
          'You gave my kids a safe place again.\n' +
          'Now they laugh.\n' +
          'They play.\n' +
          'They dream.\n\n' +
          "Thank you for giving us our home back. You're our hero.",
      },
    ],
    [],
  );

  const availableStories = stories.slice(0, unlockedCount);

  const safeIndex = availableStories.length
    ? Math.min(storyIndex, availableStories.length - 1)
    : 0;

  const currentStory = availableStories[safeIndex];

  // Refresh saved stories when available stories change
  useEffect(() => {
    if (availableStories.length > 0) {
      const storyIds = availableStories.map(s => s.id);
      refreshSavedStories(storyIds);
    }
  }, [availableStories.length, refreshSavedStories]);

  const goNext = () => {
    if (!availableStories.length) return;
    setStoryIndex(i => (i + 1) % availableStories.length);
  };

  const shareStory = async () => {
    if (!currentStory) return;
    await Share.share({
      message: `${currentStory.title}\n\n${currentStory.body}`,
    });
  };

  const handleSaveStory = async () => {
    if (!currentStory) return;
    const isSaved = savedStoryIds.has(currentStory.id);
    if (isSaved) {
      await removeSavedStory(currentStory.id);
      setSavedStoryIds(prev => {
        const next = new Set(prev);
        next.delete(currentStory.id);
        return next;
      });
    } else {
      await saveStory(currentStory);
      setSavedStoryIds(prev => new Set(prev).add(currentStory.id));
    }
  };

  const currentStoryIsSaved = currentStory
    ? savedStoryIds.has(currentStory.id)
    : false;

  return (
    <ImageBackground
      source={townBackground}
      style={dustStoriesBackground}
      resizeMode="cover"
    >
      <ScrollView
        contentContainerStyle={dustStoriesScrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={dustStoriesScreenContent}>
          <Header
            title="Cactus Stories"
            onBack={() => (navigation as any).goBack()}
          />

          {!availableStories.length ? (
            <View style={dustStoriesEmptyWrapper}>
              <Text style={dustStoriesEmptyText}>
                You have no stories available.
              </Text>
              <Text style={dustStoriesEmptyText}>Stories are added after</Text>
              <Text style={dustStoriesEmptyText}>houses are restored.</Text>
            </View>
          ) : (
            <>
              <View style={[dustStoriesCardOuter, { marginTop: 204 }]}>
                <Image
                  source={currentStory.image}
                  style={{
                    position: 'absolute',
                    top: -180,
                    alignSelf: 'center',
                    zIndex: 10,
                  }}
                  resizeMode="contain"
                />

                <LinearGradient
                  colors={['#FEE1BE', '#F8BF7B']}
                  style={dustStoriesCardContainer}
                >
                  <View style={{ padding: 16 }}>
                    <View style={dustStoriesDashedBox}>
                      <View style={{ padding: 20, paddingTop: 60 }}>
                        <Text style={dustStoriesStoryTitle}>
                          {currentStory.title}
                        </Text>
                        <Text style={dustStoriesStoryBody}>
                          {currentStory.body}
                        </Text>
                      </View>
                    </View>
                  </View>
                </LinearGradient>
              </View>

              <View style={dustStoriesBottomRow}>
                <IconButton
                  onPress={shareStory}
                  icon={require('../../assets/images/sharebtn.png')}
                />
                <NextButton onPress={goNext} />
                <IconButton
                  onPress={handleSaveStory}
                  icon={
                    currentStoryIsSaved
                      ? require('../../assets/images/saved.png')
                      : require('../../assets/images/save.png')
                  }
                />
              </View>
            </>
          )}
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

const dustStoriesBackground = { flex: 1 };

const dustStoriesScrollContent = { flexGrow: 1 };

const dustStoriesScreenContent = {
  flex: 1,
  paddingTop: 52,
  paddingBottom: 24,
};

const dustStoriesHeaderWrapper = { paddingHorizontal: 16 };

const dustStoriesHeaderBorder = {
  borderWidth: 4,
  borderColor: '#7C3A20',
  borderRadius: 12,
  overflow: 'hidden' as const,
};

const dustStoriesHeaderBar = {
  height: 65,
  borderRadius: 6,
  alignItems: 'center' as const,
  justifyContent: 'center' as const,
};

const dustStoriesBackButton = {
  position: 'absolute' as const,
  left: 12,
  width: 34,
  height: 34,
  alignItems: 'center' as const,
  justifyContent: 'center' as const,
};

const dustStoriesHeaderSpacer = { width: 34 };

const dustStoriesHeaderTitle = {
  fontSize: 26,
  fontWeight: '900' as const,
  color: '#FFD77B',
  textShadowColor: 'rgba(0,0,0,0.35)',
  textShadowOffset: { width: 0, height: 2 },
  textShadowRadius: 2,
};

const dustStoriesEmptyWrapper = {
  flex: 1,
  alignItems: 'center' as const,
  justifyContent: 'center' as const,
  paddingHorizontal: 24,
};

const dustStoriesEmptyText = {
  fontSize: 22,
  fontWeight: '700' as const,
  color: '#1b1b1b',
  textAlign: 'center' as const,
  marginTop: 10,
};

const dustStoriesCardOuter = {
  alignItems: 'center' as const,
  marginTop: 12,
  paddingHorizontal: 18,
};

const dustStoriesCardContainer: ViewStyle = {
  width: '100%',
  maxWidth: 360,
  borderRadius: 30,
};

const dustStoriesDashedBox = {
  borderRadius: 18,
  paddingHorizontal: 16,
  paddingVertical: 14,
  borderWidth: 2,
  borderColor: 'rgba(124,58,32,0.55)',
  borderStyle: 'dashed' as const,
};

const dustStoriesStoryTitle = {
  textAlign: 'center' as const,
  fontSize: 20,
  fontWeight: '600' as const,
  color: '#260C04',
  marginBottom: 15,
};

const dustStoriesStoryBody = {
  textAlign: 'center' as const,
  fontSize: 14,
  fontWeight: '500' as const,
  color: '#260C04',
  lineHeight: 20,
};

const dustStoriesBottomRow = {
  marginTop: 16,
  flexDirection: 'row' as const,
  alignItems: 'center' as const,
  justifyContent: 'center' as const,
  gap: 8,
};

const dustStoriesNextButton = {
  width: 122,
  height: 37,
  borderRadius: 50,
  backgroundColor: '#E99938',
  borderWidth: 2,
  borderColor: '#260C04',
  alignItems: 'center' as const,
  justifyContent: 'center' as const,
};

const dustStoriesNextButtonText = {
  fontSize: 16,
  fontWeight: '500' as const,
  color: '#260C04',
};

const dustStoriesSavedLink = {
  marginTop: 12,
  alignSelf: 'center' as const,
  paddingVertical: 8,
  paddingHorizontal: 16,
};

const dustStoriesSavedLinkText = {
  fontSize: 16,
  fontWeight: '600' as const,
  color: '#7C3A20',
  textDecorationLine: 'underline' as const,
};
