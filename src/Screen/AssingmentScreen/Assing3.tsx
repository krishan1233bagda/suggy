import React, { Component } from "react";

import styless3 from "./styless3";
import { View,Image,TextInput,Text, TouchableOpacity,} from "react-native";
import {widthPercentageToDP as wp ,heightPercentageToDP as hp} from "react-native-responsive-screen";
import Data2 from "../../API/Data/Data2";







export default class Assign extends Component{
   
     render(){
        return(
            <View>
 <View style={styless3.continer}>
            <Image source={require("../../Assets/Icons/bell.png")} style={styless3.bell}/>
            <TextInput placeholder="Searchsgdhgsdh" style={styless3.Search}></TextInput>
            <Image source={require("../../Assets/Icons/briefcase.png")} style={styless3.bag}/>
            </View>
            <View style={styless3.color}>
                <Text style={styless3.lines}>Introducing our Spring Collection</Text>
                <Text style={styless3.lines2}>Discover our new spring collection</Text>
               <View style={styless3.color2}>
                <Text style={styless3.button}>clickhere</Text>
                
               </View>
               <View><Image source={require("../../Assets/Images/hoodie.webp")}style={styless3.img1}/></View>
            </View>

            <View>
                <Text style={styless3.text1}>shop by categires</Text>
                <Text style={styless3.text2}>SEE ALL</Text>
                

            </View>
            <View style={{flexDirection:"row",}}>
            <View >
                <Image source={require("../../Assets/Icons/cat.png")} style={styless3.cat}/>

                </View>
                <View>
                <Image source={require("../../Assets/Icons/adidas.png")}style={styless3.cat0}/>

                </View>
                <View>
                <Image source={require("../../Assets/Icons/dell.png")}style={styless3.cat1}/>

                </View>
                <View>
                <Image source={require("../../Assets/Icons/nike.png")}style={styless3.cat2}/>

                </View>
                <View>
                <Image source={require("../../Assets/Icons/cat.png")}style={styless3.cat3}/>

                </View>
                </View>
                <View>
                    <Text style={styless3.text1}>Treding</Text>
                    <Text style={styless3.text2}>SEE ALL</Text>
                </View>
                <View style={{flexDirection:"row",}} >
                    <View style={styless3.vew}>
                        <Image source={require("../../Assets/Images/download.jpg")} style={{width:wp(35),height:hp(18),margin:10}}/>

                    </View>
                    <View style={styless3.vew}>
                          <Image source={require("../../Assets/Images/download.jpg")} style={{width:wp(35),height:hp(18),margin:10}}/>

                    </View>
                    
                </View>
                <View>
                     <TouchableOpacity>
                         <Text style={styless3.text1}>Treding in trend</Text>
              
                </TouchableOpacity>

                    
                   
                    
                </View>
            </View>
          
        )
    }

}

