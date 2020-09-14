import React from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";

import { backgroundColor, white } from "../config/colors";
import Search from "../components/Search"

const SearchScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>How Long To Beat</Text>
      <Search />
    </SafeAreaView>
  );
};

SearchScreen.navigationOptions = {
  headerShown: false
};


const styles = StyleSheet.create({
  title: {
    color: white,
    alignSelf: "center",
    fontWeight: "bold",
    fontSize: 30,
    marginVertical: 30,
  },
  container: {
    flex: 1,
    backgroundColor: backgroundColor,
  },
});

export default SearchScreen;
