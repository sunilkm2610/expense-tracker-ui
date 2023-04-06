import { View, Text } from 'react-native'
import React from 'react'
import topNavbarStyles from './topNavbar.style'
import AvatarIcon from "../../assets/avatar-boy.svg"

export default function TopNavbar() {
  return (
    <View style={topNavbarStyles.container}>
      <View style={topNavbarStyles.left}>
        <AvatarIcon height={60} width={60}/>
        <View>
            <Text style={topNavbarStyles.welcomeText}>Welcome!</Text>
            <Text style={topNavbarStyles.userNameText}>Sunil Kumar</Text>
        </View>
      </View>
    </View>
  )
}