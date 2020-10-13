import React, { Component } from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import Navigator from "./navigator";

class Splash extends Component {
  constructor() {
    super();
    (this.componentDidMount = function () {
      console.log("ini dari didcomponent");
      setTimeout(() => {
        this.setState({
          role: false,
        });
      }, 5000);
    }),
      (this.componentDidUpdate = function () {
        console.log("ini dari DidUpdate");
      });
  }
  state = {
    role: true,
  };
  splash = () => {
    if (this.state.role) {
      return (
        <View
          style={{
            height: "100%",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "black",
          }}
        >
          <Image
            source={require("./assets/iconig.png")}
            style={{
              width: 200,
              height: 200,
              marginTop: 170,
              alignSelf: "center",
              // tintColor: "white",
            }}
          />
          <Text
            style={{
              // margin: 20,
              marginTop: "50%",
              color: "white",
              // textAlign: "center",
              fontSize: 20,
              fontWeight: "bold",
              alignSelf: "center",
            }}
          >
            From
          </Text>
          <Text
            style={{
              marginTop: 0,
              color: "white",
              // textAlign: "center",
              fontSize: 20,
              fontWeight: "bold",
              alignSelf: "center",
              color: "red",
            }}
          >
            Facebook
          </Text>
        </View>
      );
    }
  };
  render() {
    if (this.state.role) {
      return <View style={{ flex: 1 }}>{this.splash()}</View>;
    } else {
      return <Navigator />;
    }
  }
}
export default Splash;

// ======================
//   render() {
//     return (
//       <View
//         style={{
//           backgroundColor: "black",
//           flex: 1,
//         }}
//       >
//         <Image
//           style={{
//             width: 200,
//             height: 200,
//             marginTop: 170,
//             alignSelf: "center",
//             // tintColor: "white",
//           }}
//           source={require("./assets/iconig.png")}
//         />
// <Text style={styles.frm}> From</Text>
// <Text style={styles.fb}> Facebook</Text>
//       </View>
//     );
//   }
// }
// const styles = StyleSheet.create({
//   title: {
//     margin: 20,
//     marginTop: 40,
//     color: "white",
//     // textAlign: "center",
//     fontSize: 20,
//     fontWeight: "bold",
//   },
//   frm: {
// // margin: 20,
// marginTop: "50%",
// color: "white",
// // textAlign: "center",
// fontSize: 20,
// fontWeight: "bold",
// alignSelf: "center",
//   },
//   fb: {
// marginTop: 0,
// color: "white",
// // textAlign: "center",
// fontSize: 20,
// fontWeight: "bold",
// alignSelf: "center",
// color: "red",
//   },
// });
// export default Splash;
