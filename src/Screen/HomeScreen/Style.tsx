import React from "react";
import { StyleSheet } from "react-native";

import { widthPercentageToDP as wp,heightPercentageToDP as hp } from "react-native-responsive-screen";


const styles=StyleSheet.create({
    vieww:{flexDirection:"row",marginRight:10},
    imagee:{height:hp("4"),width:wp("6"),marginLeft:8,marginTop:20},
    textt:{color:"#000",padding:1,margin:10,fontSize:18,marginBottom:2},
    text2:{marginBottom:50},
    vieww2:{flexDirection:"row",margin:25,marginLeft:70},
    icon:{marginLeft:20,marginRight:10,width:wp(6),height:hp(3)},
    icon2:{marginRight:10,width:wp(6),height:hp(3)},
    teexx:{width:wp(5),height:hp(2.5),marginLeft:25,marginTop:10},
    i3:{flexDirection:"row",backgroundColor:"#fff",height:hp("6"),width:wp("80"),marginLeft:20,borderRadius:10,marginTop:-40},
    teexxx:{width:wp(5),height:hp(2.5),marginLeft:190,marginTop:10},
    veg:{marginLeft:340,marginTop:-60},
    vtext:{fontSize:20},
    onoff:{width:wp(8),height:hp(4)},
    free:{fontSize:50,marginLeft:10,borderRadius:10,},
    gold:{marginLeft:70,color:"#000080"},
    rupies:{marginLeft:100,fontSize:25,marginTop:60,backgroundColor:"#fff",width:wp(45),height:hp("8"),textAlign:"center",borderBottomEndRadius:50},
    now:{width:wp(40),height:hp("5"),marginLeft:100,marginTop:5,backgroundColor:"#000",color:"#FFD700",textAlign:"center",borderRadius:50},
    flat:{width:hp(10),height:hp(10),margin:15,marginTop:30,marginLeft:10},
    filiter:{width:wp(25),height:hp(4),borderWidth:1,backgroundColor:"#fff",borderRadius:10,marginTop:15,marginLeft:10,flexDirection:"row"},
    fiicon:{width:wp(5),height:hp(3)},
    filitex:{width:wp(15),height:hp(10),fontSize:10,marginLeft:8,marginTop:5,fontWeight:"bold"},
    item2:{flexDirection:"row"},
    you:{marginTop:20,margin:10},
    render4:{}

})

export default styles