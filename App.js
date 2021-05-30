import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Registeration from "./pages/Registeration";

// import pages
// import signup from "./pages/signup";

export default function App() {
  return (
    <View style={styles.container}>
      <Registeration />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
