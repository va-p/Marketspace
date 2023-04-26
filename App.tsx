import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { ThemeProvider } from "styled-components";
import { StatusBar } from "expo-status-bar";

import { THEME } from "./src/global/themes/theme";

export default function App() {
  return (
    <ThemeProvider theme={THEME}>
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
      </View>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
