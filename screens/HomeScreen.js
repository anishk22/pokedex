import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import SafeAreaView from 'react-native-safe-area-view';
import Header from "../components/home/Header";
import PokemonTabs from "../components/home/PokemonTabs";

import { POKEMON } from "../data/pokemonInfo";
  
const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Header/>
        
        {POKEMON.map((pokemon, index) => (
          <PokemonTabs pokemon={pokemon} key={index} navigation={navigation}/>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
  },
});

export default HomeScreen;
