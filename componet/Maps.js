import React, { useState } from "react";
// import {MapView} from "react-native-maps";
import { MapView, Permission, Location } from "expo";
import { StyleSheet, Dimensions } from "react-native";
import { defined } from "react-native-reanimated";

const height = Dimensions.get("window").height;

// const Map = () => {
//   // _getLocationAsync = async () => {
//   //   let { status } = await Permission.askAsync(Permission.LOCATION);
//   //   if (status !== "granted")
//   //     console.log("Permission to access location was defined.");
//   //   let location = await Location.getCurrentlocationAsync({
//   //     enabledHighAccuracy: true,
//   //   });
//   //   let region = {
//   //     latitude: location.coordinate.latitude,
//   //     longitude: location.coordinate.longitude,
//   //     latitudeDelta: 0.015,
//   //     longitudeDelta: 0.0121,
//   //   };

//   return (
//     <MapView
//       style={styles.map}
//       loadingEnabled={true}
//       showsCompass={true}
//       // showsUserLocation={true}
//       region={{
//         latitude: 37.78825,
//         longitude: -122.4324,
//         latitudeDelta: 0.015,
//         longitudeDelta: 0.0121,
//       }}
//     >
//       {/* <MapView.Marker
//         coordinate={{
//           latitude: 33.652465,
//           longitude: 73.158141,
//         }}
//         title={"Comsats"}
//         description={"Unversity"}
//       /> */}
//     </MapView>
//   );
// };

// const styles = StyleSheet.create({
//   map: {
//     height,
//   },
// });

// export default Map;
const Maps = () => {
  return (
    <MapView
      style={styles.map}
      loadingEnabled={true}
      region={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
      }}
    ></MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    height,
  },
});

export default Maps;
