import { React } from "react";
import { SafeAreaView, StyleSheet, ScrollView } from "react-native";
import PokemonBio from "../components/bio/pokemonBio";

const PokemonBioScreen = ({ route }) => {
  const { pokemon } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <PokemonBio pokemon={pokemon}/>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
  },
});

export default PokemonBioScreen;