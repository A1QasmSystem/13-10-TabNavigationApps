import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

class Home extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <TouchableOpacity style={styles.fab}>
          <Text style={styles.text}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate("MyTabsTop");
          }}
        >
          <View style={styles.loginstyle}>
            {/* <Image style={styles.Image} source={require("./assets/fb.jpg")} /> */}
            <Text style={{ color: "white" }}> Log in from Top Tabs</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  fab: {
    height: 50,
    width: 50,
    borderRadius: 200,
    position: "absolute",
    bottom: 20,
    right: 20,
    // top: 500,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#686cc3",
  },
  text: {
    fontSize: 30,
    color: "white",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  loginstyle: {
    width: 300,
    height: 35,
    backgroundColor: "dodgerblue",
    alignSelf: "center",
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
    color: "#20232a",
    textAlign: "center",
    fontSize: 14,
    justifyContent: "center",
    // flexDirection: "row",
    // alignSelf: "center",
    // // position: "absolute",
    // // width: 200,
    // justifyContent: "center",
    // alignContent: "center",
    // alignItems: "center",

    // // height: 10,
    // padding: 30,
    // borderRadius: 20,
    // top: "30%",
    // margin: 100,
    // // flex: 1,
    // // borderRadius: 60 / 2,
    // // justifyContent: "center",
    // // shadowRadius: 10,
    // // shadowColor: "#f02a4b",
    // backgroundColor: "skyblue",
    // // shadowOpacity: 0.3,
    // // shadowOffset: { height: 10 },
  },
});
// const styles = StyleSheet.create({
// });

export default Home;

// =============================
// import React, { Component } from "react";
// import { Text, View } from "react-native";
// import FloatingButton from "./floatingbutton";

// class Home extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Image
//           source={require("./assets/add-button.png")}
//           resizeMode="cover"
//           style={{ width: 500, height: 900, opacity: 0.5 }}
//         />
//         <FloatingButton style={{ bottom: 100 }} />
//         <Text> Home </Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//   },
// });

// export default Home;
