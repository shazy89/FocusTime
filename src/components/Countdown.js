import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { fontSizes, paddingSizes } from "../utils/sizes";
import { colors } from "../utils/colors";
const minutesToMillis = (min) => min * 1000 * 60;
//const formatTime
const Countdown = ({ minutes = 20, isPaused }) => {
  const [millis, setMillis] = useState(minutesToMillis(1));
  const minute = Math.floor(millis / 1000 / 60) % 60;
  const seconds = Math.floor(millis / 1000) % 60;

  return <Text style={styles.text}>{millis}</Text>;
};

export default Countdown;

const styles = StyleSheet.create({
  text: {
    fontSize: fontSizes.xxxxl,
    fontWeight: "bold",
    padding: paddingSizes.lg,
    backgroundColor: "rgba(166, 255, 0, 0.274)",
    color: colors.white
  }
});
