import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from './router';
import Home from './Home';
import Settings from './Settings';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function NavApp() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            headerBackVisible: false,
            freezeOnBlur: true,
            headerTitle: '',
          }}
          name="Home"
          component={Home}
        />
        <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
