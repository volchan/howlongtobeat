import React from "react";
import { FlatList, Image, StyleSheet, View } from "react-native";
import { Text } from "react-native-elements";

import { white } from "../config/colors";

const ResultsCard = (props) => {
  const { game } = props;
  console.log(game);

  const _timeText = (game, field) => {
    const timeValue = game[field];
    return (
      <Text
        style={[
          styles.statsTime,
          timeValue === 0 ? styles.emptyStatsTime : null,
        ]}
      >
        {timeValue === 0 ? "--" : `${timeValue} Hours`}
      </Text>
    );
  };

  const _renderStats = (game) => {
    return (
      <FlatList
        data={game.timeLabels}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => {
          const [field, name] = item;
          return (
            <View style={styles.statsContainer}>
              <Text style={styles.statsTitle}>{name}</Text>
              {_timeText(game, field)}
            </View>
          );
        }}
      />
    );
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: game.imageUrl }} style={styles.image} />
      <View style={styles.infos}>
        <Text style={styles.title}>{game.name}</Text>
        {_renderStats(game)}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    margin: 20,
  },
  image: {
    flex: 2,
    height: 100,
    borderRadius: 5,
    resizeMode: "contain",
  },
  infos: {
    flex: 8,
    paddingHorizontal: 10,
  },
  title: {
    color: white,
    fontWeight: "bold",
    fontSize: 16,
  },
  text: {
    color: white,
  },
  statsTitle: {
    color: white,
    flex: 4,
  },
  statsTime: {
    color: white,
    flex: 6,
    textAlign: "center",
    backgroundColor: "#287FC2",
    borderRadius: 5,
  },
  emptyStatsTime: {
    backgroundColor: "#A2A2A2",
  },
  statsContainer: {
    flexDirection: "row",
    marginTop: 2,
  },
});

export default ResultsCard;
