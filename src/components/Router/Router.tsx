import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Button, View } from "react-native";
import { ButtonCount, ThreeSquares, FormInput, Calculator, ToDoList } from "../../views";

const Stack = createStackNavigator();

export const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="React, HTML e CSS"
          component={ToDoList}
          options={({ navigation }) => ({
            headerRight: () => (
              <View style={{ marginRight: 18 }}>
                <Button
                  title="Próximo"
                  onPress={() => navigation.navigate("State & Props")}
                />
              </View>
            ),
          })}
        />
        <Stack.Screen
          name="State & Props"
          component={ButtonCount}
          options={({ navigation }) => ({
            headerRight: () => (
              <View style={{ marginRight: 18 }}>
                <Button
                  title="Próximo"
                  onPress={() => navigation.navigate("Styling")}
                />
              </View>
            ),
          })}
        />
        <Stack.Screen
          name="Styling"
          component={ThreeSquares}
          options={({ navigation }) => ({
            headerRight: () => (
              <View style={{ marginRight: 18 }}>
                <Button
                  title="Próximo"
                  onPress={() => navigation.navigate("Building a Form")}
                />
              </View>
            ),
          })}
        />
        <Stack.Screen
          name="Building a Form"
          component={FormInput}
          options={({ navigation }) => ({
            headerRight: () => (
              <View style={{ marginRight: 18 }}>
                <Button
                  title="Próximo"
                  onPress={() => navigation.navigate("Calculator")}
                />
              </View>
            ),
          })}
        />
        <Stack.Screen name="Calculator" component={Calculator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
