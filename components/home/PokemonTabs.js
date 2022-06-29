import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const PokemonTabs = ({ pokemon }) => {
  return (
    <View style={styles.container} >
      <Text style={styles.id}>{pokemon.id}</Text>
      <Text style={styles.name}>{pokemon.user}</Text>
      <Image source={pokemon.profile_picture} style={styles.sprite} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    marginHorizontal: 8,
    alignItems: "center",
    paddingVertical: 8,
    marginBottom: 20,
    backgroundColor: 'red',
    borderRadius: 10,
  },

  id: {
    color: "white",
    fontFamily: 'Ubuntu_500Medium',
    fontSize: 20,
    marginRight: 'auto',
    marginLeft: "5%",
  },

  name: {
    color: "white",
    fontFamily: 'Ubuntu_500Medium',
    fontSize: 20,
  },

  sprite: {
    width: 50,
    height: 45,
    marginLeft: 'auto',
    marginRight: "5%",
  },
});

export default PokemonTabs;
