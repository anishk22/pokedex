import React, { useState } from "react";
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
          <Text style={styles.header}>Typing:</Text>

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
          <Text style={styles.header}>HP: </Text>
          <Text style={styles.content}>{pokemon.hp}</Text>
        </View>
        <View style={styles.statWrapper}>
          <Text style={styles.header}>Attack: </Text>
          <Text style={styles.content}>{pokemon.attack}</Text>
        </View>
        <View style={styles.statWrapper}>
          <Text style={styles.header}>Defense: </Text>
          <Text style={styles.content}>{pokemon.defense}</Text>
        </View>
        <View style={styles.statWrapper}>
          <Text style={styles.header}>Sp. Attack: </Text>
          <Text style={styles.content}>{pokemon.sp_attack}</Text>
        </View>
        <View style={styles.statWrapper}>
          <Text style={styles.header}>Sp. Defense: </Text>
          <Text style={styles.content}>{pokemon.sp_defense}</Text>
        </View>
        <View style={styles.statWrapper}>
          <Text style={styles.header}>Speed: </Text>
          <Text style={styles.content}>{pokemon.speed}</Text>
        </View>
        <View style={styles.statWrapper}>
          <Text style={styles.header}>Base Stat Total: </Text>
          <Text style={styles.content}>{pokemon.bst}</Text>
        </View>
      </View>
    );
  }
  

  return (
    <>
      <View style={styles.iconContainer}>
        {icons.map((icon, index) => (
          <Icon key={index} icon={icon} />
        ))}
      </View>
      {renderSection()}
    </>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    marginTop: "4%",
    marginBottom: "2%",
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
    alignItems: 'center',
    marginVertical: "3%",
    marginLeft: "10%",
    marginRight: "25%",
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
    marginLeft: 10,
    borderRadius: 10,
  },

  statsContainer: {
    marginTop: "5%",
    alignItems: "center",
  },

  statWrapper: {
    flexDirection: "row",
    marginBottom: "7%",
  }
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
