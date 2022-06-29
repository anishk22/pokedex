import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./screens/HomeScreen";
import PokemonBioScreen from "./screens/PokemonBioScreen";

const Stack = createStackNavigator();

const screenOptions = {
  headerShown: false,
  tabBarShowLabel: false,
  tabBarStyle: [
    {
      display: "flex",
    },
    {
      backgroundColor: "white",
      borderTopWidth: 0.5,
    },
    null,
  ],
};

export const MainStack = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Main" screenOptions={screenOptions}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Bio" component={PokemonBioScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);
