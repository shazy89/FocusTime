import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import "react-native-get-random-values";
import { v4 as uuid } from "uuid";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Focus from "./src/features/focus/Focus";
import FocusHistory from "./src/features/focus/FocusHistory";
import { colors } from "./src/utils/colors";
import Timer from "./src/features/timer/Timer";

const STATUSES = {
  COMPLETE: 1,
  CANCELED: 2
};
export default function App() {
  const [focusSubject, setFocusSubject] = useState("");
  const [focusHistory, setFocusHistory] = useState([]);

  const addFocusHistorySubjectWithStat = (subject, status) => {
    setFocusHistory([...focusHistory, { id: String(uuid()), subject, status }]);
  };
  const onClear = () => setFocusHistory([]);

  const saveFocusHistory = async () => {
    try {
      const jsonValue = JSON.stringify(focusHistory);

      await AsyncStorage.setItem("focusHistory", jsonValue);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    saveFocusHistory();
  }, [focusHistory]);
  console.log(focusHistory);
  const loadFocusHistory = async () => {
    try {
      const history = await AsyncStorage.getItem("focusHistory");
      debugger;
      if (history && JSON.parse(history).length) {
        setFocusHistory(JSON.parse(history));
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    loadFocusHistory();
  }, []);
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
