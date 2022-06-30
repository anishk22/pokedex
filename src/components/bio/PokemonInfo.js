import React, { useState } from "react";
import { Divider } from "react-native-elements";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";

const BioTabs = ({ pokemon, type1Color, type2Color, icons }) => {
  const [activeTab, setActiveTab] = useState("About");

  const Icon = ({ icon }) => (
    <TouchableOpacity onPress={() => setActiveTab(icon.name)}>
      <Image
        source={{ uri: activeTab == icon.name ? icon.active : icon.inactive }}
        style={styles.tabButton}
      />
    </TouchableOpacity>
  );

  const renderSection = () => {
    if (activeTab == "About") {
      return <View>{renderAbout()}</View>;
    } else {
      return <View>{renderStats()}</View>;
    }
  };

  const renderAbout = () => {
    return (
      <View style={styles.infoContainer}>
        <View style={styles.attributeContainer}>
          <Text style={styles.header}>Class: </Text>
          <Text style={styles.content}>{pokemon.class}</Text>
        </View>

        <View style={styles.attributeContainer}>
          <Text style={styles.header}>Height: </Text>
          <Text style={styles.content}>{pokemon.height}</Text>
        </View>

        <View style={styles.attributeContainer}>
          <Text style={styles.header}>Weight: </Text>
          <Text style={styles.content}>{pokemon.weight}</Text>
        </View>

        <View style={styles.attributeContainer}>
          <Text style={styles.header}>Ability 1: </Text>
          <Text style={styles.content}>{pokemon.ability1}</Text>
        </View>

        {pokemon.ability2 ? (
          <View style={styles.attributeContainer}>
            <Text style={styles.header}>Ability 2: </Text>
            <Text style={styles.content}>{pokemon.ability2}</Text>
          </View>
        ) : null}

        {pokemon.ability3 ? (
          <View style={styles.attributeContainer}>
            <Text style={styles.header}>Ability 3: </Text>
            <Text style={styles.content}>{pokemon.ability3}</Text>
          </View>
        ) : null}
      </View>
    );
  };

  const renderStats = () => {
    return (
      <View style={styles.statsContainer}>
        <View style={styles.statWrapper}>
          <Text style={styles.statHeader}>HP:</Text>
          <View
            style={[
              styles.barOutside,
              { paddingRight: ((255 - parseInt(pokemon.hp)) / 255) * 175 },
            ]}
          >
            <View
              style={[
                styles.barInside,
                {
                  backgroundColor: type2Color,
                  paddingRight: (parseInt(pokemon.hp) / 255) * 175,
                },
              ]}
            />
          </View>
          <Text style={[styles.content, styles.statContent]}>{pokemon.hp}</Text>
        </View>
        <View style={styles.statWrapper}>
          <Text style={styles.statHeader}>Attack:</Text>
          <View
            style={[
              styles.barOutside,
              { paddingRight: ((255 - parseInt(pokemon.attack)) / 255) * 175 },
            ]}
          >
            <View
              style={[
                styles.barInside,
                {
                  backgroundColor: type2Color,
                  paddingRight: (parseInt(pokemon.attack) / 255) * 175,
                },
              ]}
            />
          </View>
          <Text style={[styles.content, styles.statContent]}>
            {pokemon.attack}
          </Text>
        </View>
        <View style={styles.statWrapper}>
          <Text style={styles.statHeader}>Defense:</Text>
          <View
            style={[
              styles.barOutside,
              { paddingRight: ((255 - parseInt(pokemon.defense)) / 255) * 175 },
            ]}
          >
            <View
              style={[
                styles.barInside,
                {
                  backgroundColor: type2Color,
                  paddingRight: (parseInt(pokemon.defense) / 255) * 175,
                },
              ]}
            />
          </View>
          <Text style={[styles.content, styles.statContent]}>
            {pokemon.defense}
          </Text>
        </View>
        <View style={styles.statWrapper}>
          <Text style={styles.statHeader}>Sp. Atk:</Text>
          <View
            style={[
              styles.barOutside,
              {
                paddingRight: ((255 - parseInt(pokemon.sp_attack)) / 255) * 175,
              },
            ]}
          >
            <View
              style={[
                styles.barInside,
                {
                  backgroundColor: type2Color,
                  paddingRight: (parseInt(pokemon.sp_attack) / 255) * 175,
                },
              ]}
            />
          </View>
          <Text style={[styles.content, styles.statContent]}>
            {pokemon.sp_attack}
          </Text>
        </View>
        <View style={styles.statWrapper}>
          <Text style={styles.statHeader}>Sp. Def:</Text>
          <View
            style={[
              styles.barOutside,
              {
                paddingRight:
                  ((255 - parseInt(pokemon.sp_defense)) / 255) * 175,
              },
            ]}
          >
            <View
              style={[
                styles.barInside,
                {
                  backgroundColor: type2Color,
                  paddingRight: (parseInt(pokemon.sp_defense) / 255) * 175,
                },
              ]}
            />
          </View>
          <Text style={[styles.content, styles.statContent]}>
            {pokemon.sp_defense}
          </Text>
        </View>
        <View style={styles.statWrapper}>
          <Text style={styles.statHeader}>Speed:</Text>
          <View
            style={[
              styles.barOutside,
              { paddingRight: ((255 - parseInt(pokemon.speed)) / 255) * 175 },
            ]}
          >
            <View
              style={[
                styles.barInside,
                {
                  backgroundColor: type2Color,
                  paddingRight: (parseInt(pokemon.speed) / 255) * 175,
                },
              ]}
            />
          </View>
          <Text style={[styles.content, styles.statContent]}>
            {pokemon.speed}
          </Text>
        </View>
        <View style={styles.statWrapper}>
          <Text style={styles.statHeader}>BST:</Text>
          <View
            style={[
              styles.barOutside,
              { paddingRight: ((780 - parseInt(pokemon.bst)) / 780) * 175 },
            ]}
          >
            <View
              style={[
                styles.barInside,
                {
                  backgroundColor: type2Color,
                  paddingRight: (parseInt(pokemon.bst) / 780) * 175,
                },
              ]}
            />
          </View>
          <Text style={[styles.content, styles.statContent]}>
            {pokemon.bst}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <>
      <Divider width={2} />
      <View style={styles.iconContainer}>
        {icons.map((icon, index) => (
          <Icon key={index} icon={icon} />
        ))}
      </View>
      <Divider width={2} />
      {renderSection()}
    </>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    marginTop: "3%",
    marginBottom: "3%",
    width: "90%",
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-around",
  },

  tabButton: {
    width: 30,
    height: 30,
  },

  infoContainer: {
    marginTop: "5%",
    alignItems: "flex-start",
  },

  attributeContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: "3%",
    marginLeft: "10%",
    marginRight: "25%",
  },

  header: {
    color: "#ffffff",
    fontFamily: "Ubuntu_500Medium",
    fontSize: "22",
  },

  content: {
    color: "#ffffff",
    fontFamily: "Ubuntu_400Regular",
    fontSize: "20",
  },

  typing: {
    paddingHorizontal: 20,
    paddingVertical: 5,
    marginLeft: 10,
    borderRadius: 10,
  },

  statsContainer: {
    marginTop: "7%",
  },

  statWrapper: {
    flexDirection: "row",
    marginBottom: "7%",
    alignItems: "center",
  },

  statHeader: {
    color: "#ffffff",
    fontFamily: "Ubuntu_500Medium",
    fontSize: "22",
    position: "absolute",
    left: "7%",
  },

  statContent: {
    position: "absolute",
    right: "7%",
  },

  barOutside: {
    backgroundColor: "#ffffff",
    borderRadius: 70,
    marginLeft: "35%",
  },

  barInside: {
    paddingVertical: 10,
    borderRadius: 70,
  },
});

export const bioIcons = [
  {
    name: "About",
    active: "https://img.icons8.com/ios-filled/72/ffffff/info.png",
    inactive: "https://img.icons8.com/ios/72/ffffff/info.png",
  },
  {
    name: "Stats",
    active:
      "https://img.icons8.com/external-prettycons-solid-prettycons/344/ffffff/external-stats-business-and-finance-prettycons-solid-prettycons.png",
    inactive:
      "https://img.icons8.com/external-prettycons-lineal-prettycons/344/ffffff/external-stats-business-and-finance-prettycons-lineal-prettycons.png",
  },
];

export default BioTabs;
