import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import HomePage from "./pages/home.page";
import { COLORS } from "./theme/colors";

export default function App() {
  return (
      <View style={styles.container}>
        <HomePage />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    backgroundColor: COLORS.background.primary,
    width:'100%',
    height:'100%'
  },
});
