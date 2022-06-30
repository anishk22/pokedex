import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const PokemonBio = ({ navigation, pokemon }) => {
  return (
    <View style={styles.titleContainer}>
    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Image
            source={{ uri: "https://img.icons8.com/ios-glyphs/90/ffffff/back.png" }}
            style={styles.backButton}
          />
    </TouchableOpacity>
      <Text style={styles.titleNumber}>{pokemon.number}</Text>
      <Text style={styles.titleText}>{pokemon.name}</Text>

      <View style={styles.modelContainer}> 
        <Image style={styles.model} source={pokemon.model} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  backButton: {
    width: 30,
    height: 30,
    marginRight: '95%',
  },

  titleContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "5%",
    paddingBottom: "12%",
    padding: 20,
  },

  titleNumber: {
    color: "#ffffff",
    fontFamily: "Ubuntu_400Regular",
    fontSize: "20",
    marginTop: "-8%",
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
