import React, { useState, useEffect } from "react";
import { Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const pokemonTypingColors = {
	Normal: '#A8A77A',
	Fire: '#EE8130',
	Water: '#6390F0',
	Electric: '#F7D02C',
	Grass: '#7AC74C',
	Ice: '#96D9D6',
	Fighting: '#C22E28',
	Poison: '#A33EA1',
	Ground: '#E2BF65',
	Flying: '#A98FF3',
	Psychic: '#F95587',
	Bug: '#A6B91A',
	Rock: '#B6A136',
	Ghost: '#735797',
	Dragon: '#6F35FC',
	Dark: '#705746',
	Steel: '#B7B7CE',
	Fairy: '#D685AD',
};

const pokemonTypingBackgroundColors = {
  Normal: '#8F8E61',
  Fire: '#BB4E00',
  Water: '#305DBD',
  Electric: '#C49D00',
  Grass: '#479419',
  Ice: '#63A6A3',
  Fighting: '#8F0000',
  Poison: '#700B6E',
  Ground: '#AF8C32',
  Flying: '#765CC0',
  Psychic: '#C62254',
  Bug: '#738600',
  Rock: '#836E03',
  Ghost: '#402464',
  Dragon: '#3C02C9',
  Dark: '#3D2413',
  Steel: '#84849B',
  Fairy: '#A3527A',
}

const PokemonTabs = ({ pokemon, navigation }) => {
  const [typingColor, setTypingColor] = useState("");
  const [typingText, setTypingText] = useState("");
  const [typingBorder, setTypingBorder] = useState("");
  const [typingBackground, setTypingBackground] = useState("");

  useEffect(() => { 
    pokemon.type2 === ""
      ? setTypingText(pokemon.type1)
      : setTypingText(pokemon.type1 + "/" + pokemon.type2);

    setTypingColor(pokemonTypingColors[pokemon.type1]);
    setTypingBackground(pokemonTypingBackgroundColors[pokemon.type1]);
    pokemon.type2 === "" ? setTypingBorder(pokemonTypingColors[pokemon.type1]) : setTypingBorder(pokemonTypingColors[pokemon.type2]);
  }, [pokemon]);

  return (
    <TouchableOpacity
      style={[
        styles.container,
        { backgroundColor: typingColor, borderColor: typingBorder },
      ]}
      onPress={() =>
        navigation.navigate("Bio", {
          pokemon: pokemon,
          type1Color: typingColor,
          type2Color: typingBorder,
          background: typingBackground,
        })
      }
    >
      <Text style={styles.id}>{pokemon.number}</Text>
      <Text style={styles.name}>{pokemon.name}</Text>
      <Text style={styles.typing}>{typingText}</Text>
      <Image source={pokemon.sprite} style={styles.sprite} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    marginHorizontal: 8,
    alignItems: "center",
    paddingVertical: 30,
    marginBottom: 20,
    borderRadius: 10,
    borderWidth: 4,
  },

  id: {
    color: "white",
    fontFamily: "Ubuntu_500Medium",
    fontSize: 18,
    position: "absolute",
    left: "6%",
  },

  name: {
    color: "#FFFFFF",
    fontFamily: "Ubuntu_500Medium",
    fontSize: 20,
    position: "absolute",
    left: "18%",
  },

  typing: {
    color: "#FFFFFF",
    fontFamily: "Ubuntu_300Light_Italic",
    fontSize: 14,
    position: "absolute",
    right: "24%",
  },

  sprite: {
    width: 50,
    height: 45,
    position: "absolute",
    right: "6%",
  },
});

export default PokemonTabs;
