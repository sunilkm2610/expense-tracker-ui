import { View, Text } from "react-native";
import React from "react";
import expenseCardStyles from "./expenseCard.style";
// import LinearGradient from "react-native-linear-gradient";
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS } from "../../theme/colors";

export default function ExpenseCard() {
  return (
    <View style={expenseCardStyles.Container}>
      <View style={expenseCardStyles.LeftSection}>
        <LinearGradient colors={[COLORS.blue,COLORS.praple,COLORS.orange]} style={expenseCardStyles.Avater}>
            <Text style={expenseCardStyles.AvaterText}>SK</Text>
        </LinearGradient>
        <View>
          <Text style={expenseCardStyles.ItemTitleText}>Food</Text>
        </View>
      </View>
      <View style={expenseCardStyles.RightSection}>
        <Text style={expenseCardStyles.Amount}>-$250.00</Text>
        <Text style={expenseCardStyles.Day}>Today</Text>
      </View>
    </View>
  );
}
