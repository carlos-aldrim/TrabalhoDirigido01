import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./FormInput.styles";

export const FormInput = () => {
  const [name, setName] = useState("");
  const [showResponse, setShowResponse] = useState(false);

  const handleChangeName = (newText: string) => {
    setShowResponse(false);
    setName(newText);
  };

  const handleClickName = () => {
    setShowResponse(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>What is your name?</Text>
      <TextInput
        style={styles.input}
        onChangeText={handleChangeName}
        value={name}
        placeholder="Type here..."
      />
      <TouchableOpacity style={styles.button} onPress={handleClickName}>
        <Text style={styles.buttonContent}>Say Hello</Text>
      </TouchableOpacity>
      {name.length !== 0 && showResponse ? (
        <Text style={styles.response}>Hello, {name}!</Text>
      ) : (
        ""
      )}
    </View>
  );
};
