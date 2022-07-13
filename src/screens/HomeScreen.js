import { React, useCallback, useState } from "react";
import { StyleSheet, ScrollView } from "react-native";
import SafeAreaView from "react-native-safe-area-view";

import Header from "../components/home/Header";
import Filter from "../components/home/Filter";
import PokemonTabs from "../components/home/PokemonTabs";

import { POKEMON } from "../data/pokemonInfo";

const HomeScreen = ({ navigation }) => {
  const [DATA, setData] = useState(POKEMON);
  const [searchQuery, setSearchQuery] = useState("");

  const getSortOrder = useCallback((data) => {
    setData(data);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Header />
        <Filter sendSortOrder={getSortOrder} searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

        {DATA.filter((item) => {
          if (searchQuery == "") {
            return item;
          } else if (
            item.name.toLowerCase().includes(searchQuery.toLowerCase())
          ) {
            return item;
          }
        }).map((pokemon, index) => (
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
