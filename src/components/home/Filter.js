import { React, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import cloneDeep from "lodash/cloneDeep";

import { SearchBar } from "react-native-elements";

import { POKEMON } from "../../data/pokemonInfo";

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

// regional dexes
const GEN_1 = cloneDeep(POKEMON).slice(0, 151);
const GEN_2 = cloneDeep(POKEMON).slice(151, 251);
const GEN_3 = cloneDeep(POKEMON).slice(251, 386);
const GEN_4 = cloneDeep(POKEMON).slice(386, 493);
const GEN_5 = cloneDeep(POKEMON).slice(493, 649);
const GEN_6 = cloneDeep(POKEMON).slice(649, 721);
const GEN_7 = cloneDeep(POKEMON).slice(721, 807);
const GEN_8 = cloneDeep(POKEMON).slice(807, 905);

const Filter = ({ sendSortOrder, searchQuery, setSearchQuery }) => {
  const [sortOrderNum, setSortOrderNum] = useState("descending");
  const [sortOrderName, setSortOrderName] = useState("descending");
  const [currentGeneration, setCurrentGeneration] = useState(-1);

  return (
    <>
      <SearchBar
        placeholder="Search..."
        onChangeText={(newText) => setSearchQuery(newText.toLowerCase())}
        value={searchQuery}
        autoCorrect={false}
        lightTheme={true}
        round={true}
        containerStyle={styles.inputField}
      />

      <View style={styles.container}>
        <TouchableOpacity
          style={[
            styles.button,
            { width: "30%" },
            {
              borderColor: currentGeneration === -1 ? "red" : "white",
            },
          ]}
          onPress={() => {
            sortOrderNum === "ascending"
              ? [
                  sendSortOrder(DESCENDING_ORDER_NUMBER),
                  setSortOrderNum("descending"),
                  setSortOrderName("descending"),
                  setCurrentGeneration(-1),
                ]
              : [
                  sendSortOrder(ASCENDING_ORDER_NUMBER),
                  setSortOrderNum("ascending"),
                  setSortOrderName("descending"),
                  setCurrentGeneration(-1),
                ];
          }}
        >
          <Text style={styles.label}>All By Number</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.button,
            { width: "30%" },
            {
              borderColor: currentGeneration === -2 ? "red" : "white",
            },
          ]}
          onPress={() => {
            sortOrderName === "ascending"
              ? [
                  sendSortOrder(DESCENDING_ORDER_NAME),
                  setSortOrderName("descending"),
                  setSortOrderNum("descending"),
                  setCurrentGeneration(-2),
                ]
              : [
                  sendSortOrder(ASCENDING_ORDER_NAME),
                  setSortOrderName("ascending"),
                  setSortOrderNum("descending"),
                  setCurrentGeneration(-2),
                ];
          }}
        >
          <Text style={styles.label}>All By Name</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.button,
            { width: "30%" },
            {
              borderColor: currentGeneration === -3 ? "red" : "white",
            },
          ]}
          onPress={() => {
            [
              sendSortOrder(TYPING_ORDER_NUM),
              setSortOrderNum("descending"),
              setSortOrderName("descending"),
              setCurrentGeneration(-3),
            ];
          }}
        >
          <Text style={styles.label}>All By Type</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.container}>
        <TouchableOpacity
          style={[
            styles.button,
            { width: "22%" },
            {
              borderColor: currentGeneration === 1 ? "red" : "white",
            },
          ]}
          onPress={() => {
            [sendSortOrder(GEN_1), setCurrentGeneration(1)];
          }}
        >
          <Text style={styles.label}>Gen 1</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.button,
            { width: "22%" },
            {
              borderColor: currentGeneration === 2 ? "red" : "white",
            },
          ]}
          onPress={() => {
            [sendSortOrder(GEN_2), setCurrentGeneration(2)];
          }}
        >
          <Text style={styles.label}>Gen 2</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.button,
            { width: "22%" },
            {
              borderColor: currentGeneration === 3 ? "red" : "white",
            },
          ]}
          onPress={() => {
            [sendSortOrder(GEN_3), setCurrentGeneration(3)];
          }}
        >
          <Text style={styles.label}>Gen 3</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.button,
            { width: "22%" },
            {
              borderColor: currentGeneration === 4 ? "red" : "white",
            },
          ]}
          onPress={() => {
            [sendSortOrder(GEN_4), setCurrentGeneration(4)];
          }}
        >
          <Text style={styles.label}>Gen 4</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.container}>
        <TouchableOpacity
          style={[
            styles.button,
            { width: "22%" },
            {
              borderColor: currentGeneration === 5 ? "red" : "white",
            },
          ]}
          onPress={() => {
            [sendSortOrder(GEN_5), setCurrentGeneration(5)];
          }}
        >
          <Text style={styles.label}>Gen 5</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.button,
            { width: "22%" },
            {
              borderColor: currentGeneration === 6 ? "red" : "white",
            },
          ]}
          onPress={() => {
            [sendSortOrder(GEN_6), setCurrentGeneration(6)];
          }}
        >
          <Text style={styles.label}>Gen 6</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.button,
            { width: "22%" },
            {
              borderColor: currentGeneration === 7 ? "red" : "white",
            },
          ]}
          onPress={() => {
            [sendSortOrder(GEN_7), setCurrentGeneration(7)];
          }}
        >
          <Text style={styles.label}>Gen 7</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.button,
            { width: "22%" },
            {
              borderColor: currentGeneration === 8 ? "red" : "white",
            },
          ]}
          onPress={() => {
            [sendSortOrder(GEN_8), setCurrentGeneration(8)];
          }}
        >
          <Text style={styles.label}>Gen 8</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  inputField: {
    backgroundColor: "#FAFAFA",
    marginHorizontal: 10,
    marginVertical: 20,
    borderRadius: 20,
  },

  container: {
    backgroundColor: "black",
    marginBottom: 20,
    marginHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-around",
  },

  button: {
    backgroundColor: "lightblue",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
    borderRadius: 10,
    borderWidth: 3,
  },

  label: {
    color: "black",
    fontFamily: "Ubuntu_500Medium",
    fontSize: 14,
  },
});

export default Filter;
