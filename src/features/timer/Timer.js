import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { fontSizes } from "../../utils/sizes";
import { colors, marginSizes } from "../../utils/colors";
const Timer = ({ focusSubject }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Focusing on:</Text>
      <Text style={styles.task}>{focusSubject}</Text>
    </View>
  );
};

export default Timer;

const styles = StyleSheet.create({
  container: {
    flex: 0.5
  },
  task: {
    fontSize: fontSizes.lg,
    color: colors.white,
    fontWeight: "bold",
    textAlign: "center"
  },
  title: {
    fontSize: fontSizes.lg,
    color: colors.white,
    fontWeight: "400",
    textAlign: "center"
  }
});
