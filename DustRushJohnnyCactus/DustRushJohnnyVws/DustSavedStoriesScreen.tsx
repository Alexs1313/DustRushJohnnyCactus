import React, { useCallback, useMemo, useState } from 'react';
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
import {
  loadSavedStories,
  removeSavedStory,
} from '../DustRushJohnnyUtls/dustProgressStorage';

const townBackground = require('../../assets/images/townBg.png');

const STORY_IMAGES: Record<number, number> = {
  1: require('../../assets/images/story1.png'),
  2: require('../../assets/images/story2.png'),
  3: require('../../assets/images/story3.png'),
  4: require('../../assets/images/story4.png'),
};

type HeaderProps = {
  title: string;
  onBack: () => void;
};

const Header: React.FC<HeaderProps> = ({ title, onBack }) => (
  <View style={dustSavedHeaderWrapper}>
    <View style={dustSavedHeaderBorder}>
      <LinearGradient
        colors={['#DB8F4C', '#A9462F']}
        style={dustSavedHeaderBar}
      >
        <Pressable onPress={onBack} style={dustSavedBackButton} hitSlop={12}>
          <Image source={require('../../assets/images/dusstback.png')} />
        </Pressable>

        <Text style={dustSavedHeaderTitle}>{title}</Text>

        <View style={dustSavedHeaderSpacer} />
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
    style={({ pressed }) => [dustSavedNextButton, pressed && { opacity: 0.9 }]}
  >
    <Text style={dustSavedNextButtonText}>Next</Text>
  </Pressable>
);

type SavedStory = { id: number; title: string; body: string };

