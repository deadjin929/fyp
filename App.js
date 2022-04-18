import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { StatusBar } from "expo-status-bar";

import HomeScreen from "./pages/Homescreeen";
import LoadingScreen from "./pages/Loadingscreen";
import LoginScreen from "./pages/LoginScreen";
import SignupScreen from "./pages/SignupScreen";
import MainTabScreen from "./pages/MainTabScreen/MainTabScreen";
import Todolist from "./pages/Todolist/Todolist";
import DrawerMenu from "./pages/DrawerMenu/DrawerMenu";

import AsyncStorage from "@react-native-async-storage/async-storage";
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function VirtualBorder({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>VirtualBorder Screen</Text>
      <Button title="Open drawer" onPress={() => navigation.openDrawer()} />
      <Button title="Toggle drawer" onPress={() => navigation.toggleDrawer()} />
    </View>
  );
}

function UserGuide({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>UserGuide Screen</Text>
      <Button title="Open drawer" onPress={() => navigation.openDrawer()} />
      <Button title="Toggle drawer" onPress={() => navigation.toggleDrawer()} />
    </View>
  );
}

function Logout({ navigation }) {
  const [email, setEmail] = useState("loading");
  const Boiler = async () => {
    const token = await AsyncStorage.getItem("token");
    fetch("http://192.168.10.6:3000/", {
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

  const logout = () => {
    AsyncStorage.removeItem("token").then(() => {
      navigation.navigate("Root", { screen: "login" });
    });
  };
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button mode="contained" onPress={() => logout()} title="logout">
        logout
      </Button>
    </View>
  );
}

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Close drawer"
        onPress={() => props.navigation.closeDrawer()}
      />
    </DrawerContentScrollView>
  );
}

function Root() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="loading" component={LoadingScreen} />
      <Stack.Screen name="login" component={LoginScreen} />
      <Stack.Screen name="signup" component={SignupScreen} />
      <Stack.Screen name="Home" component={MainTabScreen} />
    </Stack.Navigator>
  );
}

const App = (navigation) => {
  const [isloggedin, setLogged] = useState(null);

  const detectLogin = async () => {
    const token = await AsyncStorage.getItem("token");
    if (token) {
      setLogged(true);
    } else {
      setLogged(false);
    }
  };
  useEffect(() => {
    detectLogin();
  }, []);
  return (
    <>
      <NavigationContainer>
        {/* 
                <Stack.Navigator >
          <Stack.Screen name="home" component={MainTabScreen} />

        </Stack.Navigator>
        <Drawer.Navigator initialRouteName="home">
        <Drawer.Screen name="home" component={MainTabScreen} />
            <Stack.Screen name="home" component={MainTabScreen} />
         <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
          </Drawer.Navigator>
                */}
      </NavigationContainer>

      <NavigationContainer>
        <Drawer.Navigator
          drawerContent={(props) => <CustomDrawerContent {...props} />}
        >
          <Drawer.Screen name="Home" component={MainTabScreen} />
          <Drawer.Screen name="VirtualBorder" component={VirtualBorder} />
          <Drawer.Screen name="todolist" component={Todolist} />
          <Drawer.Screen name="UserGuide" component={UserGuide} />
          <Drawer.Screen name="Logout" component={Logout} />
          <Drawer.Screen name="Root" component={Root} />
        </Drawer.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
