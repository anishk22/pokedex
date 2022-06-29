import React, { useState, useEffect } from "react";
import { Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const PokemonTabs = ({ pokemon }) => {
  const [typingColor, setTypingColor] = useState('');
  const [typingText, setTypingText] = useState('');

  useEffect(() => {
    var typingHex;

    if (pokemon.type1 === 'Normal') {
      typingHex = '#A8A77A';
    }
    else if (pokemon.type1 === 'Fire') {
      typingHex = '#EE8130';
    }
    else if (pokemon.type1 === 'Water') {
      typingHex = '#6390F0';
    }
    else if (pokemon.type1 === 'Electric') {
      typingHex = '#F7D02C';
    }
    else if (pokemon.type1 === 'Grass') {
      typingHex = '#7AC74C';
    }
    else if (pokemon.type1 === 'Ice') { 
      typingHex = '#96D9D6';
    }
    else if (pokemon.type1 === 'Fighting') {
      typingHex = '#C22E2A';
    }
    else if (pokemon.type1 === 'Poison') {
      typingHex = '#A33EA1';
    }
    else if (pokemon.type1 === 'Ground') {
      typingHex = '#E2BF65';
    }
    else if (pokemon.type1 === 'Flying') {
      typingHex = '#A98FF3';
    }
    else if (pokemon.type1 === 'Psychic') {
      typingHex = '#F95587';
    }
    else if (pokemon.type1 === 'Bug') {
      typingHex = '#A6B91A';
    }
    else if (pokemon.type1 === 'Rock') {
      typingHex = '#B6A136';
    }
    else if (pokemon.type1 === 'Ghost') {
      typingHex = '#735797';
    }
    else if (pokemon.type1 === 'Dragon') {
      typingHex = '#6F35FC';
    }
    else if (pokemon.type1 === 'Dark') {
      typingHex = '#705746';
    }
    else if (pokemon.type1 === 'Steel') {
      typingHex = '#B7B7CE';
    }
    else if (pokemon.type1 === 'Fairy') {
      typingHex = '#DDA0DD';
    }

    setTypingColor(typingHex);
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
