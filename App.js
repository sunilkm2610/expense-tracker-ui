import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import BottomNavbar from './components/bottomNavbar/bottomNavbar';
import ExpenseCard from './components/expenseCard/expenseCard';
import TotalBalanceCard from './components/totalBalanceCard/totalBalanceCard';
import { COLORS } from './theme/colors';

export default function App() {
  return (
    <View style={styles.container}>
      <TotalBalanceCard/>
      <ExpenseCard/>
      <BottomNavbar/>
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
