import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-paper";
const Focus = () => {
  const [text, setText] = React.useState("");
  return (
    <View style={styles.container}>
      <Text style={styles.displayedText}>What would you like to focus on?</Text>
      <TextInput
        style={styles.textInput}
        label="Email"
        value={text}
        onChangeText={(text) => setText(text)}
      />
    </View>
  );
};

export default Focus;

const styles = StyleSheet.create({
  textInput: {
    width: 360,
    marginTop: 10
  },
  displayedText: {
    fontSize: 20,
    textAlign: "center"
  }
});
