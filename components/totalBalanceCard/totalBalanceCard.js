import { View, Text } from "react-native";
import React from "react";
import totalBalanceCardStyles from "./totalBalanceCard.style";
import UpArrow from '../../assets/up-arrow.svg';
import DownArrow from '../../assets/down-arrow.svg';
import Background from "../background/background";

export default function TotalBalanceCard() {
  return (
    <Background
      style={totalBalanceCardStyles.Container}
    >
      <Text style={totalBalanceCardStyles.TotalBalance}>Total Balance</Text>
      <Text style={totalBalanceCardStyles.TotalAmount}>$46,780</Text>
      <View style={totalBalanceCardStyles.BottomSection}>
        <View style={totalBalanceCardStyles.LeftSection}>
          <View style={totalBalanceCardStyles.Avater}>
            <UpArrow width={25} height={25}/>
          </View>
          <View>
            <Text style={totalBalanceCardStyles.AmountText}>Income</Text>
            <Text style={totalBalanceCardStyles.Amount}>$80,700</Text>
          </View>
        </View>
        <View style={totalBalanceCardStyles.RightSection}>
          <View style={totalBalanceCardStyles.Avater}>
            <DownArrow width={25} height={25}/>
          </View>
          <View>
            <Text style={totalBalanceCardStyles.AmountText}>Expenses</Text>
            <Text style={totalBalanceCardStyles.Amount}>$7,000</Text>
          </View>
        </View>
      </View>
    </Background>
  );
}
