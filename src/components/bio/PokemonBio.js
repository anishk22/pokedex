import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const PokemonBio = ({ navigation, pokemon, type1Color, type2Color }) => {
  return (
    <View style={styles.titleContainer}>
    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Image
            source={{ uri: "https://img.icons8.com/ios-glyphs/90/ffffff/back.png" }}
            style={styles.backButton}
          />
    </TouchableOpacity>
      <Text style={styles.titleNumber}>{pokemon.number}</Text>
      <Text style={styles.titleText}>{pokemon.name}</Text>

      <View style={styles.attributeContainer}>
        <View style={{ flexDirection: 'row' }}>
          <View style={[styles.typing, { backgroundColor: type1Color }]}>
            <Text style={[styles.content]}>{pokemon.type1}</Text>
          </View>

          {pokemon.type2 ? (
          <View style={[styles.typing, { backgroundColor: type2Color }]}>
            <Text style={[styles.content]}>{pokemon.type2}</Text>
          </View>
          ) : null}
        
        </View>

      </View>

      <View style={styles.modelContainer}> 
        <Image style={styles.model} source={pokemon.model} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  backButton: {
    width: 30,
    height: 30,
    marginRight: '95%',
  },

  titleContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "5%",
    paddingBottom: "8%",
    padding: 20,
  },

  titleNumber: {
    color: "#ffffff",
    fontFamily: "Ubuntu_400Regular",
    fontSize: "20",
    marginTop: "-8%",
  },

  titleText: {
    color: "#ffffff",
    fontFamily: "Ubuntu_700Bold",
    fontSize: "30",
    marginTop: "2%",
  },

  attributeContainer: {
    flexDirection: "row",
    alignItems: 'center',
    marginVertical: "7%",
  },

  header: {
    color: "#ffffff",
    fontFamily: "Ubuntu_500Medium",
    fontSize: "20",
  },

  content: {
    color: "#ffffff",
    fontFamily: "Ubuntu_400Regular",
    fontSize: "20",
  },

  typing: {
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 10,
    marginHorizontal: 5,
  },

  modelContainer: {
    marginTop: "3%",
  },

  model: {
    width: 160,
    height: 160,
  },
});

export default PokemonBio;
