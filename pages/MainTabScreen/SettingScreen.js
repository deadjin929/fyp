import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";

const SettingsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ fontSize: 40 }}>Settings</Text>
      <TouchableOpacity>
        <Text
          style={{ fontSize: 20 }}
          onPress={() => props.navigation.replace()}
        >
          Account
        </Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text
          style={{ fontSize: 20 }}
          onPress={() => props.navigation.replace()}
        >
          Notification
        </Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text
          style={{ fontSize: 20 }}
          onPress={() => props.navigation.replace()}
        >
          Help
        </Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text
          style={{ fontSize: 20 }}
          onPress={() => props.navigation.replace()}
        >
          Security
        </Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text
          style={{ fontSize: 20 }}
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
