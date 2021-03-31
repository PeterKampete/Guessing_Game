import React from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
  TouchableWithoutFeedback,
} from "react-native";
import Colors from "../constants/colors";

const MainButton = (props) => {
  // let ButtonComponent = TouchableOpacity;

  // if (Platform.OS === "android" && Platform.Version >= 21) { works only on android API version 21, thus does not work with my app;
  //   ButtonComponent = TouchableWithoutFeedback;
  // }

  return (
    //make sure to user ButtonComponent in place of Touchable opacity if you have android version 21> inorder to have the ripple effect from touchableWithoutFeedback;
    <View style={styles.buttonContainer}>
      <TouchableOpacity activeOpacity={0.6} onPress={props.onPress}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>{props.children}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
  },

  buttonText: {
    color: "white",
    fontFamily: "open-sans",
    fontSize: 18,
  },
  buttonContainer: {
    borderRadius: 25,
    overflow: "hidden",
  },
});

export default MainButton;
