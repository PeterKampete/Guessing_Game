import React from "react";
import { View, Text, StyleSheet } from "react-native";

import Colors from "../constants/colors";

const NumberContainer = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.number}>{props.children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: "white",
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "900",
  },
  number: {
    color: "white",
    fontSize: 30,
  },
});

export default NumberContainer;
