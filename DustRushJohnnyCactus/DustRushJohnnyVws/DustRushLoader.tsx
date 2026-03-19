import React, { useEffect, useRef } from 'react';
import { Animated, ImageBackground, ScrollView } from 'react-native';

import { useNavigation } from '@react-navigation/native';

const DustRushLoader = () => {
  const navigation = useNavigation<any>();
  const pulse = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      try {
        navigation.replace('DustRushOnboard');
      } catch (err) {
        navigation.navigate('DustRushOnboard');
      }
    }, 7500);

    return () => clearTimeout(timeoutId);
  }, [navigation]);

  useEffect(() => {
    const loop = Animated.loop(
      Animated.sequence([
        Animated.timing(pulse, {
          toValue: 1.03,
          duration: 900,
          useNativeDriver: true,
        }),
        Animated.timing(pulse, {
          toValue: 1,
          duration: 900,
          useNativeDriver: true,
        }),
      ]),
    );

    loop.start();
    return () => loop.stop();
  }, [pulse]);

  return (
    <ImageBackground
      source={require('../../assets/images/dustloaderBack.png')}
      style={{ flex: 1 }}
    >
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        showsVerticalScrollIndicator={false}
      >
        <Animated.Image
          source={require('../../assets/images/dustloader.png')}
          style={{
            width: 154,
            height: 200,
            transform: [{ scale: pulse }],
          }}
        />
      </ScrollView>
    </ImageBackground>
  );
};

export default DustRushLoader;
