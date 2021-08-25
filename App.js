import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";

import Focus from "./src/features/focus/Focus";
import FocusHistory from "./src/features/focus/FocusHistory";
import { colors } from "./src/utils/colors";
import Timer from "./src/features/timer/Timer";
import { saveFocusHistory } from "./src/utils/storeData";
const STATUSES = {
  COMPLETE: 1,
  CANCELED: 2
};
export default function App() {
  const [focusSubject, setFocusSubject] = useState("");
  const [focusHistory, setFocusHistory] = useState([]);

  const addFocusHistorySubjectWithStat = (subject, status) => {
    setFocusHistory([
      ...focusHistory,
      { id: focusHistory.length, subject, status }
    ]);
  };
  const onClear = () => setFocusHistory([]);

  useEffect(() => {
    saveFocusHistory(focusHistory);
  }, [focusHistory]);
  //console.log(focusHistory);
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="red" />
        {!focusSubject ? (
          <>
            <Focus addSubject={setFocusSubject} />
            <FocusHistory focusHistory={focusHistory} onClear={onClear} />
          </>
        ) : (
          <>
            <Timer
              focusSubject={focusSubject}
              onTimerEnd={() => {
                addFocusHistorySubjectWithStat(focusSubject, STATUSES.COMPLETE);
                setFocusSubject("");
              }}
              clearSubject={() => {
                addFocusHistorySubjectWithStat(focusSubject, STATUSES.CANCELED);
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
