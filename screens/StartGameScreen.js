import React from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";

import Card from "../components/Card";
import Colors from "../constants/colors";

const StartGameScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>New Game</Text>
      <Card style={styles.inputContainer}>
        <Text>Select a Number</Text>
        <TextInput />
        <View style={styles.butonContainer}>
          <View>
            <Button
              style={styles.button}
              title="Reset"
              color={Colors.accent}
              onPress={() => {}}
            />
          </View>
          <View>
            <Button
              style={styles.button}
              title="Confirm"
              color={Colors.primary}
              onPress={() => {}}
            />
          </View>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },

  title: {
    fontSize: 20,
    marginVertical: 10,
    backgroundColor: "blue",
  },

  inputContainer: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
  },
  butonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    backgroundColor: "blue",
  },

  button: {
    width: 100,
  },
});

export default StartGameScreen;
