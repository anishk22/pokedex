import React, { useState } from "react";
import { Divider } from "react-native-elements";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";

const BioTabs = ({ icons }) => {
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
    return <Text style={{ color: "white" }}>yo</Text>;
  };

  const renderStats = () => {
    return <Text style={{ color: "white" }}>lets GOOO</Text>;
  };

  return (
    <View style={styles.dividerContainer}>
      <View style={styles.container}>
        {icons.map((icon, index) => (
          <Icon key={index} icon={icon} />
        ))}
      </View>
      {renderSection()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: "4%",
    marginBottom: "4%",
    width: "90%",
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-around",
  },

  tabButton: {
    width: 30,
    height: 30,
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
