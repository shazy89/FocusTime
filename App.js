import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import React, { useState } from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import Focus from "./src/features/focus/Focus";

export default function App() {
  const [focusSubject, setFocusSubject] = useState("Hey");
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="red" />
        <View>
          <Text>{focusSubject}</Text>
          <Focus />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#9400d3",
    alignItems: "center",
    justifyContent: "flex-start"
  }
});

//// rnfes
