import React from "react";
import cloneDeep from "lodash/cloneDeep";
import { StyleSheet, ScrollView } from "react-native";
import SafeAreaView from "react-native-safe-area-view";
import Header from "../components/home/Header";
import PokemonTabs from "../components/home/PokemonTabs";

import { POKEMON } from "../data/pokemonInfo";

// different sorting orders
const ASCENDING_ORDER_NUMBER = cloneDeep(POKEMON);

const DESCENDING_ORDER_NUMBER = cloneDeep(POKEMON).sort(
  (a, b) => b.number - a.number
);

const ASCENDING_ORDER_NAME = cloneDeep(POKEMON).sort((a, b) =>
  a.name.localeCompare(b.name)
);

const DESCENDING_ORDER_NAME = cloneDeep(POKEMON).sort((a, b) =>
  b.name.localeCompare(a.name)
);

const TYPING_ORDER_NUM = cloneDeep(POKEMON).sort(function (a, b) {
  var n = a.type1.localeCompare(b.type1);
  if (n !== 0) {
    return n;
  }

  return a.number - b.number;
});

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Header />

        {ASCENDING_ORDER_NUMBER.map((pokemon, index) => (
          <PokemonTabs pokemon={pokemon} key={index} navigation={navigation} />
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
