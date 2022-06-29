import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import SafeAreaView from 'react-native-safe-area-view';
import Header from "../components/home/Header";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header/>

      <ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
  },
});

export default HomeScreen;
