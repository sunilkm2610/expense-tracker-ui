import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ExpenseCard from './components/expenseCard/expenseCard';
import { COLORS } from './theme/colors';

export default function App() {
  return (
    <View style={styles.container}>
      <ExpenseCard/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
