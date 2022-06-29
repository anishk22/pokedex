import React, { useState, useEffect } from "react";
import { Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const PokemonTabs = ({ pokemon }) => {
  const [typingColor, setTypingColor] = useState('');
  const [typingText, setTypingText] = useState('');
  const [typingBorder, setTypingBorder] = useState('');

  useEffect(() => {
    var typingHex;
    pokemon.type1 === 'Normal' ? typingHex = '#A8A77A' : null
    pokemon.type1 === 'Fire' ? typingHex = '#EE8130' : null
    pokemon.type1 === 'Water' ? typingHex = '#6390F0' : null
    pokemon.type1 === 'Electric' ? typingHex = '#F7D02C' : null
    pokemon.type1 === 'Grass' ? typingHex = '#7AC74C' : null
    pokemon.type1 === 'Ice' ? typingHex = '#96D9D6' : null
    pokemon.type1 === 'Fighting' ? typingHex = '#C22E2A' : null
    pokemon.type1 === 'Poison' ? typingHex = '#A33EA1' : null
    pokemon.type1 === 'Ground' ? typingHex = '#E2BF65' : null
    pokemon.type1 === 'Flying' ? typingHex = '#A98FF3' : null
    pokemon.type1 === 'Psychic' ? typingHex = '#F95587' : null
    pokemon.type1 === 'Bug' ? typingHex = '#A6B91A' : null
    pokemon.type1 === 'Rock' ? typingHex = '#B6A136' : null
    pokemon.type1 === 'Ghost' ? typingHex = '#735797' : null
    pokemon.type1 === 'Dragon' ? typingHex = '#6F35FC' : null
    pokemon.type1 === 'Dark' ? typingHex = '#705746' : null
    pokemon.type1 === 'Steel' ? typingHex = '#B7B7CE' : null
    pokemon.type1 === 'Fairy' ? typingHex = '#D685AD' : null
    setTypingColor(typingHex);

    pokemon.type2 === '' ? setTypingText(pokemon.type1) : setTypingText(pokemon.type1 + '/' + pokemon.type2)

    var typingBorderHex;
    pokemon.type2 === '' ? typingBorderHex = 'white' : null
    pokemon.type2 === 'Normal' ? typingBorderHex = '#A8A77A' : null
    pokemon.type2 === 'Fire' ? typingBorderHex = '#EE8130' : null
    pokemon.type2 === 'Water' ? typingBorderHex = '#6390F0' : null
    pokemon.type2 === 'Electric' ? typingBorderHex = '#F7D02C' : null
    pokemon.type2 === 'Grass' ? typingBorderHex = '#7AC74C' : null
    pokemon.type2 === 'Ice' ? typingBorderHex = '#96D9D6' : null
    pokemon.type2 === 'Fighting' ? typingBorderHex = '#C22E2A' : null
    pokemon.type2 === 'Poison' ? typingBorderHex = '#A33EA1' : null
    pokemon.type2 === 'Ground' ? typingBorderHex = '#E2BF65' : null
    pokemon.type2 === 'Flying' ? typingBorderHex = '#A98FF3' : null
    pokemon.type2 === 'Psychic' ? typingBorderHex = '#F95587' : null
    pokemon.type2 === 'Bug' ? typingBorderHex = '#A6B91A' : null
    pokemon.type2 === 'Rock' ? typingBorderHex = '#B6A136' : null
    pokemon.type2 === 'Ghost' ? typingBorderHex = '#735797' : null
    pokemon.type2 === 'Dragon' ? typingBorderHex = '#6F35FC' : null
    pokemon.type2 === 'Dark' ? typingBorderHex = '#705746' : null
    pokemon.type2 === 'Steel' ? typingBorderHex = '#B7B7CE' : null
    pokemon.type2 === 'Fairy' ? typingBorderHex = '#D685AD' : null
    setTypingBorder(typingBorderHex);
  }, [pokemon]);

  return (
    <TouchableOpacity style={[styles.container, { backgroundColor: typingColor, borderColor: typingBorder }]} >
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
    fontFamily: 'Ubuntu_500Medium',
    fontSize: 18,
    position: 'absolute', 
    left: '6%',
  },

  name: {
    color: "white",
    fontFamily: 'Ubuntu_500Medium',
    fontSize: 20,
    position: 'absolute', 
    left: '18%',
  },

  typing: {
    color: "white",
    fontFamily: 'Ubuntu_300Light_Italic',
    fontSize: 14,
    position: 'absolute', 
    right: '24%',
  },

  sprite: {
    width: 50,
    height: 45,
    position: 'absolute',
    right: '6%',
  },
});

export default PokemonTabs;
