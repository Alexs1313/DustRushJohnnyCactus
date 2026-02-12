import React, { useCallback, useRef, useState } from 'react';
import {
  Animated,
  Image,
  ImageBackground,
  Pressable,
  ScrollView,
  Text,
  View,
} from 'react-native';
import type { ViewStyle } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { loadDustProgress } from '../DustRushJohnnyUtls/dustProgressStorage';

const backgroundImage = require('../../assets/images/dusthomeappbg.png');
const cactusHeroImage = require('../../assets/images/dustcactus.png');
const cactusGradientImage = require('../../assets/images/bgcactusgr.png');
const boardsIcon = require('../../assets/images/boards.png');

type MenuButtonProps = {
  title: string;
  onPress: () => void;
};

const MenuButton: React.FC<MenuButtonProps> = ({ title, onPress }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        dustHomeButtonOuter,
        pressed && dustHomeButtonOuterPressed,
      ]}
    >
      <LinearGradient
        colors={['#DB8F4C', '#A9462F']}
        style={dustHomeButtonInner}
      >
        <Text style={dustHomeButtonText} numberOfLines={1}>
          {title}
        </Text>
      </LinearGradient>
    </Pressable>
  );
};

const DustRushHomeScreen: React.FC = () => {
  const navigation = useNavigation<any>();
  const [boards, setBoards] = useState(0);
  const cactusScale = useRef(new Animated.Value(0)).current;
  const cactusOpacity = useRef(new Animated.Value(0)).current;

  useFocusEffect(
    useCallback(() => {
      loadDustProgress().then(p => setBoards(Number(p?.boards ?? 0)));
      cactusScale.setValue(0);
      cactusOpacity.setValue(0);
      Animated.parallel([
        Animated.timing(cactusOpacity, {
          toValue: 1,
          duration: 400,
          useNativeDriver: true,
        }),
        Animated.spring(cactusScale, {
          toValue: 1,
          useNativeDriver: true,
          friction: 5,
          tension: 60,
        }),
      ]).start();
    }, [cactusScale, cactusOpacity]),
  );

  return (
    <ImageBackground
      source={backgroundImage}
      style={dustHomeBackground}
      resizeMode="cover"
    >
      <ScrollView
        contentContainerStyle={dustHomeScrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={dustHomeContainer}>
          <View style={dustHomeCounterContainer}>
            <Text style={dustHomeCounterNumber}>{boards}</Text>
            <Image
              source={boardsIcon}
              style={dustHomeCounterIcon}
              resizeMode="contain"
            />
          </View>
          <View style={dustHomeHeaderWrapper}>
            <Image source={cactusGradientImage} style={{ top: 50 }} />
            <Animated.Image
              source={cactusHeroImage}
              style={[
                dustHomeHeroImage,
                {
                  opacity: cactusOpacity,
                  transform: [{ scale: cactusScale }],
                },
              ]}
              resizeMode="contain"
            />
          </View>

          <View style={dustHomeMenu}>
            <MenuButton
              title="Dust Hunt"
              onPress={() => navigation.navigate('DustLevelsScreen')}
            />
            <MenuButton
              title="Cactus Town"
              onPress={() => navigation.navigate('DustCactusTownScreen')}
            />
            <MenuButton
              title="Cactus Stories"
              onPress={() => navigation.navigate('DustCactusStoriesScreen')}
            />
            <MenuButton
              title="Saved Stories"
              onPress={() => navigation.navigate('DustSavedStoriesScreen')}
            />
            <MenuButton
              title="Hat Vault"
              onPress={() => navigation.navigate('DustHatVaultScreen')}
            />
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const dustHomeBackground = { flex: 1 };

const dustHomeScrollContent = { flexGrow: 1 };

const dustHomeContainer = {
  flex: 1,
  paddingHorizontal: 18,
  paddingTop: 60,
  alignItems: 'center' as const,
  justifyContent: 'center' as const,
};

const dustHomeHeaderWrapper = {};

const dustHomeCounterContainer = {
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
  position: 'absolute' as const,
  top: 42,
  right: 18,
};

const dustHomeCounterNumber = {
  fontSize: 20,
  fontWeight: '900' as const,
  color: '#2a190f',
};

const dustHomeCounterIcon = { width: 46, height: 20 };

const dustHomeHeroImage = {
  position: 'absolute' as const,
  bottom: 10,
};

const dustHomeMenu: ViewStyle = {
  width: '100%',
  paddingBottom: 26,
  gap: 14,
  alignItems: 'center',
};

const dustHomeButtonOuter: ViewStyle = {
  width: '65%',
  maxWidth: 276,
  borderRadius: 14,
  borderWidth: 3,
  borderColor: '#824021',
  shadowColor: '#000',
  shadowOpacity: 0.22,
  shadowRadius: 10,
  shadowOffset: { width: 0, height: 6 },
  elevation: 5,
};

const dustHomeButtonOuterPressed = {
  transform: [{ scale: 0.98 }],
  opacity: 0.95,
};

const dustHomeButtonInner = {
  alignItems: 'center' as const,
  justifyContent: 'center' as const,
  height: 63,
  borderRadius: 11,
};

const dustHomeButtonText = {
  fontSize: 22,
  fontWeight: '900' as const,
  color: '#f2e01cff',
  textShadowColor: 'rgba(0,0,0,0.35)',
  textShadowOffset: { width: 0, height: 2 },
  textShadowRadius: 2,
  letterSpacing: 0.2,
};

export default DustRushHomeScreen;
