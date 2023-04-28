import React, { useEffect, useState } from 'react';
import { StatusBar } from 'react-native';

import * as Font from 'expo-font';
import { ThemeProvider } from 'styled-components';
import * as SplashScreen from 'expo-splash-screen';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { Routes } from '@routes/index';

import { Karla_400Regular, Karla_700Bold } from '@expo-google-fonts/karla';

import { THEME } from './src/global/themes/theme';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({
          Karla_400Regular,
          Karla_700Bold,
        });
      } catch (error) {
        console.error(error);
      } finally {
        setAppIsReady(true);
        SplashScreen.hideAsync();
      }
    }

    prepare();
  }, []);

  if (!appIsReady) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider theme={THEME}>
        <StatusBar barStyle='light-content' />
        <Routes />
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}
