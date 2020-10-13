// memasukan component atau menghubungkan ke React
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";

class Register extends React.Component {
  render() {
    return (
      <>
        {/* <View>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Login")}
          >
            <Text style={{ fontSize: 20 }}>Register</Text>
          </TouchableOpacity>
        </View> */}
        <View
          style={{
            backgroundColor: "white",
            flex: 1,
          }}
        >
          <Text style={styles.insta}> Instagram</Text>
          <Text style={styles.signuptosee}>
            {" "}
            Sign up to see photos and videos from your friends
          </Text>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate("Home");
            }}
          >
            <View style={styles.loginstyle}>
              <Image style={styles.Image} source={require("./assets/fb.jpg")} />
              <Text style={{ color: "white" }}> Log in with Facebook</Text>
            </View>
          </TouchableOpacity>
          <Text style={styles.or}> OR</Text>
          <TextInput
            placeholder="Email"
            style={styles.TextInput2}
            maxLength={40}
          />
          <TextInput
            placeholder="Full Name"
            style={styles.TextInput2}
            maxLength={40}
            secureTextEntry={true}
          />
          <TextInput
            placeholder="Username"
            style={styles.TextInput2}
            maxLength={40}
            secureTextEntry={true}
          />
          <TextInput
            placeholder="Password"
            style={styles.TextInput2}
            maxLength={40}
            secureTextEntry={true}
          />
          <View style={styles.login}>
            <Button
              title="Sign up"
              onPress={() => alert("Right button pressed")}
            />
          </View>
          {/* <Switch /> */}
          <View style={styles.by}>
            <Text style={styles.by}> By signing up, you agree to our</Text>

            <TouchableOpacity
              onPress={() => {
                alert("Ganti bahasa");
              }}
            >
              <Text style={styles.terms}> Terms and Privacy Policy.</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.have}>
            <Text style={styles.have}> Have an account?</Text>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate("Login");
              }}
            >
              <Text style={styles.logins}> Log in</Text>
            </TouchableOpacity>
          </View>
        </View>
      </>
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
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#eaeaea",
    alignItems: "center",
  },
  insta: {
    marginBottom: 15,
    marginTop: 20,
    color: "#20232a",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
  },
  signuptosee: {
    marginBottom: 15,
    marginRight: 40,
    marginLeft: 40,
    // marginTop: 0,
    color: "#20232a",
    textAlign: "center",
    fontSize: 17,
    textAlign: "center",
  },
  login: {
    width: 300,
    height: 40,
    marginHorizontal: 30,
    opacity: 0.3,

    marginTop: 1,
    borderBottomColor: "#000000",
    padding: 5,
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
  },
  Image: {
    width: 30,
    height: 50,
    tintColor: "white",
  },
  by: {
    // margin: 10,
    marginTop: 10,
    // marginBottom: 50,
    color: "#20232a",
    textAlign: "center",
    fontSize: 14,
    // flexDirection: "row",
    alignSelf: "center",
  },
  terms: {
    // marginTop: 5,
    color: "#20232a",
    textAlign: "center",
    fontSize: 14,
    fontWeight: "bold",
    flexDirection: "row",
    alignSelf: "center",
  },
  or: {
    marginTop: 10,
    marginBottom: 10,
    color: "#20232a",
    textAlign: "center",
    fontSize: 17,
    fontWeight: "bold",
    flexDirection: "row",
    alignSelf: "center",
  },
  fblogin: {
    marginTop: 20,
    color: "#20232a",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  dont: {
    marginTop: 60,
    color: "#20232a",
    textAlign: "center",
    fontSize: 14,
    flexDirection: "row",
    alignSelf: "center",
  },
  have: {
    // marginBottom: 30,
    marginTop: 30,
    color: "#20232a",
    textAlign: "center",
    fontSize: 14,
    // fontWeight: 'bold',
    flexDirection: "row",
    alignSelf: "center",
  },
  logins: {
    // marginBottom: 30,
    marginTop: 30,
    color: "#20232a",
    textAlign: "center",
    fontSize: 14,
    fontWeight: "bold",
    flexDirection: "row",
    alignSelf: "center",
  },
});

