import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import {
  Animated,
  Image,
  ImageBackground,
  Modal,
  Platform,
  Pressable,
  ScrollView,
  Share,
  Text,
  TextInput,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import type { ImageStyle, ViewStyle } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Orientation from 'react-native-orientation-locker';

import { dustLevels } from '../DustRushJohnnyDt/dustLevels';
import { markLevelCompletedAndReward } from '../DustRushJohnnyUtls/dustProgressStorage';

type ResultState = 'win' | 'lose' | null;

const BG_IMG = require('../../assets/images/dusthomeappbg.png');
const CACTUS_IMG = require('../../assets/images/dustcactus.png');

function HeaderBar({ title, onBack }: { title: string; onBack: () => void }) {
  return (
    <View style={dustPlayHeaderWrapper}>
      <View style={dustPlayHeaderBorder}>
        <LinearGradient
          colors={['#DB8F4C', '#A9462F']}
          style={dustPlayHeaderBar}
        >
          <Pressable onPress={onBack} style={dustPlayBackButton} hitSlop={12}>
            <Image source={require('../../assets/images/dusstback.png')} />
          </Pressable>
          <Text style={dustPlayHeaderTitle}>{title}</Text>
          <View style={dustPlayHeaderSpacer} />
        </LinearGradient>
      </View>
    </View>
  );
}

function ActionButton({
  title,
  onPress,
}: {
  title: string;
  onPress: () => void;
}) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        dustPlayActionButton,
        pressed && { opacity: 0.9 },
      ]}
    >
      <Text style={dustPlayActionButtonText}>{title}</Text>
    </Pressable>
  );
}

