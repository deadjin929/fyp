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
import { GoogleLogin } from "react-google-login";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Googlelogin from "./googlelogin";

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
          console.log(data);
          await AsyncStorage.setItem("token", data.token);
          props.navigation.navigate("Home");
        } catch (e) {
          console.log("error login", e);
          Alert(e);
        }
      });
  };

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView behavior="position">
        <StatusBar backgroundColor="blue" barStyle="light-content" />
        <View style={styles.logocontainer}>
          <Image style={styles.logo} source={require("../assets/logo.png")} />
          <Text style={styles.title}>E-Child Guard</Text>
        </View>

        <TextInput
          label="Email"
          mode="outlined"
          value={email}
          placeholderTextColor="rgba(255,255,255,0.7)"
          onChangeText={(text) => setEmail(text)}
          style={styles.input}
        />

        <TextInput
          label="password"
          mode="outlined"
          secureTextEntry={true}
          value={password}
          placeholderTextColor="rgba(255,255,255,0.7)"
          onChangeText={(text) => setPassword(text)}
          style={styles.input}
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
            style={styles.navigatorbutton}
            onPress={() => props.navigation.replace("signup")}
          >
            Don't have an account ?
          </Text>
        </TouchableOpacity>

        {/* <TouchableOpacity>
          <Text style={styles.navigatorbutton}>Login with Google</Text>
        </TouchableOpacity> */}
        <Googlelogin />
      </KeyboardAvoidingView>
    </View>
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
  navigatorbutton: {
    fontSize: 18,
    marginLeft: 18,
    marginTop: 20,
  },
  input: {
    height: 40,
    backgroundColor: "rgba(255,255,255,0.6)",
    marginBottom: 10,
    color: "#FFF",
    paddingHorizontal: 20,
  },
});

export default LoginScreen;
