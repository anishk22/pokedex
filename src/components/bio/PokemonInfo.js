import React, { useState } from "react";
import { Divider } from "react-native-elements";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";


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
      return (
        <Text style={{color: 'white'}}>yo</Text>
      );
  };

  const renderStats = () => {
      return (
        <Text style={{color: 'white'}}>lets GOOO</Text>
      );
  };

  return (
    <View style={styles.dividerContainer}>
      <Divider width={0.5} color={'white'} ></Divider>
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
    dividerContainer: {
        marginTop: 50,
    },
    
  container: {
    marginTop: 15,
    marginBottom: 15,
    width: 302,
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
    active: "https://img.icons8.com/fluency-systems-filled/344/ffffff/wardrobe.png",
    inactive: "https://img.icons8.com/fluency-systems-regular/344/ffffff/wardrobe.png",
  },
  {
    name: "Stats",
    active: "https://img.icons8.com/ios-filled/72/ffffff/squared-menu.png",
    inactive: "https://img.icons8.com/ios/72/ffffff/squared-menu.png",
  },
];

export default BioTabs;
