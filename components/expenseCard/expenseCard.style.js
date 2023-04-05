import { StyleSheet } from "react-native";
import {COLORS} from '../../theme/colors'

const expenseCardStyles = StyleSheet.create({
    Container:{
        display:'flex',
        flexDirection:'row',
        borderRadius:24,
        width:'100%',
        alignItems:'center',
        justifyContent:'space-between',
        padding:24,
        backgroundColor:COLORS.background.secondary
        // backgroundColor:'red'
    },
    LeftSection:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
    },
    RightSection:{
        display:'flex',
        alignItems:'flex-end',
    },
    Avater:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:50,
        padding:16,
    },
    AvaterText:{
        backgroundColor: 'transparent',
        fontSize:30,
        color:COLORS.background.secondary,
        fontWeight:700
    },
    ItemTitleText:{
        fontSize:24,
        fontWeight:600,
        marginLeft:16
    },
    Amount:{
        fontSize:20,
        color:COLORS.text.primary,
        fontWeight:500,
        marginBottom:8
    },
    Day:{
        fontSize:16,
        color:COLORS.text.secondary,
    }
})

export default expenseCardStyles