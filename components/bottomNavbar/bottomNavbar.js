import { View, Text } from "react-native";
import React from "react";
import bottomNavbarStyles from "./bottomNavbar.style";
import DashboardIcon from "../../assets/dashboard.svg";
import AnalysticIcon from "../../assets/analytics.svg";
import AddIcon from "../../assets/add-icon.svg";
import Background from "../background/background";

export default function BottomNavbar() {
  return (
    <View style={bottomNavbarStyles.container}>
      <View style={bottomNavbarStyles.left}>
        <DashboardIcon height={25} width={25} />
      </View>
        <Background style={bottomNavbarStyles.middle}>
          <AddIcon height={35} width={35} />
        </Background>
      <View style={bottomNavbarStyles.right}>
        <AnalysticIcon height={25} width={25} />
      </View>
    </View>
  );
}
