import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { Divider } from "react-native-elements";

const Header = () => {
  return (
    <View>
      <View style={styles.container}>
        <Image
          style={styles.pokedex}
          source={require("../../assets/pokedex.png")}
        />
      </View>

      <Divider width={1} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginVertical: 10,
  },

  pokedex: {
    width: 250,
    height: 85,
  },
});

export default Header;
