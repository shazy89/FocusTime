import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, Text, View } from "react-native";
import { fontSizes, paddingSizes } from "../utils/sizes";
import { colors } from "../utils/colors";
const minutesToMillis = (min) => min * 1000 * 60;
const formatTime = (time) => (time < 10 ? `0${time}` : time);
//const formatIncome = (amount) => (amount > 0 ? `$ ${amount}.00` : null);
//const formatTime
const Countdown = ({ minutes, isPaused, onProgress, onEnd }) => {
  const interval = useRef(null);

  const countDown = () => {
    setMillis((time) => {
      if (time === 0) {
        // make sure every time counting ends you are clearing the intervals
        clearInterval(interval.current);
        onEnd();
        return time;
      }
      const timeLeft = time - 1000;
      onProgress(timeLeft / minutesToMillis(minutes));
      return timeLeft;
    });
  };

  // we are forcing the use effect to detect the changes and make the update
  useEffect(() => {
    setMillis(minutesToMillis(minutes));
  }, [minutes]);

  useEffect(() => {
    if (isPaused) {
      if (interval.current) clearInterval(interval.current);
      return;
    }
    interval.current = setInterval(countDown, 1000);
    return () => clearInterval(interval.current);
  }, [isPaused]);

  const [millis, setMillis] = useState(minutesToMillis(minutes));
  const minute = Math.floor(millis / 1000 / 60) % 60;
  const seconds = Math.floor(millis / 1000) % 60;

  return (
    <>
      <Text style={styles.text}>
        {formatTime(minute)}: {formatTime(seconds)}
      </Text>
    </>
  );
};

export default Countdown;

const styles = StyleSheet.create({
  text: {
    fontSize: fontSizes.xxxxl,
    fontWeight: "bold",
    padding: paddingSizes.lg,
    backgroundColor: "rgba(0, 140, 255, 0.274)",
    color: colors.white
  }
});
