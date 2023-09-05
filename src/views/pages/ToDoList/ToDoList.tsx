import React from "react";
import {
  View,
} from "react-native";
import { styles } from "./ToDoList.styles";
import WebView from "react-native-webview";

export const ToDoList = () => {

  return (
    <View style={styles.container}>
      <WebView source={require('../../../../main.html')} />
    </View>
  );
};
