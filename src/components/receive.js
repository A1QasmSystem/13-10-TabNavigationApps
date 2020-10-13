import React, { Component } from "react";
import { Text, View } from "react-native";

export class Receive extends Component {
  render() {
    const { password } = this.props.route.params;
    return (
      <View>
        <Text>Email: </Text>
        <Text>Password: {password} </Text>
      </View>
    );
  }
}

export default Receive;
