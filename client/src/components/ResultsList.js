import React, { useContext } from "react";
import { StyleSheet, FlatList } from "react-native";

import { Context as SearchContext } from "../context/SearchContext";
import ResultCard from "./ResultCard";

const ResultsList = () => {
  const { state } = useContext(SearchContext);

  return (
    <FlatList data={state.games} keyExtractor={(item) => item.id } renderItem={({item}) => <ResultCard game={item} />} />
  );
}

const styles = StyleSheet.create({});

export default ResultsList;
