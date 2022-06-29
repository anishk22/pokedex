import React from 'react'
import { View, Text, Image, StyleSheet } from "react-native";

const PokemonBio = ({ pokemon }) => {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.titleNumber}>{pokemon.number}</Text>
      <Text style={styles.titleText}>{pokemon.name}</Text>

      <View style={styles.modelContainer}>
        <Image style={styles.model} source={pokemon.model} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  titleContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },

  titleNumber: {
    color: '#ffffff',
    fontFamily: 'Ubuntu_400Regular',
    fontSize: '20',
  },

  titleText: {
    color: '#ffffff',
    fontFamily: 'Ubuntu_700Bold',
    fontSize: '30',
    marginTop: '2%',
  },

  modelContainer: {
    marginTop: '8%',
    borderWidth: 1,
    borderColor: '#ffffff',
    borderRadius: 40,
    padding: 20,
  },

  model: {
    width: 160,
    height: 160,
  }
});

export default PokemonBio