import React  from "react";
import { StyleSheet } from "react-native";
import {widthPercentageToDP as wp ,heightPercentageToDP as hp} from "react-native-responsive-screen";


const carStyle=StyleSheet.create({
    hand2:{flexDirection:"row",marginTop:5},hand3:{marginTop:10,marginLeft:5},
    heart:{width:wp("8.5"),height:hp(4),marginRight:20},
    heart2:{flexDirection:"row",justifyContent:"space-between",marginTop:10,marginLeft:10},
    heart3:{flexDirection:"row",marginTop:10,margin:10,},
    heart4:{width:wp("8.5"),height:hp(4)},
    hand:{width:wp("15"),height:hp(6),borderRadius:40,borderWidth:1},
    main:{width:wp(100),height:hp(18),backgroundColor:"#256be6"},
    hand3:{color:"white",marginLeft:5,},
    search:{width:wp(90),height:hp(8),borderWidth:1,alignSelf:"center",marginTop:-35,backgroundColor:"white",borderRadius:10,flexDirection:"row",justifyContent:"space-between"},
    search1:{width:wp(12),height:hp(6),borderWidth:1,alignSelf:"center",borderRadius:10,marginRight:10,backgroundColor:"#3c4057"},
    search2:{width:wp(6),height:hp(3),alignSelf:"center",marginTop:10},
    search3:{width:wp(90),height:hp(20),alignSelf:"center",marginTop:10,borderRadius:10},
    shop:{marginLeft:15,marginTop:10,fontSize:16,fontWeight:"bold"},
    box:{width:wp(26),height:wp(26),backgroundColor:"#d0e2e6ff",marginLeft:20,marginTop:20,alignItems:"center"},
    car:{width:wp(26),height:hp(6.5),marginTop:15},
    car1:{width:wp(55),height:hp(16),marginTop:20,marginLeft:10},
    car2:{marginLeft:20,fontWeight:"800"}

    
    

})
export default carStyle