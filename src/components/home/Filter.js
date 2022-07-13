import { React, useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
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

const Filter = ({ sendSortOrder, searchQuery, setSearchQuery }) => {
  const [sortOrderNum, setSortOrderNum] = useState("descending");
  const [sortOrderName, setSortOrderName] = useState("descending");

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
          style={styles.button}
          onPress={() => {
            sortOrderNum === "ascending"
              ? [
                  sendSortOrder(DESCENDING_ORDER_NUMBER),
                  setSortOrderNum("descending"),
                  setSortOrderName("descending"),
                ]
              : [
                  sendSortOrder(ASCENDING_ORDER_NUMBER),
                  setSortOrderNum("ascending"),
                  setSortOrderName("descending"),
                ];
          }}
        >
          <Text style={styles.label}>By Number</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            sortOrderName === "ascending"
              ? [
                  sendSortOrder(DESCENDING_ORDER_NAME),
                  setSortOrderName("descending"),
                  setSortOrderNum("descending"),
                ]
              : [
                  sendSortOrder(ASCENDING_ORDER_NAME),
                  setSortOrderName("ascending"),
                  setSortOrderNum("descending"),
                ];
          }}
        >
          <Text style={styles.label}>By Name</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            [
              sendSortOrder(TYPING_ORDER_NUM),
              setSortOrderNum("descending"),
              setSortOrderName("descending"),
            ];
          }}
        >
          <Text style={styles.label}>By Type</Text>
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
    flexDirection: "row",
    justifyContent: "space-around",
  },

  button: {
    backgroundColor: "lightblue",
    justifyContent: "center",
    alignItems: "center",
    width: "28%",
    paddingVertical: 10,
    borderRadius: 10,
    borderColor: "white",
    borderWidth: 2,
  },

  label: {
    color: "black",
    fontFamily: "Ubuntu_500Medium",
    fontSize: 14,
  },
});

export default Filter;
