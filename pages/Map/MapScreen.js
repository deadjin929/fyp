import React from "react";
import MapView, from "react-native-maps";
import { SafeAreaView, View } from "react-navigation";
import { Text, StyleSheet } from "react-native";
import Map from "../../componet/Maps";

const MapScreen = () => {
  return (
    <View style={styles.container}>
      <MapView
        // remove if not using Google Maps
        style={styles.map}
        region={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
      ></MapView>
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    width: 400,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
