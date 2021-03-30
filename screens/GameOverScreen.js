import React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import BodyText from "../components/BodyText";
import MainButton from "../components/MainButton";
import TitleText from "../components/TitleText";
import Colors from "../constants/colors";

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <TitleText>Game Over!</TitleText>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/images/success.jpg")}
          style={styles.image}
          resizeMode="cover"
        />
      </View>

      <View style={styles.resultContainer}>
        <BodyText style={styles.resultText}>
          Your device needed {""}
          <Text style={styles.hightlight}>{props.roundsNumber}</Text> rounds to
          guess the number{""}
          <Text style={styles.hightlight}>{props.userNumber}</Text>
        </BodyText>
      </View>

      <MainButton onPress={props.onRestart}>NEW GAME</MainButton>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "green",
  },
  image: {
    width: "100%",
    height: "100%",
  },

  imageContainer: {
    width: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: "black",
    height: 300,
    overflow: "hidden",
    marginVertical: 30,
  },
  resultContainer: {
    marginHorizontal: 30,
    marginVertical: 15,
  },

  resultText: {
    textAlign: "center",
    fontSize: 20,
  },

  hightlight: {
    color: Colors.primary,
    fontFamily: "open-sans-bold",
  },
});

export default GameOverScreen;
