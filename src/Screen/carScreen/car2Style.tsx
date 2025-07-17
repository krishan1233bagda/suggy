import React  from "react";
import { StyleSheet } from "react-native";
import {widthPercentageToDP as wp ,heightPercentageToDP as hp} from "react-native-responsive-screen";


const car2Style=StyleSheet.create({
    arrow:{width:wp(10),height:hp(4),marginLeft:15,marginTop:10},
    text:{marginLeft:90,marginTop:10,fontWeight:"bold"},
    box:{width:wp(27),height:wp(26),backgroundColor:"#d0e2e6ff",marginLeft:20,marginTop:20,alignItems:"center"},
    car:{width:wp(26),height:hp(6.5),marginTop:15},
    

})
export default car2Style