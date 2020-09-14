import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Input } from "react-native-elements";

import { white } from "../config/colors";

export default function App() {
  const [term, setTerm] = useState("");

  return (
    <Input
      value={term}
      onChangeText={setTerm}
      autoCapitalize="none"
      autoCorrect={false}
      placeholder="Search a game"
      containerStyle={styles.container}
      inputContainerStyle={styles.inputContainer}
      inputStyle={styles.input}
      rightIcon={{
        type: "font-awesome-5",
        name: "search",
        solid: true,
        color: white,
      }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  inputContainer: {
    paddingHorizontal: 10,
    borderRadius: 5,
    borderColor: white,
    borderWidth: 1,
  },
  input: {
    color: white,
    marginLeft: 5,
  },
});
