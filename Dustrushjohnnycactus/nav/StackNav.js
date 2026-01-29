import { createStackNavigator } from '@react-navigation/stack';

import DustRushHome from '../scrns/DustRushHome';
import DustRushLoader from '../scrns/DustRushLoader';
import DustRushOnboard from '../scrns/DustRushOnboard';
import DustPlay from '../scrns/DustPlay';
import DustHatVaultScreen from '../scrns/DustHatVaultScreen';
import DustCactusTownScreen from '../scrns/DustCactusTownScreen';
import DustCactusStoriesScreen from '../scrns/DustCactusStoriesScreen';
import DustLevelsScreen from '../scrns/DustLevelsScreen';

const Stack = createStackNavigator();

const StackNav = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="DustRushLoader" component={DustRushLoader} />
      <Stack.Screen name="DustRushOnboard" component={DustRushOnboard} />
      <Stack.Screen name="DustRushHome" component={DustRushHome} />
      <Stack.Screen name="DustLevelsScreen" component={DustLevelsScreen} />
      <Stack.Screen name="DustPlay" component={DustPlay} />
      <Stack.Screen name="DustHatVaultScreen" component={DustHatVaultScreen} />
      <Stack.Screen
        name="DustCactusTownScreen"
        component={DustCactusTownScreen}
      />
      <Stack.Screen
        name="DustCactusStoriesScreen"
        component={DustCactusStoriesScreen}
      />
    </Stack.Navigator>
  );
};

export default StackNav;
