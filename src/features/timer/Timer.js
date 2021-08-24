import React, { useState } from "react";
import { useKeepAwake } from "expo-keep-awake";
import { StyleSheet, Text, View, Vibration, Platform } from "react-native";
import { ProgressBar } from "react-native-paper";
import { fontSizes } from "../../utils/sizes";
import { colors } from "../../utils/colors";
import Countdown from "../../components/Countdown";
import RoundedButton from "../../components/RoundedButton";
import Timeing from "./Timeing";

const DEFAULT_TIME = 0.1;
const Timer = ({ focusSubject }) => {
  // USE KEEP AWAKE WILL MAKE SURE THat the scren won't go off
  useKeepAwake();
  const [minutes, setMinutes] = useState(DEFAULT_TIME);
  const [isStarted, setIsStarted] = useState(false);
  const [progress, setProgress] = useState(1);
  const vibrate = () => {
    if (Platform.OS === "ios") {
      const interval = setInterval(() => Vibration.vibrate(), 1000);
      setTimeout(() => clearInterval(interval), 1000);
    } else {
      Vibration.vibrate("10s");
    }
  };
  const onProgress = (progress) => setProgress(progress);
  const changeTime = (min) => {
    setMinutes(min);
    setProgress(1);
    setIsStarted(false);
  };
  const onEnd = () => {
    vibrate();
    setMinutes(DEFAULT_TIME);
    setProgress(1);
    setIsStarted(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        <Countdown
          isPaused={!isStarted}
          onEnd={onEnd}
          onProgress={onProgress}
          minutes={minutes}
        />
      </View>
      <View style={styles.theRest}>
        <Text style={styles.title}>Focusing on:</Text>
        <Text style={styles.task}>{focusSubject}</Text>
      </View>
      <ProgressBar
        progress={progress}
        style={styles.progressBar}
        color={colors.white}
      />
      <View style={styles.timeingWrapper}>
        <Timeing changeTime={changeTime} />
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
    flex: 0.6
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
    alignItems: "center",
    marginTop: 20
  },
  progressBar: {
    height: 10,
    marginBottom: fontSizes.sm
  },
  timeingWrapper: {
    justifyContent: "space-between",
    flexDirection: "row"
  }
});