export default function DustSavedStoriesScreen() {
  const navigation = useNavigation();
  const [savedList, setSavedList] = useState<SavedStory[]>([]);
  const [storyIndex, setStoryIndex] = useState(0);

  const refreshSaved = useCallback(async () => {
    const list = await loadSavedStories();
    setSavedList(list);
  }, []);

  useFocusEffect(
    useCallback(() => {
      refreshSaved();
      return () => {};
    }, [refreshSaved]),
  );

  const safeIndex =
    savedList.length > 0 ? Math.min(storyIndex, savedList.length - 1) : 0;
  const currentStory = savedList[safeIndex];
  const currentImage = currentStory
    ? STORY_IMAGES[currentStory.id] ?? STORY_IMAGES[1]
    : null;

  const goNext = () => {
    if (savedList.length <= 1) return;
    setStoryIndex(i => (i + 1) % savedList.length);
  };

  const shareStory = async () => {
    if (!currentStory) return;
    await Share.share({
      message: `${currentStory.title}\n\n${currentStory.body}`,
    });
  };

  const handleRemoveSaved = async () => {
    if (!currentStory) return;
    await removeSavedStory(currentStory.id);
    const nextList = savedList.filter(s => s.id !== currentStory.id);
    setSavedList(nextList);
    setStoryIndex(i => Math.max(0, Math.min(i, nextList.length - 1)));
  };

  return (
    <ImageBackground
      source={townBackground}
      style={dustSavedBackground}
      resizeMode="cover"
    >
      <ScrollView
        contentContainerStyle={dustSavedScrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={dustSavedScreenContent}>
          <Header
            title="Saved Stories"
            onBack={() => (navigation as any).goBack()}
          />

          {savedList.length === 0 ? (
            <View style={dustSavedEmptyWrapper}>
              <Text style={dustSavedEmptyText}>You have no saved stories.</Text>
            </View>
          ) : (
            <>
              <View style={[dustSavedCardOuter, { marginTop: 204 }]}>
                {currentImage && (
                  <Image
                    source={currentImage}
                    style={{
                      position: 'absolute',
                      top: -180,
                      alignSelf: 'center',
                      zIndex: 10,
                    }}
                    resizeMode="contain"
                  />
                )}

                <LinearGradient
                  colors={['#FEE1BE', '#F8BF7B']}
                  style={dustSavedCardContainer}
                >
                  <View style={{ padding: 16 }}>
                    <View style={dustSavedDashedBox}>
                      <View style={{ padding: 20, paddingTop: 60 }}>
                        <Text style={dustSavedStoryTitle}>
                          {currentStory!.title}
                        </Text>
                        <Text style={dustSavedStoryBody}>
                          {currentStory!.body}
                        </Text>
                      </View>
                    </View>
                  </View>
                </LinearGradient>
              </View>

              <View style={dustSavedBottomRow}>
                <IconButton
                  onPress={shareStory}
                  icon={require('../../assets/images/sharebtn.png')}
                />
                <NextButton onPress={goNext} />
                <IconButton
                  onPress={handleRemoveSaved}
                  icon={require('../../assets/images/saved.png')}
                />
              </View>
            </>
          )}
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

const dustSavedBackground = { flex: 1 };

const dustSavedScrollContent = { flexGrow: 1 };

const dustSavedScreenContent = {
  flex: 1,
  paddingTop: 52,
  paddingBottom: 24,
};

const dustSavedHeaderWrapper = { paddingHorizontal: 16 };

const dustSavedHeaderBorder = {
  borderWidth: 4,
  borderColor: '#7C3A20',
  borderRadius: 12,
  overflow: 'hidden' as const,
};

const dustSavedHeaderBar = {
  height: 65,
  borderRadius: 6,
  alignItems: 'center' as const,
  justifyContent: 'center' as const,
};

const dustSavedBackButton = {
  position: 'absolute' as const,
  left: 12,
  width: 34,
  height: 34,
  alignItems: 'center' as const,
  justifyContent: 'center' as const,
};

const dustSavedHeaderSpacer = { width: 34 };

const dustSavedHeaderTitle = {
  fontSize: 26,
  fontWeight: '900' as const,
  color: '#FFD77B',
  textShadowColor: 'rgba(0,0,0,0.35)',
  textShadowOffset: { width: 0, height: 2 },
  textShadowRadius: 2,
};

const dustSavedEmptyWrapper = {
  flex: 1,
  alignItems: 'center' as const,
  justifyContent: 'center' as const,
  paddingHorizontal: 24,
};

const dustSavedEmptyText = {
  fontSize: 22,
  fontWeight: '700' as const,
  color: '#1b1b1b',
  textAlign: 'center' as const,
  marginTop: 10,
};

const dustSavedCardOuter = {
  alignItems: 'center' as const,
  marginTop: 12,
  paddingHorizontal: 18,
};

const dustSavedCardContainer: ViewStyle = {
  width: '100%',
  maxWidth: 360,
  borderRadius: 30,
};

const dustSavedDashedBox = {
  borderRadius: 18,
  paddingHorizontal: 16,
  paddingVertical: 14,
  borderWidth: 2,
  borderColor: 'rgba(124,58,32,0.55)',
  borderStyle: 'dashed' as const,
};

const dustSavedStoryTitle = {
  textAlign: 'center' as const,
  fontSize: 20,
  fontWeight: '600' as const,
  color: '#260C04',
  marginBottom: 15,
};

const dustSavedStoryBody = {
  textAlign: 'center' as const,
  fontSize: 13,
  fontWeight: '500' as const,
  color: '#260C04',
  lineHeight: 20,
};

const dustSavedBottomRow = {
  marginTop: 16,
  flexDirection: 'row' as const,
  alignItems: 'center' as const,
  justifyContent: 'center' as const,
  gap: 8,
};

const dustSavedNextButton = {
  width: 122,
  height: 37,
  borderRadius: 50,
  backgroundColor: '#E99938',
  borderWidth: 2,
  borderColor: '#260C04',
  alignItems: 'center' as const,
  justifyContent: 'center' as const,
};

const dustSavedNextButtonText = {
  fontSize: 16,
  fontWeight: '500' as const,
  color: '#260C04',
};
