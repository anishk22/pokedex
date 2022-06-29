import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Divider } from "react-native-elements";

const Header = () => {
  return (
    <View style={styles.header}>
      <View style={styles.container}>
        <Image style={styles.pokeball} source={require("../../assets/pokeball.png")}/>
        <Text style={styles.headerText}>POKEDEX</Text>
        <Image style={styles.pokeball} source={require("../../assets/pokeball.png")} />
      </View>

      <Divider width={1} style={styles.divider} />
      </View>
  );
};

const styles = StyleSheet.create({
  header: {
    marginBottom: 20, 
  },

  container: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: 'row',
    marginVertical: 15,
  },

  divider: {
    marginTop: '2%',
    marginHorizontal: '12%',
  },

  headerText: {
    color: '#ffffff',
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