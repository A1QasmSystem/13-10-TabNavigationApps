import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import Login from "./login";
import Register from "./register";
import Home from "./home";
import Profile from "./profile";
import Free from "./free";
import Screen1 from "./screen1";
import Receive from "./receive";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const BottomTab = createBottomTabNavigator();
const TopTab = createMaterialTopTabNavigator();

const MyTabsBottom = () => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen name="Home" component={Home} />
      <BottomTab.Screen name="Profile" component={Profile} />
      <BottomTab.Screen name="Free" component={Free} />
    </BottomTab.Navigator>
  );
};

const MyTabsTop = () => {
  return (
    <TopTab.Navigator>
      <TopTab.Screen name="Home" component={Home} />
      <TopTab.Screen name="Screen1" component={Screen1} />
      <TopTab.Screen name="Free" component={Free} />
    </TopTab.Navigator>
  );
};

const RootDrawer = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={MyTabsBottom} />
    </Drawer.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={RootDrawer}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MyTabsTop"
          component={MyTabsTop}
          // options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Receive"
          component={Receive}
          // options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Screen1"
          component={Screen1}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
