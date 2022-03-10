import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/theme";

const styles = StyleSheet.create({
    messages: {
        height: 45,
        alignItems: 'center',
        justifyContent: 'space-between',
        elevation:6,
        borderRadius:4,
        shadowColor:COLORS.black,
        shadowOffset:{
            width:0,
            height:3
        },
        shadowOpacity:0.15,
        shadowRadius:5,
        margin:10,
        padding:10,
        position:'absolute',
        top:25,
        left:0,
        right:0,
        flexDirection: 'row',

    },
    Text:{
        fontSize:14,
        fontWeight:"500",
        color:COLORS.white,
        width:'90%',
        // backgroundColor:"#eee"
    }
})
export default styles
