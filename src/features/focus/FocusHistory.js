import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

import RoundedButton from "../../components/RoundedButton";
import { fontSizes, paddingSizes } from "../../utils/sizes";
import { colors } from "../../utils/colors";

const FocusHistory = ({ focusHistory, onClear }) => {
  const clearHistory = () => {
    onClear();
  };
  const HistoryItem = ({ item: { subject, status }, index }) => {
    return <Text style={styles.historyItem(status)}>{subject}</Text>;
  };
  return (
    <>
      {focusHistory.length ? (
        <>
          <Text style={styles.title}>Things we've focused on</Text>

          <FlatList
            style={styles.flatlistStyle}
            contentContainerStyle={styles.contetntContainer}
            data={focusHistory}
            renderItem={HistoryItem}
            keyExtractor={(item) => item.id}
          />
          <View style={styles.clearContainer}>
            <RoundedButton size={50} title="clear" onPress={clearHistory} />
          </View>
        </>
      ) : null}
    </>
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
  },
  // the function must return the object
  historyItem: (status) => ({
    color: status > 1 ? "red" : "green",
    fontSize: fontSizes.md
  }),
  title: {
    color: colors.white,
    fontSize: fontSizes.lg
  }
});
