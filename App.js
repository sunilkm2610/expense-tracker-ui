import { StatusBar } from "expo-status-bar";
import { StyleSheet, View,  } from "react-native";
import SwitchButton from "./components/switchButton/switchButton";
import HomePage from "./pages/home.page";
import { COLORS } from "./theme/colors";

export default function App() {
  return (
      <View style={styles.container}>
        {/* <HomePage /> */}
        <SwitchButton/>
        <StatusBar style="auto"/>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    backgroundColor: COLORS.background.primary,
    width:'100%',
    height:'100%'
  },
});
