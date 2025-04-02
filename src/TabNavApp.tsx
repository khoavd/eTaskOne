import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Home from './Home';
import Settings from './Settings';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Routes} from './router';
import {Platform} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Tab = createBottomTabNavigator<Routes>();
const Drawer = createDrawerNavigator<Routes>();

export default function TabNavApp() {
  return (
    <NavigationContainer>
      {Platform.OS === 'ios' && (
        <Tab.Navigator initialRouteName="Home">
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Settings" component={Settings} />
        </Tab.Navigator>
      )}

      {Platform.OS === 'android' && (
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Home" component={Home} />
          <Drawer.Screen name="Settings" component={Settings} />
        </Drawer.Navigator>
      )}
    </NavigationContainer>
  );
}
