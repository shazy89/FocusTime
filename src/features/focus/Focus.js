import React, { useState } from "react";
import { StyleSheet, Text, View, Platform } from "react-native";
import { TextInput } from "react-native-paper";
import RoundedButton from "../../components/RoundedButton";
const Focus = ({ addSubject }) => {
  const [text, setText] = useState("");
  const [tempIte, setTempItem] = useState("");
  return (
    <View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>What would you like to focus on?</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            value={text}
            onChangeText={(text) => setText(text)}
            // return will trigger the onSubmitEditing
            onSubmitEditing={({ nativeEvent }) => {
              setTempItem(nativeEvent.text);
            }}
          />
          <RoundedButton
            title="+"
            size={50}
            onPress={() => {
              addSubject(tempIte);
            }}
          />
        </View>
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
    flex: 1,

    marginRight: 10
  },
  titleContainer: {
    padding: 2,
    flex: Platform.OS === "android" ? 0.5 : 0.5,
    justifyContent: "center"
  },
  inputContainer: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center"
  },
  title: {
    fontSize: Platform.OS === "android" ? 20 : 20,
    textAlign: "center",
    color: "#fff",
    fontWeight: "500"
  }
});
