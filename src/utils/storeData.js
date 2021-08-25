import AsyncStorage from "@react-native-async-storage/async-storage";

export const saveFocusHistory = async (focusHistory) => {
  try {
    await AsyncStorage.setItem("focusHistory", JSON.stringify(focusHistory));
  } catch (e) {
    console.log(e);
  }
};
