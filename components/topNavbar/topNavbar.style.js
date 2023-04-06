import { StyleSheet } from "react-native";
import {COLORS} from '../../theme/colors'

const topNavbarStyles = StyleSheet.create({
    container:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'flex-start',
        width:'100%'
    },
    left:{
        display:'flex',
        flexDirection:'row',
    },
    welcomeText:{
        fontSize:16,
        color:COLORS.text.secondary,
        marginLeft:8,
        marginBottom:4
    },
    userNameText:{
        fontSize:22,
        fontWeight:600,
        // opacity:0.7,
        color:COLORS.text.primary,
        marginLeft:8
    }
    
})


export default topNavbarStyles