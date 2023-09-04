import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./Calculator.styles";

export const Calculator = () => {
  const [display, setDisplay] = useState("");
  const [result, setResult] = useState("");

  const handlePress = (value: string) => {
    const lastChar = display.slice(-1);

    if (value.match(/[+\-*/]/) && lastChar.match(/[+\-*/]/)) {
      return;
    } else if (value === "0" && display === "0") {
      return;
    } else if (value === "." && (lastChar.match(/[+\-*/]/) || !/\d/.test(lastChar))) {
      return;
    } else if (value === "." && lastChar === ".") {
      return;
    } else if (value === "." && (lastChar.match(/[+\-*/]/) || !display)) {
      return;
    } else if (value.match(/[+\-*/]/) && !display) {
      return;
    } else if (value === "=") {
      calculateResult();
    } else if (value === "AC") {
      handleClear();
    } else {
      setDisplay(display + value);
    }
  };

  const calculateResult = () => {
    try {
      const calculatedResult = eval(display);
      setResult(calculatedResult.toString());
    } catch (error) {
      setResult("Erro");
    }
  };

  const handleClear = () => {
    setDisplay(display.slice(0, -1));
    setResult("");
  };

  return (
    <View style={styles.container}>
      <View style={styles.display}>
        <Text style={styles.text}>{display}</Text>
        <Text style={styles.result}>{result}</Text>
      </View>
      <View style={styles.buttons}>
        <View style={styles.numbers}>
          <TouchableOpacity onPress={() => handlePress("AC")}>
            <Text style={styles.clear}>AC</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handlePress("7")}>
            <Text style={styles.number}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handlePress("8")}>
            <Text style={styles.number}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handlePress("9")}>
            <Text style={styles.number}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handlePress("4")}>
            <Text style={styles.number}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handlePress("5")}>
            <Text style={styles.number}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handlePress("6")}>
            <Text style={styles.number}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handlePress("3")}>
            <Text style={styles.number}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handlePress("2")}>
            <Text style={styles.number}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handlePress("1")}>
            <Text style={styles.number}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handlePress("0")}>
            <Text style={styles.zero}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handlePress(".")}>
            <Text style={styles.number}>.</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={() => handlePress("/")}>
            <Text style={styles.operator}>/</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handlePress("*")}>
            <Text style={styles.operator}>*</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handlePress("-")}>
            <Text style={styles.operator}>-</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handlePress("+")}>
            <Text style={styles.operator}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handlePress("=")}>
            <Text style={styles.operator}>=</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
