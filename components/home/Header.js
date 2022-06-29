import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const Header = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.pokeball} source={require("../../assets/pokeball.png")}/>
      <Text style={styles.headerText}>POKEDEX</Text>
      <Image style={styles.pokeball} source={require("../../assets/pokeball.png")}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: 'row',
    marginVertical: 15,
  },

  headerText: {
    color: 'white',
    fontFamily: 'Ubuntu_700Bold',
    fontSize: '30',
  },

  pokeball: {
    width: 35,
    height: 35,
    marginHorizontal: 15,
  }
});

export default Header;