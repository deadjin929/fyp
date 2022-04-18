import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Icon from "react-native-vector-icons/Ionicons";

import HomeScreen from "./HomeScreen";
import LocationScreen from "./locationScreen";
import SettingScreen from "./SettingScreen";
import NotificationScreen from "./NotificationScreen";
import AccountScreen from "./settingscreen/account";
import Managetracker from "./locationscreen/managetracker";
import CreateProfile from "./settingscreen/CreateProfile";
import Profile from "./settingscreen/Profile";
//const HomeStack = createStackNavigator();
const LocationStack = createStackNavigator();
const NotificationStack = createStackNavigator();
const SettingStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
  <Tab.Navigator initialRouteName="Locations" activeColor="#fff">
    {/* <Tab.Screen
      name="Home"
      component={HomeStackScreen}
      options={{
        tabBarLabel: "Home",
        tabBarColor: "#3498db",
        tabBarIcon: ({ color }) => (
          <Icon name="ios-home" color={color} size={26} />
        ),
      }}
    /> */}
    <Tab.Screen
      name="Locations"
      component={LocationStackScreen}
      options={{
        tabBarLabel: "Location",
        tabBarColor: "#3498db",
        tabBarIcon: ({ color }) => (
          <Icon name="ios-location" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Notification"
      component={NotificationStackScreen}
      options={{
        tabBarLabel: "Notification",
        tabBarColor: "#3498db",
        tabBarIcon: ({ color }) => (
          <Icon name="ios-notifications" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Setting"
      component={SettingStackScreen}
      options={{
        tabBarLabel: "Setting",
        tabBarColor: "#3498db",
        tabBarIcon: ({ color }) => (
          <Icon name="ios-settings" color={color} size={26} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default MainTabScreen;

// const HomeStackScreen = ({ navigation }) => (
//   <HomeStack.Navigator
//     screenOptions={{
//       headerStyle: {
//         backgroundColor: "#3498db",
//       },
//       headerTintColor: "#fff",
//       headerTitleStyle: {
//         fontWeight: "bold",
//       },
//     }}
//   >
//     <HomeStack.Screen
//       name="Home"
//       component={HomeScreen}
//       options={{
//         title: "E-Child Guard",
//         headerLeft: () => (
//           <Icon.Button
//             name="ios-menu"
//             size={25}
//             backgroundColor="#3498db"
//             onPress={() => navigation.openDrawer()}
//           ></Icon.Button>
//         ),
//       }}
//     />
//   </HomeStack.Navigator>
// );

const LocationStackScreen = ({ navigation }) => (
  <LocationStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#3498db",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <LocationStack.Screen
      name="Home"
      component={LocationScreen}
      options={{
        title: "E-Child Guard",
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="#3498db"
            onPress={() => navigation.openDrawer()}
          ></Icon.Button>
        ),
      }}
    />
    <LocationStack.Screen name="Managetracker" component={Managetracker} />
  </LocationStack.Navigator>
);

const NotificationStackScreen = ({ navigation }) => (
  <NotificationStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#3498db",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <NotificationStack.Screen
      name="Home"
      component={NotificationScreen}
      options={{
        title: "E-Child Guard",
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="#3498db"
            onPress={() => navigation.openDrawer()}
          ></Icon.Button>
        ),
      }}
    />
  </NotificationStack.Navigator>
);

const SettingStackScreen = ({ navigation }) => (
  <SettingStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#3498db",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <SettingStack.Screen
      name="Home"
      component={SettingScreen}
      options={{
        title: "E-Child Guard",
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="#3498db"
            onPress={() => navigation.openDrawer()}
          ></Icon.Button>
        ),
      }}
    />
    <SettingStack.Screen
      name="AccountScreen"
      component={AccountScreen}
      options={{
        title: "E-Child Guard",
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="#3498db"
            onPress={() => navigation.openDrawer()}
          ></Icon.Button>
        ),
      }}
    />
    <SettingStack.Screen
      name="CreateProfile"
      component={CreateProfile}
      options={{
        title: "E-Child Guard",
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="#3498db"
            onPress={() => navigation.openDrawer()}
          ></Icon.Button>
        ),
      }}
    />
    <SettingStack.Screen
      name="Profile"
      component={Profile}
      options={{
        title: "E-Child Guard",
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="#3498db"
            onPress={() => navigation.openDrawer()}
          ></Icon.Button>
        ),
      }}
    />
    <SettingStack.Screen name="HomeScreen" component={HomeScreen} />
  </SettingStack.Navigator>
);
