import { React } from "react";
import { SafeAreaView, StyleSheet, ScrollView } from "react-native";
import PokemonBio from "../components/bio/PokemonBio";
import PokemonInfo, { bioIcons } from "../components/bio/PokemonInfo";

const PokemonBioScreen = ({ route }) => {
  const { pokemon } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <PokemonBio pokemon={pokemon} />
        <PokemonInfo icons={bioIcons}/>
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