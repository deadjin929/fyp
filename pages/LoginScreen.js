import React, { useState } from "react";
import { Button, TextInput } from "react-native-paper";
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  KeyboardAvoidingView,
  Alert,
  StyleSheet,
  Image,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const LoginScreen = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const sendCred = async (props) => {
    fetch("http://10.0.2.2:3000/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then(async (data) => {
        try {
          await AsyncStorage.setItem("token", data.token);
          props.navigation.replace("home");
        } catch (e) {
          console.log("error login", e);
          Alert(e);
        }
      });
  };

  return (
    <>
      <View style={styles.container}>
        <KeyboardAvoidingView behavior="position">
          <StatusBar backgroundColor="blue" barStyle="light-content" />

          <View style={styles.logocontainer}>
            <Text
              style={{
                fontSize: 35,
                marginLeft: 18,
                marginTop: 10,
                color: "#3b3b3b",
              }}
            >
              welcome to
            </Text>
            <Image style={styles.logo} source={require("../assets/logo.png")} />
            <Text style={styles.title}>E-Child Guard</Text>
          </View>

          <Text
            style={{
              fontSize: 20,
              marginLeft: 18,
              marginTop: 20,
            }}
          >
            Login with email
          </Text>
          <TextInput
            label="Email"
            mode="outlined"
            value={email}
            placeholderTextColor="rgba(255,255,255,0.7)"
            style={{ marginLeft: 18, marginRight: 18, marginTop: 18 }}
            theme={{ colors: { primary: "blue" } }}
            onChangeText={(text) => setEmail(text)}
          />
          <TextInput
            label="password"
            mode="outlined"
            secureTextEntry={true}
            value={password}
            placeholderTextColor="rgba(255,255,255,0.7)"
            onChangeText={(text) => {
              setPassword(text);
            }}
            style={{ marginLeft: 18, marginRight: 18, marginTop: 18 }}
            theme={{ colors: { primary: "blue" } }}
          />
          <Button
            mode="contained"
            style={{ marginLeft: 18, marginRight: 18, marginTop: 18 }}
            onPress={() => sendCred(props)}
          >
            Login
          </Button>
          <TouchableOpacity>
            <Text
              style={{
                fontSize: 18,
                marginLeft: 18,
                marginTop: 20,
              }}
              onPress={() => props.navigation.replace("signup")}
            >
              dont have a account ?
            </Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#3498db",
    flex: 1,
    alignContent: "center",
  },
  logocontainer: {
    alignItems: "center",
    flexGrow: 1,
    justifyContent: "center",
    fontSize: 30,
    marginLeft: 18,
    color: "blue",
  },

  logo: {
    width: 100,
    height: 100,
  },
});

export default LoginScreen;
