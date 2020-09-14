import React from "react";
import { StatusBar } from "react-native";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import { backgroundColor } from "./src/config/colors";
import { setNavigator } from "./src/navigationRef";

import SearchScreen from "./src/screens/SearchScreen";

import { Provider as SearchProvider } from "./src/context/SearchContext";

const searchFlow = createStackNavigator({
  Search: SearchScreen,
  // Detail: DetailScreen,
});

const switchNavigator = createSwitchNavigator({
  SearchFlow: searchFlow,
});

const App = createAppContainer(switchNavigator);
export default () => {
  return (
    <SearchProvider>
      <StatusBar barStyle="light" backgroundColor={backgroundColor} />
      <App ref={(navigator) => setNavigator(navigator)} />
    </SearchProvider>
  );
};
