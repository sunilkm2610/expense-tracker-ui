import { View, Text, ScrollView, FlatList } from "react-native";
import React, { useState } from "react";
import TopNavbar from "../components/topNavbar/topNavbar";
import TotalBalanceCard from "../components/totalBalanceCard/totalBalanceCard";
import ExpenseCard from "../components/expenseCard/expenseCard";
import BottomNavbar from "../components/bottomNavbar/bottomNavbar";
import HomePageStyles from "./home.page.style";

export default function HomePage() {
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <View style={HomePageStyles.homeContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={HomePageStyles.topNavbar}>
          <TopNavbar />
        </View>
        <TotalBalanceCard />
        <View style={HomePageStyles.middleSection}>
          <Text style={HomePageStyles.Text}>Recent Transactions</Text>
          <Text style={HomePageStyles.Text}>View all</Text>
        </View>
        <View>
          <FlatList
            style={HomePageStyles.expenseCard}
            data={items}
            renderItem={ExpenseCard}
            keyExtractor={(items) => items}
          />
        </View>
      </ScrollView>
      <View style={HomePageStyles.bottomNavbar}>
        <BottomNavbar />
      </View>
    </View>
  );
}

