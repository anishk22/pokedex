import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const PokemonBio = ({ pokemon, type1Color, type2Color }) => {
  return (
    <View style={[styles.titleContainer, { backgroundColor: type1Color, borderColor: type2Color }]}>
      <Text style={styles.titleNumber}>{pokemon.number}</Text>
      <Text style={styles.titleText}>{pokemon.name}</Text>

      <View style={styles.modelContainer}> 
        <Image style={styles.model} source={pokemon.model} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "5%",
    paddingBottom: "12%",
    borderWidth: 5,
    borderBottomWidth: 0,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    padding: 20,
  },

  titleNumber: {
    color: "#ffffff",
    fontFamily: "Ubuntu_400Regular",
    fontSize: "20",
    marginTop: "2%",
  },

  titleText: {
    color: "#ffffff",
    fontFamily: "Ubuntu_700Bold",
    fontSize: "30",
    marginTop: "2%",
  },

  modelContainer: {
    marginTop: "5%",
  },

  model: {
    width: 160,
    height: 160,
  },
});

export default PokemonBio;
