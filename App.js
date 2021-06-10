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

function Feed({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Feed Screen</Text>
      <Button title="Open drawer" onPress={() => navigation.openDrawer()} />
      <Button title="Toggle drawer" onPress={() => navigation.toggleDrawer()} />
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
      <DrawerItem
        label="Toggle drawer"
        onPress={() => props.navigation.toggleDrawer()}
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
          <Drawer.Screen name="home" component={MainTabScreen} />
          <Drawer.Screen name="todolist" component={Todolist} />
          <Drawer.Screen name="Root" component={Root} />
          <Drawer.Screen name="Feed" component={Feed} />
        </Drawer.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
