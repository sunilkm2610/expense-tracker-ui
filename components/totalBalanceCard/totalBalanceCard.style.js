import { StyleSheet } from "react-native";
import {COLORS} from '../../theme/colors'

const totalBalanceCardStyles = StyleSheet.create({
    Container:{
        display:'flex',
        borderRadius:24,
        width:'100%',
        alignItems:'center',
        padding:24,
    },
    TotalBalance:{
        fontSize:24,
        color:COLORS.background.secondary,
    },
    BottomSection:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        width:'100%',
        // backgroundColor:'red',
        marginTop:32
    },
    LeftSection:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center'
    },
    RightSection:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center'
    },
    Avater:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:100,
        padding:16,
        backgroundColor:'rgba(0,0,0,0.1)',
        marginRight:10
    },
    AmountText:{
        fontSize:18,
        color:COLORS.background.secondary
    },
    TotalAmount:{
        fontSize:44,
        color:COLORS.background.secondary,
        fontWeight:600
    },
    Amount:{
        fontSize:24,
        color:COLORS.background.secondary,
        fontWeight:600
    }
})

export default totalBalanceCardStyles