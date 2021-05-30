import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { Input, Block, Text, Button } from "galio-framework";

export default class Registeration extends Component {
  render() {
    return (
      <View>
        <Block top>
          <Text h1>Registeration Form</Text>
        </Block>
        <Block>
          <Input placeholder="Email" placeholderTextColor="black" bottomHelp />
          <Input
            placeholder="Password"
            placeholderTextColor="black"
            password
            viewPass
            bottomHelp
          />
        </Block>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
