import React, { Component } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import styless from "./Styleass";








export default class AssingmentScreen  extends Component{
   

    render(){
        return(
        
            <View>
            <View style={styless.a1}>
                <Image source={require("../../Assets/Icons/reception.png")} style={styless.a2}/>
                <Image source={require("../../Assets/Icons/sort.png")} style={styless.a3}/>
                
                
                <Text style={styless.a4}>CHEF BOX</Text>
                
                   <Text style={styless.a5}>All copyright reseved Chefbox</Text>
            </View>
             </View>
           
        )

    }
        
    }

