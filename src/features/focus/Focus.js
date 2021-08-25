import React, { useState } from "react";
import { StyleSheet, Text, View, Platform } from "react-native";
import { TextInput } from "react-native-paper";
import RoundedButton from "../../components/RoundedButton";
import { fontSizes, paddingSizes, marginSizes } from "../../utils/sizes";
import { colors } from "../../utils/colors";
const Focus = ({ addSubject }) => {
  const [text, setText] = useState("");
  const [tempIte, setTempItem] = useState("");

  return (
    <>
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
    </>
  );
};

export default Focus;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  textInput: {
    flex: 1,

    marginRight: marginSizes.sm
  },
  titleContainer: {
    padding: paddingSizes.md,
    flex: Platform.OS === "android" ? 0.5 : 0.5,
    justifyContent: "center"
  },
  inputContainer: {
    marginTop: marginSizes.md,
    flexDirection: "row",
    alignItems: "center"
  },
  title: {
    fontSize: Platform.OS === "android" ? fontSizes.lg : fontSizes.lg,
    textAlign: "center",
    color: colors.white,
    fontWeight: "500"
  }
});