export default Register;
// =====================================
// =====================================
// import React from 'react';
// import {StyleSheet, Text, View} from 'react-native';
// import Header from './src/components/Header.js';

// const App = () => {
//   return (
//     <View>
//       <Header />
//       <Header />
//       <Header />
//       <Header />
//       <Header />
//       <Header />
//       <Header />
//     </View>
//   );
// };

// export default App;

// const styles = StyleSheet.create({});

// // =============================================================
// // =============================================================

// // /**
// //  * Sample React Native App
// //  * https://github.com/facebook/react-native
// //  *
// //  * @format
// //  * @flow strict-local
// //  */

// // import React from 'react';
// // import {
// //   SafeAreaView,
// //   StyleSheet,
// //   ScrollView,
// //   View,
// //   Text,
// //   StatusBar,
// // } from 'react-native';

// // import {
// //   Header,
// //   LearnMoreLinks,
// //   Colors,
// //   DebugInstructions,
// //   ReloadInstructions,
// // } from 'react-native/Libraries/NewAppScreen';

// // const App: () => React$Node = () => {
// //   return (
// //     <>
// //       <StatusBar barStyle="dark-content" />
// //       <SafeAreaView>
// //         <ScrollView
// //           contentInsetAdjustmentBehavior="automatic"
// //           style={styles.scrollView}>
// //           <Header />
// //           {global.HermesInternal == null ? null : (
// //             <View style={styles.engine}>
// //               <Text style={styles.footer}>Engine: Hermes</Text>
// //             </View>
// //           )}
// //           <View style={styles.body}>
// //             <View style={styles.sectionContainer}>
// //               <Text style={styles.sectionTitle}>Yahya</Text>
// //               <Text style={styles.sectionDescription}>
// //                 Edit <Text style={styles.highlight}>App.js</Text> to change this
// //                 screen and then come back to see your edits.
// //               </Text>
// //             </View>
// //             <View style={styles.sectionContainer}>
// //               <Text style={styles.sectionTitle}>See Your Changes</Text>
// //               <Text style={styles.sectionDescription}>
// //                 <ReloadInstructions />
// //               </Text>
// //             </View>
// //             <View style={styles.sectionContainer}>
// //               <Text style={styles.sectionTitle}>Pondok_Programmer</Text>
// //               <Text style={styles.sectionDescription}>
// //                 <DebugInstructions />
// //               </Text>
// //             </View>
// //             <View style={styles.sectionContainer}>
// //               <Text style={styles.sectionTitle}>Learn More</Text>
// //               <Text style={styles.sectionDescription}>
// //                 Read the docs to discover what to do next:
// //               </Text>
// //             </View>
// //             <LearnMoreLinks />
// //           </View>
// //         </ScrollView>
// //       </SafeAreaView>
// //     </>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   scrollView: {
// //     backgroundColor: Colors.lighter,
// //   },
// //   engine: {
// //     position: 'absolute',
// //     right: 0,
// //   },
// //   body: {
// //     backgroundColor: Colors.white,
// //   },
// //   sectionContainer: {
// //     marginTop: 32,
// //     paddingHorizontal: 24,
// //   },
// //   sectionTitle: {
// //     fontSize: 24,
// //     fontWeight: '600',
// //     color: Colors.black,
// //   },
// //   sectionDescription: {
// //     marginTop: 8,
// //     fontSize: 18,
// //     fontWeight: '400',
// //     color: Colors.dark,
// //   },
// //   highlight: {
// //     fontWeight: '700',
// //   },
// //   footer: {
// //     color: Colors.dark,
// //     fontSize: 12,
// //     fontWeight: '600',
// //     padding: 4,
// //     paddingRight: 12,
// //     textAlign: 'right',
// //   },
// // });

// // export default App;
