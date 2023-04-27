import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { SignIn } from '@screens/SignIn';
import { SignUp } from '@screens/SignUp';

const { Navigator, Screen } = createNativeStackNavigator();

export function AuthStackRoutes() {
  return (
    <Navigator
      initialRouteName='SignIn'
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name='Login' component={SignIn} />

      <Screen name='Cadastro' component={SignUp} />
    </Navigator>
  );
}
