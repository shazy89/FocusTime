import React, { useState } from "react";
import { StyleSheet, Text, View, Platform } from "react-native";
import { TextInput } from "react-native-paper";
import RoundedButton from "../../components/RoundedButton";
const Focus = () => {
  const [text, setText] = React.useState("");

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>What would you like to focus on?</Text>
        <TextInput
          style={styles.textInput}
          value={text}
          onChangeText={(text) => setText(text)}
        />
        <RoundedButton title="+" />
      </View>
    </View>
  );
};

export default Focus;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  textInput: {
    width: 360,
    marginTop: 10
  },
  titleContainer: {
    padding: 2,
    flex: Platform.OS === "android" ? 0.4 : 0.6,
    justifyContent: "center"
  },
  title: {
    fontSize: Platform.OS === "android" ? 20 : 20,
    textAlign: "center",
    color: "#fff",
    fontWeight: "500"
  }
});
