import { View, Text, TouchableOpacity, LayoutAnimation } from "react-native";
import React, { useState } from "react";
import SwitchButtonStyles from "./switchButton.style";
import Background from "../background/background";
import { COLORS } from "../../theme/colors";

export default function SwitchButton() {
  const [active, setActive] = useState(false);
  const handleIncomePress = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setActive(true);
  };
  const handleExpensePress = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setActive(false);
  };
  return (
    <View style={SwitchButtonStyles.container}>
      {active ? (
        <>
          <Background style={SwitchButtonStyles.incomeButton}>
            <TouchableOpacity onPress={handleIncomePress} activeOpacity={1}>
              <Text
                style={
                  active
                    ? {
                        ...SwitchButtonStyles.buttonText,
                        color: COLORS.background.secondary,
                      }
                    : SwitchButtonStyles.buttonText
                }
              >
                Income
              </Text>
            </TouchableOpacity>
          </Background>
          <TouchableOpacity
            onPress={handleExpensePress}
            style={SwitchButtonStyles.expenseButton}
            activeOpacity={1}
          >
            <Text style={SwitchButtonStyles.buttonText}>Expense</Text>
          </TouchableOpacity>
        </>
      ) : (
        <>
          <TouchableOpacity
            style={SwitchButtonStyles.incomeButton}
            onPress={handleIncomePress}
            activeOpacity={1}
          >
            <Text style={SwitchButtonStyles.buttonText}>Income</Text>
          </TouchableOpacity>
          <Background style={SwitchButtonStyles.expenseButton}>
            <TouchableOpacity onPress={handleExpensePress} activeOpacity={1}>
              <Text style={
                  !active
                    ? {
                        ...SwitchButtonStyles.buttonText,
                        color: COLORS.background.secondary,
                      }
                    : SwitchButtonStyles.buttonText
                }>Expense</Text>
            </TouchableOpacity>
          </Background>
        </>
      )}
    </View>
  );
}
