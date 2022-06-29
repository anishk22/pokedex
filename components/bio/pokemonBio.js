import React from 'react'
import { View, Text, StyleSheet } from "react-native";

const PokemonBio = ({ pokemon }) => {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.titleText}>{pokemon.name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  titleContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },

  titleText: {
    color: '#ffffff',
    fontFamily: 'Ubuntu_700Bold',
    fontSize: '30',
  },
});

export default PokemonBio