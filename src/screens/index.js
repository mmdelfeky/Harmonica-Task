const {createStackNavigator} = require('@react-navigation/stack');

import React from 'react';
import Home from './Home';

import Login from './Login';
import OTPScreen from './OTPScreen';
const Stack = createStackNavigator();
export const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="OTPScreen" component={OTPScreen} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};
