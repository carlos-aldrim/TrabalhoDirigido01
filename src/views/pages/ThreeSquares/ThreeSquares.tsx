import React from "react";
import { View } from "react-native";
import { styles } from "./ThreeSquares.styles";
import { Square } from "../../../components";

export const ThreeSquares = () => {
  return (
    <View style={styles.container}>
      <Square color="red" message="Quadrado 1" />
      <Square color="green" message="Quadrado 2" />
      <Square color="blue" message="Quadrado 3" />
    </View>
  );
};
