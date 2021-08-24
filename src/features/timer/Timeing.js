import React from "react";
import { StyleSheet, Text, View } from "react-native";
import RoundedButton from "../../components/RoundedButton";
const Timeing = ({ changeTime }) => {
  return (
    <>
      <RoundedButton size={60} title="+ 10" onPress={() => changeTime(10)} />
      <RoundedButton size={60} title="+ 15" onPress={() => changeTime(15)} />
      <RoundedButton size={60} title="+ 20" onPress={() => changeTime(20)} />
    </>
  );
};

export default Timeing;

const styles = StyleSheet.create({});
