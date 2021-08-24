import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { fontSizes } from "../../utils/sizes";
import { colors, marginSizes } from "../../utils/colors";
import Countdown from "../../components/Countdown";
import RoundedButton from "../../components/RoundedButton";
const Timer = ({ focusSubject }) => {
  const [isStarted, setIsStarted] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        <Countdown isPaused={!isStarted} />
      </View>
      <View style={styles.theRest}>
        <Text style={styles.title}>Focusing on:</Text>
        <Text style={styles.task}>{focusSubject}</Text>
      </View>
      <View style={styles.buttonWraper}>
        {!isStarted ? (
          <RoundedButton
            title="start"
            size={70}
            onPress={() => setIsStarted(true)}
          />
        ) : (
          <RoundedButton
            title="pause"
            size={70}
            onPress={() => setIsStarted(false)}
          />
        )}
      </View>
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
  },
  countdown: {
    flex: 1
  },
  theRest: {
    flex: 1
  },
  buttonWraper: {
    flex: 0.3,
    padding: 15,
    justifyContent: "center",
    alignItems: "center"
  }
});
