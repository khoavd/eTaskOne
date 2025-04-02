import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList, Routes} from './router';
import Home from './Home';
import Settings from './Settings';
import Details from './Details';
import {Button} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Stack = createNativeStackNavigator<RootStackParamList>();

const Tab = createBottomTabNavigator<Routes>();
const Drawer = createDrawerNavigator<Routes>();

function HeaderRightButton({stock}: {stock: number}) {
  return <Button title="buy" onPress={() => {}} disabled={stock === 0} />;
}

export default function NavApp() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen
          name="Details"
          component={Details}
          options={({route}) => ({
            headerRight: () => {
              return HeaderRightButton({stock: route.params.stock});
            },
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
