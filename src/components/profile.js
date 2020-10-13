import React, { Component } from "react";
import { View, TextInput, StyleSheet, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

class Profile extends Component {
  constructor() {
    super();
    this.state = { password: "" };
  }
  render() {
    return (
      <View>
        <Text>Email</Text>
        <TextInput
          onChangeText={(password) => this.setState({ email: password })}
          placeholder="Email"
          style={styles.TextInput2}
          maxLength={40}
          // secureTextEntry={true}
        />
        <Text>Password</Text>
        <View style={styles.Input}>
          <TextInput
            onChangeText={(password) => this.setState({ password: password })}
            placeholder="Password"
            style={styles.TextInput2}
            maxLength={40}
            secureTextEntry={true}
          />
          <TouchableOpacity>
            <Text
              onPress={() => {
                this.props.navigation.navigate("Receive", {
                  password: this.state.password,
                });
              }}
            >
              Kirim
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  TextInput2: {
    margin: 10,
    marginHorizontal: 30,
    marginTop: 1,
    backgroundColor: "#f1f3f8",
    borderBottomColor: "#000000",
    borderBottomWidth: 1,
    padding: 5,
    opacity: 0.5,
  },
  Input: {
    flexDirection: "row",
    alignItems: "center",
    // justifyContent: "center",
  },
});

export default Profile;
