import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  Animated,
  Image,
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';

const backgroundImages = [
  require('../../assets/images/dustloaderonbg.png'),
  require('../../assets/images/dustloaderonbg2.png'),
  require('../../assets/images/dustloaderonbg3.png'),
  require('../../assets/images/dustloaderonbg4.png'),
  require('../../assets/images/dustloaderonbg5.png'),
];

const titleImages = [
  require('../../assets/images/dusttitle1.png'),
  require('../../assets/images/dusttitle2.png'),
  require('../../assets/images/dusttitle3.png'),
  require('../../assets/images/dusttitle4.png'),
  require('../../assets/images/dusttitle5.png'),
];

const buttonLabels: string[] = [
  'Continue',
  'Join Johnny',
  'Got it!',
  'Rebuild Town',
  'Start Adventure',
];

const DustRushOnboard: React.FC = () => {
  const { height } = useWindowDimensions();
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const navigation = useNavigation<any>();

  const skipOpacity = useState(() => new Animated.Value(0))[0];
  const titleOpacity = useState(() => new Animated.Value(0))[0];
  const titleScale = useState(() => new Animated.Value(0.92))[0];
  const titleTranslateY = useState(() => new Animated.Value(24))[0];
  const buttonOpacity = useState(() => new Animated.Value(0))[0];
  const buttonScale = useState(() => new Animated.Value(0.9))[0];

  useEffect(() => {
    Animated.timing(skipOpacity, {
      toValue: 1,
      duration: 400,
      useNativeDriver: true,
    }).start();
  }, [skipOpacity]);

  useEffect(() => {
    titleOpacity.setValue(0);
    titleScale.setValue(0.92);
    titleTranslateY.setValue(24);
    buttonOpacity.setValue(0);
    buttonScale.setValue(0.9);

    Animated.parallel([
      Animated.timing(titleOpacity, {
        toValue: 1,
        duration: 420,
        useNativeDriver: true,
      }),
      Animated.spring(titleScale, {
        toValue: 1,
        useNativeDriver: true,
        friction: 8,
        tension: 80,
      }),
      Animated.timing(titleTranslateY, {
        toValue: 0,
        duration: 400,
        useNativeDriver: true,
      }),
    ]).start();

    const buttonDelay = setTimeout(() => {
      Animated.parallel([
        Animated.timing(buttonOpacity, {
          toValue: 1,
          duration: 380,
          useNativeDriver: true,
        }),
        Animated.spring(buttonScale, {
          toValue: 1,
          useNativeDriver: true,
          friction: 7,
          tension: 70,
        }),
      ]).start();
    }, 180);

    return () => clearTimeout(buttonDelay);
  }, [currentIndex, titleOpacity, titleScale, titleTranslateY, buttonOpacity, buttonScale]);

  const handleNext = () => {
    if (currentIndex === 4) {
      navigation.replace('DustRushHome');
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <ImageBackground
      source={backgroundImages[currentIndex]}
      style={{ flex: 1 }}
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      >
        <Animated.View
          style={{
            position: 'absolute',
            top: 70,
            right: 40,
            opacity: skipOpacity,
          }}
        >
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => navigation.replace('DustRushHome')}
          >
            <Image source={require('../../assets/images/skipBtn.png')} />
          </TouchableOpacity>
        </Animated.View>

        <View style={{ flex: 1, marginTop: height * 0.2 }}>
          <Animated.View
            style={{
              opacity: titleOpacity,
              transform: [
                { scale: titleScale },
                { translateY: titleTranslateY },
              ],
            }}
          >
            <Image source={titleImages[currentIndex]} />
          </Animated.View>

          <Animated.View
            style={[
              dustOnboardButtonWrapper,
              {
                opacity: buttonOpacity,
                transform: [{ scale: buttonScale }],
              },
            ]}
          >
            <TouchableOpacity onPress={handleNext} activeOpacity={0.7}>
              <ImageBackground
                source={require('../../assets/images/dustonbtn.png')}
                style={dustOnboardButtonBackground}
              >
                <Text style={dustOnboardButtonText}>
                  {buttonLabels[currentIndex]}
                </Text>
              </ImageBackground>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const dustOnboardButtonBackground = {
  width: 194,
  height: 60,
  justifyContent: 'center' as const,
  alignItems: 'center' as const,
  marginTop: 20,
  alignSelf: 'center' as const,
};

const dustOnboardButtonText = {
  color: '#FBC914',
  fontSize: 22,
  fontWeight: '800' as const,
  textShadowColor: 'rgba(0,0,0,0.35)',
  textShadowOffset: { width: 0, height: 2 },
  textShadowRadius: 2,
};

const dustOnboardButtonWrapper = {
  flex: 1,
  justifyContent: 'flex-end' as const,
  marginTop: 20,
  paddingBottom: 60,
};

export default DustRushOnboard;
