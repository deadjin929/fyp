import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import MapScreen from "./MapScreen";
import MapListScreen from "./MapListScreen";
import { setNavigator } from "../navigationRef";

const switchNavigator = createSwitchNavigator({
  mainFlow: createBottomTabNavigator({
    MapView: MapScreen,
    MapList: MapListScreen,
  }),
});

const Map = createAppContainer(switchNavigator);

export default () => {
  return (
    <Map
      ref={(navigator) => {
        setNavigator(navigator);
      }}
    />
  );
};
