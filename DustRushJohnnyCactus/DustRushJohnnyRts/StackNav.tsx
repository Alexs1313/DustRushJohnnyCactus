import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import DustRushHome from '../DustRushJohnnyVws/DustRushHome';
import DustRushLoader from '../DustRushJohnnyVws/DustRushLoader';
import DustRushOnboard from '../DustRushJohnnyVws/DustRushOnboard';
import DustPlay from '../DustRushJohnnyVws/DustPlay';
import DustHatVaultScreen from '../DustRushJohnnyVws/DustHatVaultScreen';
import DustCactusTownScreen from '../DustRushJohnnyVws/DustCactusTownScreen';
import DustCactusStoriesScreen from '../DustRushJohnnyVws/DustCactusStoriesScreen';
import DustSavedStoriesScreen from '../DustRushJohnnyVws/DustSavedStoriesScreen';
import DustLevelsScreen from '../DustRushJohnnyVws/DustLevelsScreen';

const DustRushJohnnyStack = createStackNavigator();

const StackNav: React.FC = () => (
  <DustRushJohnnyStack.Navigator screenOptions={{ headerShown: false }}>
    <DustRushJohnnyStack.Screen
      name="DustRushLoader"
      component={DustRushLoader}
    />
    <DustRushJohnnyStack.Screen
      name="DustRushOnboard"
      component={DustRushOnboard}
    />
    <DustRushJohnnyStack.Screen name="DustRushHome" component={DustRushHome} />
    <DustRushJohnnyStack.Screen
      name="DustLevelsScreen"
      component={DustLevelsScreen}
    />
    <DustRushJohnnyStack.Screen name="DustPlay" component={DustPlay} />
    <DustRushJohnnyStack.Screen
      name="DustHatVaultScreen"
      component={DustHatVaultScreen}
    />
    <DustRushJohnnyStack.Screen
      name="DustCactusTownScreen"
      component={DustCactusTownScreen}
    />
    <DustRushJohnnyStack.Screen
      name="DustCactusStoriesScreen"
      component={DustCactusStoriesScreen}
    />
    <DustRushJohnnyStack.Screen
      name="DustSavedStoriesScreen"
      component={DustSavedStoriesScreen}
    />
  </DustRushJohnnyStack.Navigator>
);

export default StackNav;
