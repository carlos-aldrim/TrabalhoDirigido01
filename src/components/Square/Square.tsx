import React from "react";
import { View, Text } from "react-native";
import { styles } from "./Square.styles";

interface SquareProps {
  color: string;
  message: string;
}

export const Square: React.FC<SquareProps> = ({ color, message }) => {
  return (
    <View style={[styles.square, { backgroundColor: color }]}>
      <Text style={styles.message}>{message}</Text>
    </View>
  );
};
