import { React } from "react";
import { SafeAreaView, StyleSheet, ScrollView } from "react-native";
import PokemonBio from "../components/bio/PokemonBio";
import PokemonInfo, { bioIcons } from "../components/bio/PokemonInfo";

const PokemonBioScreen = ({ navigation, route }) => {
  const { pokemon, type1Color, type2Color, background } = route.params;

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: background, borderColor: type2Color, borderWidth: 5, borderRadius: 45, }]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <PokemonBio navigation={navigation} pokemon={pokemon} type1Color={type1Color} type2Color={type2Color} />
        <PokemonInfo pokemon={pokemon} type1Color={type1Color} type2Color={type2Color} icons={bioIcons} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#000000",
  },
});

export default PokemonBioScreen;
