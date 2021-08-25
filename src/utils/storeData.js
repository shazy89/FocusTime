import AsyncStorage from "@react-native-async-storage/async-storage";

export const saveFocusHistory = async (focusHistory) => {
  try {
    await AsyncStorage.setItem("focusHistory", JSON.stringify(focusHistory));
  } catch (e) {
    console.log(e);
  }
};

export const loadFocusHistory = async (setFocusHistory) => {
  try {
    const history = await AsyncStorage.getItem("focusHistory");
    if (history && JSON.parse(history).length) {
      setFocusHistory(JSON.parse(history));
    }
  } catch (e) {
    console.lot(e);
  }
};
