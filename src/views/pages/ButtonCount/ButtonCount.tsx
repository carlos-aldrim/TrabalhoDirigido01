import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./ButtonCount.styles";

export const ButtonCount = () => {
  const [count, setCount] = React.useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        You've pressed the button: {count} time(s)
      </Text>
      <TouchableOpacity style={styles.button} onPress={incrementCount}>
        <Text style={styles.buttonContent}>Press me</Text>
      </TouchableOpacity>
    </View>
  );
};
