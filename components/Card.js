import React from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";

const Card = (props) => {
  return (
    <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "grey",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 5 }, //worls only on IOS
    shadowRadius: 6,
    shadowOpacity: 0.26,
    backgroundColor: "white",
    elevation: 5, //same as shadow but works only on android, takes the default material design looks
    padding: 20,
    borderRadius: 10,
  },
});

export default Card;
