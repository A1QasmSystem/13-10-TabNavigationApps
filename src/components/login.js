// memasukan component atau menghubungkan ke React
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";

class Login extends React.Component {
  render() {
    return (
      <>
        {/* <View>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Register")}
          >
            <Text style={{ fontSize: 20 }}>Register</Text>
          </TouchableOpacity>
        </View> */}
        <View
          style={{
            backgroundColor: "#87cefa",
            flex: 1,
          }}
        >
          <TouchableOpacity
            onPress={() => {
              alert("Ganti bahasa");
            }}
          >
            <Text style={styles.language}>
              {" "}
              Language: English (United States) v
            </Text>
          </TouchableOpacity>
          <Text style={styles.insta}> Instagram</Text>

          <TextInput
            placeholder="Email"
            style={styles.TextInput2}
            maxLength={40}
          />
          <TextInput
            placeholder="Password"
            style={styles.TextInput2}
            maxLength={40}
            secureTextEntry={true}
          />
          <View style={styles.login}>
            <Button title="Log in" onPress={() => alert("Password salah")} />
          </View>
          {/* <Switch /> */}
          <View style={styles.forgot}>
            <TouchableOpacity
              onPress={() => {
                alert("Ganti bahasa");
              }}
            >
              <Text style={styles.forgot}> Forgot your login details?</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                alert("What do you Help");
              }}
            >
              <Text style={styles.help}> Get help signing in.</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.or}> OR</Text>
          {/* <ActivityIndicator size="small" color="#0000ff" /> */}
          <TouchableOpacity
            onPress={() => {
              alert("Masukan Account Facebook");
            }}
          >
            <Text style={styles.fblogin}> Log in with Facebook</Text>
          </TouchableOpacity>
          <View style={styles.dont}>
            <Text style={styles.dont}> Don't have an account?</Text>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate("Register");
              }}
            >
              <Text style={styles.signup}> Sign up.</Text>
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
  language: {
    marginBottom: 30,
    marginTop: 15,
    color: "#20232a",
    textAlign: "center",
    fontSize: 15,
    fontWeight: "bold",
  },
  insta: {
    marginBottom: 30,
    marginTop: 10,
    color: "#20232a",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
  },
  login: {
    width: 300,
    height: 40,
    marginHorizontal: 30,
    opacity: 0.3,
    // margin: 10,
    // marginHorizontal: 30,
    marginTop: 1,
    // backgroundColor: '#f1f3f8',
    borderBottomColor: "#000000",
    // borderBottomWidth: 1,
    padding: 5,
    // opacity: 0.5,
  },
  forgot: {
    // marginBottom: 30,
    marginTop: 5,
    color: "#20232a",
    textAlign: "center",
    fontSize: 14,
    // fontWeight: 'bold',
    flexDirection: "row",
    alignSelf: "center",
  },
  help: {
    // marginBottom: 30,
    marginTop: 5,
    color: "#20232a",
    textAlign: "center",
    fontSize: 14,
    fontWeight: "bold",
    flexDirection: "row",
    alignSelf: "center",
  },
  or: {
    // marginBottom: 30,
    marginTop: 20,
    color: "#20232a",
    textAlign: "center",
    fontSize: 17,
    fontWeight: "bold",
    flexDirection: "row",
    alignSelf: "center",
  },
  fblogin: {
    // shadowRadius: 5,
    // margin: 20,
    marginTop: 20,
    // paddingVertical: 8,
    // borderWidth: 7,
    // borderColor: '#20232a',
    // borderRadius: 20,
    // backgroundColor: '#61dafb',
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
    // fontWeight: "bold",
    flexDirection: "row",
    alignSelf: "center",
  },
  signup: {
    marginTop: 60,
    color: "#20232a",
    textAlign: "center",
    fontSize: 14,
    fontWeight: "bold",
    flexDirection: "row",
    alignSelf: "center",
  },
});

export default Login;
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
