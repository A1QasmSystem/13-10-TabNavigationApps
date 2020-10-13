import React from "react";
import Splash from "./src/components/splash";
class App extends React.Component {
  render() {
    return <Splash />;
  }
}

export default App;
// =================================
// import React from "react";
// import { StyleSheet, Text, View } from "react-native";

// import DrawerNavigator from "./navigation/DrawerNavigator";

// export default class App extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <DrawerNavigator />
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//   },
// });

// // =============================
// // import React, { Component } from "react";
// // import Splash from "./src/components/splash";

// // export class App extends Component {
// //   render() {
// //     return <Splash />;
// //   }
// // }

// // export default App;
