import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import Colors from "../../constants/colors";

function Card({ children }) {
  return <View style={styles.inputContainer}>{children}</View>;
}
export default Card;

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 24,
    borderRadius: 8,
    padding: 16,
    marginTop: deviceWidth < 380 ? 18 : 36,
    backgroundColor: Colors.primary800,
    elevation: 4, // ! sets shadow on android devides
    shadowColor: "black", // shadow style objects are for shadow on ios devices
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
});
