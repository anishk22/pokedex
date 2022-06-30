import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";

const BioTabs = ({ pokemon, icons }) => {
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
        <View style = {styles.attributeContainer}>
          <Text style={styles.header}>Class:  </Text>
          <Text style={styles.content}>{pokemon.class}</Text>
        </View>

        <View style = {styles.attributeContainer}>
          <Text style={styles.header}>Typing:  </Text>
          <View>
            <Text style={styles.content}>{pokemon.type1 + '  ' + pokemon.type2}</Text>
          </View>  
        </View>

        <View style = {styles.attributeContainer}>
          <Text style={styles.header}>Height:  </Text>
          <Text style={styles.content}>{pokemon.height}</Text>
        </View>

        <View style = {styles.attributeContainer}>
          <Text style={styles.header}>Weight:  </Text>
          <Text style={styles.content}>{pokemon.weight}</Text>
        </View>

        <View style = {styles.attributeContainer}>
          <Text style={styles.header}>Abilities:  </Text>
          <View>
            <Text style={[styles.content, { marginBottom: '5%' }]}>{pokemon.ability1}</Text>
            {pokemon.ability2 ? <Text style={[styles.content, { marginBottom: '5%' }]}>{pokemon.ability2}</Text> : null}  
            {pokemon.ability3 ? <Text style={[styles.content, { marginBottom: '5%' }]}>{pokemon.ability3}</Text> : null}  
          </View>  
        </View>
      </View>
    );
  };

  const renderStats = () => {
    return <Text style={{ color: "white" }}>lets GOOO</Text>;
  };

  return (
    <View style={styles.dividerContainer}>
      <View style={styles.iconContainer}>
        {icons.map((icon, index) => (
          <Icon key={index} icon={icon} />
        ))}
      </View>
      {renderSection()}
    </View>
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
    marginTop: "8%",
    alignItems: 'flex-start',
  },

  attributeContainer: {
    flexDirection: "row",
    marginVertical: '3%',
    marginLeft: '10%',
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
