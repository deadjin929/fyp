import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Button, TextInput } from "react-native-paper";
import * as Google from "expo-google-app-auth";

export default class googlelogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signedIn: false,
      name: "",
      photoUrl: "",
    };
  }
  signIn = async () => {
    try {
      const result = await Google.logInAsync({
        androidClientId:
          "1095238812476-g1pbbmhirj1vogcbft84f2nufkev5iru.apps.googleusercontent.coma",
        scopes: ["profile", "email"],
      });

      if (result.type === "success") {
        this.setState({
          signedIn: true,
          name: result.user.name,
          photoUrl: result.user.photoUrl,
        });
        props.navigation.navigate("home");
        console.log("success");
      } else {
        console.log("cancelled");
      }
    } catch (e) {
      console.log("error", e);
    }
  };
  render() {
    return (
      <View>
        {this.state.signedIn ? (
          () => props.navigation.navigate("Root", { screen: "home" })
        ) : (
          <LoginPage signIn={this.signIn} />
        )}
      </View>
    );
  }
}

const LoginPage = (props) => {
  return (
    <View>
      <Button
        mode="contained"
        title="Sign in with Google"
        onPress={() => props.signIn()}
      >
        Sign in with Google
      </Button>
    </View>
  );
};

{
  /*const LoggedInPage = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome:{props.name}</Text>
      <Image style={styles.image} source={{ uri: props.photoUrl }} />
    </View>
  );
};*/
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    fontSize: 25,
  },
  image: {
    marginTop: 15,
    width: 150,
    height: 150,
    borderColor: "rgba(0,0,0,0.2)",
    borderWidth: 3,
    borderRadius: 150,
  },
});