const DustPlayScreen: React.FC = () => {
  const navigation = useNavigation<any>();
  const route = useRoute<any>();
  const { height } = useWindowDimensions();

  const levelIdParam = route?.params?.levelId ?? 1;
  const [levelId, setLevelId] = useState<number>(levelIdParam);

  useEffect(() => {
    const id = route?.params?.levelId ?? 1;
    setLevelId(id);
  }, [route?.params?.levelId]);

  const level = useMemo(
    () => dustLevels.find(l => l.id === levelId) ?? dustLevels[0],
    [levelId],
  );

  const [value, setValue] = useState('');
  const [result, setResult] = useState<ResultState>(null);
  const cactusAnim = useRef(new Animated.Value(0)).current;
  const inputShake = useRef(new Animated.Value(0)).current;

  useFocusEffect(
    useCallback(() => {
      Orientation.lockToPortrait();
      return () => Orientation.unlockAllOrientations();
    }, []),
  );

  const goBack = useCallback(() => {
    if (navigation.canGoBack()) navigation.goBack();
  }, [navigation]);

  const runInputShake = useCallback(() => {
    inputShake.setValue(0);
    Animated.sequence([
      Animated.timing(inputShake, {
        toValue: 1,
        duration: 60,
        useNativeDriver: true,
      }),
      Animated.timing(inputShake, {
        toValue: 2,
        duration: 60,
        useNativeDriver: true,
      }),
      Animated.timing(inputShake, {
        toValue: 3,
        duration: 60,
        useNativeDriver: true,
      }),
      Animated.timing(inputShake, {
        toValue: 4,
        duration: 60,
        useNativeDriver: true,
      }),
      Animated.timing(inputShake, {
        toValue: 0,
        duration: 60,
        useNativeDriver: true,
      }),
    ]).start();
  }, [inputShake]);

  const onSubmit = useCallback(async () => {
    const num = parseInt(value.replace(/\D/g, ''), 10);
    if (isNaN(num) || value.trim() === '') {
      runInputShake();
      return;
    }
    if (num === level.correctCount) {
      await markLevelCompletedAndReward(level.id);
      setResult('win');
    } else {
      setResult('lose');
    }
  }, [value, level, runInputShake]);

  const closeModal = useCallback(() => setResult(null), []);

  const goNext = useCallback(() => {
    const next = Math.min(level.id + 1, dustLevels.length);
    closeModal();
    setValue('');
    setLevelId(next);
    navigation.setParams({ levelId: next });
  }, [level.id, closeModal, navigation]);

  const tryAgain = useCallback(() => {
    closeModal();
    setValue('');
  }, [closeModal]);

  const handleShare = useCallback(() => {
    const message =
      result === 'win'
        ? `Level ${level.title} completed! I have earned 15 boards!`
        : `I tried ${level.title}. Game over! The storm was stronger this time.`;
    Share.share({ message });
  }, [result, level.title]);

  const isLastLevel = level.id === dustLevels.length;

  useEffect(() => {
    let t: ReturnType<typeof setTimeout>;
    const run = () => {
      t = setTimeout(() => {
        Animated.sequence([
          Animated.timing(cactusAnim, {
            toValue: 1,
            duration: 180,
            useNativeDriver: true,
          }),
          Animated.timing(cactusAnim, {
            toValue: 0,
            duration: 180,
            useNativeDriver: true,
          }),
        ]).start(run);
      }, 4000 + Math.random() * 2000);
    };
    run();
    return () => clearTimeout(t);
  }, [cactusAnim]);

  const cactusTranslateX = cactusAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 10],
  });

  const inputShakeX = inputShake.interpolate({
    inputRange: [0, 1, 2, 3, 4],
    outputRange: [0, -12, 12, -12, 0],
  });

  const modalSource =
    result === 'win'
      ? require('../../assets/images/winModalDust.png')
      : require('../../assets/images/loseModaldust.png');

  return (
    <ImageBackground
      source={BG_IMG}
      style={dustPlayBackground}
      resizeMode="cover"
    >
      <ScrollView
        contentContainerStyle={dustPlayScrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={[dustPlayScreenContent, { paddingTop: height * 0.07 }]}>
          <HeaderBar title={level.title} onBack={goBack} />

          <View style={dustPlayBody}>
            <View style={dustPlayCard}>
              <Image
                source={level.image}
                style={dustPlayLevelImage}
                resizeMode="cover"
              />
            </View>

            <View style={dustPlayInputWrapper}>
              <Animated.View
                style={{ transform: [{ translateX: inputShakeX }] }}
              >
                <TextInput
                  value={value}
                  onChangeText={setValue}
                  placeholder="..."
                  placeholderTextColor="#260C04"
                  keyboardType="number-pad"
                  style={dustPlayInput}
                  maxLength={3}
                />
              </Animated.View>
            </View>

            <TouchableOpacity onPress={onSubmit} activeOpacity={0.8}>
              <ImageBackground
                source={require('../../assets/images/dustonbtn.png')}
                style={dustPlayContinueButton}
              >
                <Text style={dustPlayContinueButtonText}>Continue</Text>
              </ImageBackground>
            </TouchableOpacity>

            <View style={dustPlayCactusWrapper}>
              <Animated.Image
                source={CACTUS_IMG}
                style={[
                  dustPlayCactus,
                  { transform: [{ translateX: cactusTranslateX }] },
                ]}
                resizeMode="contain"
              />
            </View>
          </View>

          <Modal
            visible={!!result}
            transparent
            animationType="fade"
            onRequestClose={closeModal}
            statusBarTranslucent={Platform.OS === 'android'}
          >
            <View style={dustPlayModalOverlay}>
              <ImageBackground source={modalSource} style={dustPlayModalCard}>
                <View style={dustPlayModalButtonsRow}>
                  <TouchableOpacity onPress={handleShare} activeOpacity={0.8}>
                    <Image
                      source={require('../../assets/images/sharebtn.png')}
                    />
                  </TouchableOpacity>

                  {result === 'win' ? (
                    <ActionButton
                      title={isLastLevel ? 'Home' : 'Next Level'}
                      onPress={
                        isLastLevel ? () => navigation.popToTop() : goNext
                      }
                    />
                  ) : (
                    <ActionButton title="Try Again" onPress={tryAgain} />
                  )}

                  <TouchableOpacity
                    onPress={() => navigation.popToTop()}
                    activeOpacity={0.8}
                  >
                    <Image
                      source={require('../../assets/images/homebtn.png')}
                    />
                  </TouchableOpacity>
                </View>
              </ImageBackground>
            </View>
          </Modal>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const dustPlayBackground = { flex: 1 };

const dustPlayScrollContent = { flexGrow: 1 };

const dustPlayHeaderWrapper = { paddingHorizontal: 16 };

const dustPlayHeaderBorder = {
  borderWidth: 4,
  borderColor: '#7C3A20',
  borderRadius: 12,
  overflow: 'hidden' as const,
};

const dustPlayHeaderSpacer = { width: 34 };

const dustPlayHeaderBar = {
  height: 65,
  borderRadius: 6,
  alignItems: 'center' as const,
  justifyContent: 'center' as const,
};

const dustPlayBackButton = {
  position: 'absolute' as const,
  left: 12,
  width: 34,
  height: 34,
  alignItems: 'center' as const,
  justifyContent: 'center' as const,
};

const dustPlayHeaderTitle = {
  fontSize: 26,
  fontWeight: '900' as const,
  color: '#FFD77B',
  textShadowColor: 'rgba(0,0,0,0.35)',
  textShadowOffset: { width: 0, height: 2 },
  textShadowRadius: 2,
};

const dustPlayScreenContent = {
  flex: 1,
  paddingBottom: 50,
};

const dustPlayBody = {
  flex: 1,
  alignItems: 'center' as const,
  paddingTop: 18,
  paddingHorizontal: 16,
};

const dustPlayCard: ViewStyle = {
  width: '86%',
  maxWidth: 280,
  height: 370,
  borderRadius: 12,
  borderWidth: 3,
  borderColor: '#824021',
  overflow: 'hidden',
};

const dustPlayLevelImage: ImageStyle = { width: '100%', height: '100%' };

const dustPlayInputWrapper: ViewStyle = {
  width: '86%',
  maxWidth: 208,
  marginTop: 16,
};

const dustPlayInput = {
  paddingVertical: 12,
  borderRadius: 50,
  backgroundColor: '#F1C07E',
  borderWidth: 3,
  borderColor: '#7C3A20',
  paddingHorizontal: 14,
  fontSize: 18,
  fontWeight: '800' as const,
  color: '#2a190f',
  textAlign: 'center' as const,
};

const dustPlayContinueButton = {
  width: 194,
  height: 60,
  justifyContent: 'center' as const,
  alignItems: 'center' as const,
  marginTop: 10,
  marginBottom: 10,
  alignSelf: 'center' as const,
};

const dustPlayContinueButtonText = {
  color: '#FBC914',
  fontSize: 22,
  fontWeight: '800' as const,
};

const dustPlayCactusWrapper = {
  flex: 1,
  alignItems: 'center' as const,
  justifyContent: 'flex-end' as const,
  paddingBottom: 14,
};

const dustPlayCactus = { width: 146, height: 190 };

const dustPlayModalOverlay = {
  flex: 1,
  backgroundColor: '#9CD5FDB2',
  alignItems: 'center' as const,
  justifyContent: 'center' as const,
  paddingHorizontal: 16,
};

const dustPlayModalCard = {
  width: 326,
  height: 490,
  justifyContent: 'flex-end' as const,
  alignItems: 'center' as const,
  paddingBottom: 36,
};

const dustPlayModalButtonsRow = {
  marginTop: 14,
  gap: 10,
  flexDirection: 'row' as const,
  alignItems: 'center' as const,
};

const dustPlayActionButton = {
  width: 122,
  height: 40,
  borderRadius: 50,
  backgroundColor: '#E99938',
  borderWidth: 2,
  borderColor: '#260C04',
  alignItems: 'center' as const,
  justifyContent: 'center' as const,
};

const dustPlayActionButtonText = {
  fontSize: 16,
  fontWeight: '500' as const,
  color: '#260C04',
};

export default DustPlayScreen;
