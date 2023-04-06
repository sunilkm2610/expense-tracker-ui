import { StyleSheet } from "react-native";
import {COLORS} from '../../theme/colors'

const bottomNavbarStyles = StyleSheet.create({
    container:{
        display:'flex',
        flexDirection:'row',
        width:'100%',
        backgroundColor:'red',
        justifyContent:'space-around',
        alignItems:'center',
        borderTopRightRadius:30,
        borderTopLeftRadius:30,
        backgroundColor:COLORS.background.secondary
    },
    left:{
        marginLeft:10
    },
    middle:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:100,
        padding:16,
        backgroundColor:'rgba(0,0,0,0.1)',
        position:'relative',
        top:-30,
    },
    right:{
        marginRight:10
    }
})

export default bottomNavbarStyles;