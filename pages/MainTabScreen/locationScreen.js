import React, { useState } from "react";
import { SafeAreaView } from "react-navigation";
import { Permission, Location } from "expo";
import MapView, { Circle, Marker } from "react-native-maps";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Platform,
  Modal,
  ToastAndroid,
} from "react-native";
import { Button, TextInput } from "react-native-paper";
import GeoFencing from "react-native-geo-fencing";
import Managetracker from "./locationscreen/managetracker";

const height = Dimensions.get("window").height;

// componentDidMount();
// {
//   this.requestLocationPermission();
// }

// requestLocationPermission = async () => {
//   var response = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
//   console.log("Android: " + response);

//   if (response === "granted") {
//     this.locateCurrentPosition();
//   }
// };

// locateCurrentPosition = () => {
//   Geolocation.getCurrentPosition(
//     (position) => {
//       console.log(JSON.stringify(position));

//       let initialPosition = {
//         latitude: position.coords.latitude,
//         longitude: position.coords.longitude,
//         latitudeDelta: 0.09,
//         longitudeDelta: 0.035,
//       };

//       this.setState({ initialPosition });
//     },
//     (error) => Alert.alert(error.message),
//     { enableHighAccuracy: true, timeout: 10000, maximumAge: 1000 }
//   );
// };

const LocationScreen = ({ navigation, props }) => {
  const [modal, setModal] = useState(false);
  const [Assetnumber, setAssetnumber] = useState("");
  const [loading, setLoading] = useState(true);
  const [Data, setData] = useState([]);
  const [longitude, setLongitude] = useState("73.158141");
  const [latitude, setLatitude] = useState("33.652465");

  const sendCred = async (props) => {
    fetch(`http://192.168.10.3:3000/getdata/${Assetnumber}`, {
      method: "GET",
      headers: {
        "cache-control": "no-cache",
      },
    })
      .then((res) => res.json())
      .then(async (data) => {
        try {
          setData(data);
          setLoading(false);
          console.log(Data);
          Data.map((item) => {
            setLatitude(item.latitude);
            setLongitude(item.longitude);
          });
        } catch (e) {
          console.log("error login", e);
          Alert(e);
        }
      });
  };

  function Display() {
    return (
      <View>
        <Text>{longitude}</Text>
        <Text>{latitude}</Text>
      </View>
    );
  }

  return (
    <SafeAreaView>
      <Button
        mode="contained"
        style={{
          marginLeft: 18,
          marginRight: 18,
          marginTop: 18,
          marginBottom: 18,
          backgroundColor: "#3498db",
        }}
        onPress={() => setModal(true)}
      >
        Managetracker
      </Button>
      <MapView
        style={styles.map}
        loadingEnabled={true}
        showsCompass={true}
        showsUserLocation={true}
        followUserLocation={true}
        zoomEnabled={true}
        showsScale={true}
        region={{
          latitude: 33.652465,
          longitude: 73.158141,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
      >
        <Circle
          center={{
            latitude: 33.652465,
            longitude: 73.158141,
          }}
          radius={1000}
          fillColor="rgba(66, 245, 78, 0.3)"
        />
        <Marker
          coordinate={{
            latitude: parseFloat(latitude),
            longitude: parseFloat(longitude),
          }}
          title={"Comsats"}
          description={"Unversity"}
        />
      </MapView>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modal}
        onRequestClose={() => {
          setModal(false);
        }}
      >
        <View style={styles.modalView}>
          <View style={styles.modalButtonView}>
            <TextInput
              label="Assetnumber"
              mode="outlined"
              value={Assetnumber}
              style={{
                marginLeft: 18,
                marginRight: 18,
                marginTop: 18,
                padding: 10,
              }}
              theme={{ colors: { primary: "blue" } }}
              onChangeText={(text) => setAssetnumber(text)}
            />
            <Button
              mode="contained"
              style={{ marginLeft: 18, marginRight: 18, marginTop: 18 }}
              onPress={() => sendCred(props)}
            >
              Submit
            </Button>
            <Button
              mode="contained"
              style={{ marginLeft: 18, marginRight: 18, marginTop: 18 }}
              onPress={() => setModal(false)}
            >
              close
            </Button>
            <Display />
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default LocationScreen;

const styles = StyleSheet.create({
  // container: {
  //   justifyContent: "flex-end",
  //   alignItems: "center",
  // },
  map: {
    height,
  },
  modalView: {
    position: "absolute",
    bottom: 2,
    width: "100%",
    backgroundColor: "white",
  },
  modalButtonView: {
    flex: 1,
    justifyContent: "space-around",
  },
});
