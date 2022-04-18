import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button, TextInput } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Googlelogin from "../googlelogin";
import GoogleLogin from "react-google-login";

const HomeScreen = (props) => {
  // const [email, setEmail] = useState("loading");
  // const Boiler = async () => {
  //   const token = await AsyncStorage.getItem("token");
  //   fetch("http://192.168.10.7:3000/", {
  //     headers: new Headers({
  //       Authorization: "Bearer " + token,
  //     }),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       setEmail(data.email);
  //     });
  // };
  // useEffect(() => {
  //   Boiler();
  // }, []);

  // const logout = (props) => {
  //   AsyncStorage.removeItem("token").then(() => {
  //     props.navigation.navigate("Root", { screen: "login" });
  //   });
  // };

  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button mode="contained" onPress={() => logout(props)} title="logout">
        logout
      </Button>
      <Googlelogin />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
