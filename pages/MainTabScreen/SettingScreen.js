import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
//import AccountScreen from "./settingscreen/account";

const SettingsScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ fontSize: 40, padding: 10 }}>Settings</Text>

      <TouchableOpacity>
        <Text
          style={{ fontSize: 20, padding: 10 }}
          onPress={() => navigation.push("AccountScreen")}
        >
          Account
        </Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text
          style={{ fontSize: 20, padding: 10 }}
          onPress={() => navigation.push("HomeScreen")}
        >
          Notification
        </Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text
          style={{ fontSize: 20, padding: 10 }}
          onPress={() => props.navigation.replace()}
        >
          Help
        </Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text
          style={{ fontSize: 20, padding: 10 }}
          onPress={() => props.navigation.replace()}
        >
          Security
        </Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text
          style={{ fontSize: 20, padding: 10 }}
          onPress={() => props.navigation.replace()}
        >
          Backup
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
