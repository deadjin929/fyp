import React, { useState } from "react";
import { Button, TextInput } from "react-native-paper";
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  KeyboardAvoidingView,
  Image,
  StyleSheet,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SignupScreen = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const sendCred = async (props) => {
    fetch("http://10.0.2.2:3000/signup", {
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
          console.log("error signup", e);
        }
      });
    console.log([email, password]);
  };
  return (
    <>
      <View style={styles.container}>
        <KeyboardAvoidingView behavior="position">
          <StatusBar backgroundColor="blue" barStyle="light-content" />

          <View style={styles.logocontainer}>
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
            create new account
          </Text>
          <TextInput
            label="Email"
            mode="outlined"
            value={email}
            style={{ marginLeft: 18, marginRight: 18, marginTop: 18 }}
            theme={{ colors: { primary: "blue" } }}
            onChangeText={(text) => setEmail(text)}
          />
          <TextInput
            label="password"
            mode="outlined"
            secureTextEntry={true}
            value={password}
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
            signup
          </Button>
          <TouchableOpacity>
            <Text
              style={{
                fontSize: 18,
                marginLeft: 18,
                marginTop: 20,
              }}
              onPress={() => props.navigation.replace("login")}
            >
              already have a account ?
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

export default SignupScreen;
