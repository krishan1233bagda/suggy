import React, { Component } from "react";
import { View,Image, Text, FlatList } from "react-native";
import car2Style from "./car2Style";
import car2Data from "../../API/Data/car2Data";







export default class CarScreen2 extends Component{
    renderitem=({item})=>{
        return(
            <View>
                <View style={{flexDirection:"row"}}>
                    <Image source={require('../../Assets/Icons/arrow.png')} style={car2Style.arrow}/>
                    <Text style={car2Style.text}>Explor Categories</Text>
                </View>

            </View>
        );
    }
    renderitem1=({item})=>{
        return(
            <View>
                <View style={car2Style.box}>
                <Image source={item.Image} style={car2Style.car}/>
                <Text style={{marginTop:5,fontWeight:"bold"}}>{item.name}</Text>

            </View>
     

            </View>
        )
    }
    


    render(){
        return(
            <View>
                <FlatList data={car2Data.datatype} renderItem={this.renderitem}/>
                <FlatList data={car2Data.datatype1} renderItem={this.renderitem1} numColumns={3}/>
                
            </View>
        )
    }
    
}
