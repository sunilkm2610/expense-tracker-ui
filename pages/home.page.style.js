import { StyleSheet } from "react-native";
import { COLORS } from "../theme/colors";

const HomePageStyles = StyleSheet.create({
    homeContainer:{
        height:'100%',
        paddingHorizontal:16,
    },
    topNavbar:{
        marginBottom:16,
        marginTop:16,
    
    },
    bottomNavbar:{
        position: 'absolute',
        bottom: 0,
        right:0,
        left:0,
    },
    expenseCard:{
        marginTop:16,
        marginBottom:62
    },
    middleSection:{
        flexDirection:'row',
        flex:1,
        justifyContent:'space-between',
        marginTop:16,
        
    },
    Text:{
        fontSize:20,
        color:COLORS.text.secondary
    }
})

export default HomePageStyles