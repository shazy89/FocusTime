import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import React, { useState } from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";

import Focus from "./src/features/focus/Focus";
import { colors } from "./src/utils/colors";

import Timer from "./src/features/timer/Timer";
export default function App() {
  const [focusSubject, setFocusSubject] = useState("Playing");

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="red" />
        {!focusSubject ? (
          <Focus addSubject={setFocusSubject} />
        ) : (
          <>
            <Timer
              focusSubject={focusSubject}
              onTimerEnd={() => {
                setFocusSubject("");
              }}
              clearSubject={() => {
                setFocusSubject("");
              }}
            />
          </>
        )}
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkPurple,
    alignItems: "center",
    justifyContent: "flex-start"
  }
});

//// rnfes
