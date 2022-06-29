import React, { useState, useEffect } from "react";
import { Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const PokemonTabs = ({ pokemon }) => {
  const [typingColor, setTypingColor] = useState('');
  const [typingText, setTypingText] = useState('');

  useEffect(() => {
    if (pokemon.type1 === 'Normal') {
      setTypingColor('#A8A77A')
    }
    if (pokemon.type1 === 'Fire') {
      setTypingColor('#EE8130')
    }
    if (pokemon.type1 === 'Water') {
      setTypingColor('#6390F0') 
    }
    if (pokemon.type1 === 'Electric') {
      setTypingColor('#F7D02C')
    }
    if (pokemon.type1 === 'Grass') {
      setTypingColor('#7AC74C')
    }
    if (pokemon.type1 === 'Ice') {
      setTypingColor('#96D9D6')
    }
    if (pokemon.type1 === 'Fighting') {
      setTypingColor('#C22E28')
    }
    if (pokemon.type1 === 'Poison') {
      setTypingColor('#A33EA1')
    }
    if (pokemon.type1 === 'Ground') {
      setTypingColor('#E2BF65')
    }
    if (pokemon.type1 === 'Flying') {
      setTypingColor('#A98FF3')
    }
    if (pokemon.type1 === 'Psychic') {
      setTypingColor('#F95587')
    }
    if (pokemon.type1 === 'Bug') {
      setTypingColor('#A6B91A')
    }
    if (pokemon.type1 === 'Rock') {
      setTypingColor('#B6A136')
    }
    if (pokemon.type1 === 'Ghost') {
      setTypingColor('#735797')
    }
    if (pokemon.type1 === 'Dragon') {
      setTypingColor('#6F35FC')
    }
    if (pokemon.type1 === 'Dark') {
      setTypingColor('#705746')
    }
    if (pokemon.type1 === 'Steel') {
      setTypingColor('#B7B7CE')
    }
    if (pokemon.type1 === 'Fairy') {
      setTypingColor('#D685AD')
    }

    pokemon.type2 === '' ? setTypingText(pokemon.type1) : setTypingText(pokemon.type1 + '/' + pokemon.type2)
  }, [pokemon]);

  return (
    <TouchableOpacity style={[styles.container, {backgroundColor: typingColor}]} >
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
