import React, { useEffect, useState } from "react";
import { Button, TextInput } from "react-native-paper";
import { ActivityIndicator, Text, StyleSheet, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const HomeScreen = (props) => {
  const [email, setEmail] = useState("loading");
  const Boiler = async () => {
    const token = await AsyncStorage.getItem("token");
    fetch("http://192.168.10.7:3000/", {
      headers: new Headers({
        Authorization: "Bearer " + token,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setEmail(data.email);
      });
  };
  useEffect(() => {
    Boiler();
  }, []);

  const logout = (props) => {
    AsyncStorage.removeItem("token").then(() => {
      props.navigation.replace("login");
    });
  };

  return (
    <>
      <View>
        <Button mode="contained" onPress={() => logout(props)}>
          logout
        </Button>
      </View>
    </>
  );
};

export default HomeScreen;
