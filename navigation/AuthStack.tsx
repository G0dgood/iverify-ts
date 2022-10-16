import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AppStack from './AppStack';
import Login from '../screens/Login';
import SplashScreen from '../screens/SplashScreen';
import PasswordReset from '../screens/PasswordReset';
import PasswordEmail from '../screens/PasswordEmail';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName="SplashScreen" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="PasswordReset" component={PasswordReset} />
      <Stack.Screen name="PasswordEmail" component={PasswordEmail} />
      <Stack.Screen name="Home" component={AppStack} />
    </Stack.Navigator>
  );
};

export default AuthStack;
