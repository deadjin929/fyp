import React, { useState } from "react";
import { View, Text, FlatList, Switch, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Button, TextInput } from "react-native-paper";
import {
  Table,
  TableWrapper,
  Row,
  Cell,
  Rows,
  Col,
} from "react-native-table-component";

const Managetracker = (props) => {
  //   const [isEnabled, setIsEnabled] = useState(false);
  //   const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  //   const renderItem = ({ item }) => <Item title={item.title} />;
  const sendCred = async (props) => {
    fetch(`http://192.168.10.6:3000/getdata/${Assetnumber}`, {
      method: "GET",
      headers: {
        "cache-control": "no-cache",
      },
    })
      .then((res) => res.json())
      .then(async (data) => {
        try {
          setData(data);
          setLoading(false);
          console.log(Data);
          Data.map((item) => {
            setLatitude(item.latitude);
            setLongitude(item.longitude);
          });
        } catch (e) {
          console.log("error login", e);
          Alert(e);
        }
      });
  };

  function Display() {
    return (
      <View>
        <Text>{longitude}</Text>
        <Text>{latitude}</Text>
      </View>
    );
  }

  const [Assetnumber, setAssetnumber] = useState("");
  const [loading, setLoading] = useState(true);
  const [Data, setData] = useState([]);
  const [longitude, setLongitude] = useState("");
  const [latitude, setLatitude] = useState("");

  return (
    <View style={styles.container}>
      <ScrollView>
        <TextInput
          label="Assetnumber"
          mode="outlined"
          value={Assetnumber}
          style={{
            marginLeft: 18,
            marginRight: 18,
            marginTop: 18,
            padding: 10,
          }}
          theme={{ colors: { primary: "blue" } }}
          onChangeText={(text) => setAssetnumber(text)}
        />
        <Button
          mode="contained"
          style={{ marginLeft: 18, marginRight: 18, marginTop: 18 }}
          onPress={() => sendCred(props)}
        >
          Submit
        </Button>
        <Display />
      </ScrollView>
    </View>
  );
};

export default Managetracker;

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
  head: { height: 40, backgroundColor: "orange" },
  wrapper: { flexDirection: "row" },
  title: { flex: 1, backgroundColor: "#2ecc71" },
  row: { height: 28 },
  text: { textAlign: "center" },
});
