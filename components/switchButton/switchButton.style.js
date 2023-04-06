import { StyleSheet } from "react-native";
import { COLORS } from "../../theme/colors";

const SwitchButtonStyles = StyleSheet.create({
    container:{
        backgroundColor:COLORS.background.secondary,
        flexDirection:'row',
        justifyContent:'space-between',
        borderRadius:20,
        padding:8
    },
    incomeButton:{
        height:50,
        alignItems:'center',
        justifyContent:'center',
        flex:1,
        borderRadius:20,
    },
    expenseButton:{
        height:50,
        alignItems:'center',
        justifyContent:'center',
        flex:1,
        borderRadius:20
    },
    buttonText:{
        fontSize:20,
        color:COLORS.text.primary
    }
})

export default SwitchButtonStyles