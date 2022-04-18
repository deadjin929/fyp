import React, { useState } from "react";
import { View, Text, FlatList, Switch, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Button, TextInput } from "react-native-paper";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Pop-Up Notification",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Notification in Control panel",
  },
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const NotificationScreen = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const renderItem = ({ item }) => <Item title={item.title} />;
  const [ChildNumber, setChildNumber] = useState("");
  const [AuthoritesNumber, setAuthoritesNumber] = useState("");

  return (
    <View style={styles.container}>
      <View>
        <ScrollView>
          <Text style={{ fontSize: 20, padding: 10 }}>
            Enable Notification{" "}
          </Text>

          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
          <Text style={{ fontSize: 20, padding: 10 }}>
            Select Notification type
          </Text>
          <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />

          <Text style={{ fontSize: 30, padding: 10, flex: 1 }}>
            Notification History
          </Text>

          <Text style={{ fontSize: 20, padding: 10 }}>
            Add Child Emergency Number
          </Text>

          <TextInput
            label="ChildNumber"
            mode="outlined"
            value={ChildNumber}
            style={{
              marginLeft: 18,
              marginRight: 18,
              marginTop: 18,
              padding: 10,
            }}
            theme={{ colors: { primary: "blue" } }}
            onChangeText={(text) => setChildNumber(text)}
          />

          <Text style={{ fontSize: 20, padding: 10 }}>
            Add Authorites Number
          </Text>

          <TextInput
            label="AuthoritesNumber"
            mode="outlined"
            value={AuthoritesNumber}
            style={{
              marginLeft: 18,
              marginRight: 18,
              marginTop: 18,
              padding: 10,
            }}
            theme={{ colors: { primary: "blue" } }}
            onChangeText={(text) => setAuthoritesNumber(text)}
          />

          <Button>Submit</Button>
        </ScrollView>
      </View>
    </View>
  );
};

export default NotificationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    padding: 5,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 18,
  },
});
