import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import RoundedButton from "../../components/RoundedButton";
import { fontSizes, paddingSizes } from "../../utils/sizes";

const HistoryItem = ({ item, index }) => {
  return <Text>{item}</Text>;
};

const FocusHistory = ({ focusHistory, onClear }) => {
  const clearHistory = () => {
    onClear();
  };
  return (
    <View>
      <Text>Things we've focused on</Text>
      {focusHistory.length ? (
        <FlatList
          style={styles.flatlistStyle}
          contentContainerStyle={styles.contetntContainer}
          data={focusHistory}
          renderItem={HistoryItem}
        />
      ) : null}
    </View>
  );
};

export default FocusHistory;

const styles = StyleSheet.create({
  flatlistStyle: {
    flex: 1
  },
  contetntContainer: {
    flex: 1,
    alignItems: "center"
  }
});
