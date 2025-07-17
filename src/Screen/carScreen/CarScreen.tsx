import React, { Component } from "react";
import { FlatList, ScrollView, View,Image,Text, TextInput, Touchable, TouchableOpacity } from "react-native";
import carStyle from "./carStyle";
import carData from "../../API/Data/carData";







export default class CarScreen extends Component{
    handleNavigation=()=>{
        this.props.navigation.navigate("Bottom")
    }
    renderitem=({item})=>{
        return(
            <View>
                <View style={carStyle.main}>
                <View style={carStyle.heart2}>
        <View style={carStyle.hand2}>
            <Image source={require('../../Assets/Images/man1.jpg')} style={carStyle.hand}/>
            <View>
                 <TouchableOpacity onPress={this.handleNavigation}>
             <Text style={carStyle.hand3}>Good Morning!</Text>
              </TouchableOpacity>
             <Text style={carStyle.hand3}>Wilson AH</Text>
            </View>

        </View>
        <View style={carStyle.heart3}>
            
            <Image source={require('../../Assets/Icons/bell.png')} style={carStyle.heart4}/>
        </View>
    </View>
    </View>



    <View style={carStyle.search}>
        <TextInput placeholder="Search hear" ></TextInput>
        <View style={carStyle.search1}>
            <Image source={require('../../Assets/Icons/search.png')} style={carStyle.search2}/>

        </View>
    </View>
    

    <View>
       
            <Image source={require('../../Assets/Images/car8.jpg')} style={carStyle.search3}/>
            

        </View>

        <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                <Text style={carStyle.shop}>Popular categaries</Text>
                <Text style={{marginTop:15,marginRight:10,fontWeight:"bold"}}>View All</Text>
               </View>




            </View>
        );
    }
    renderitem1=({item})=>{
        return(
            <View style={carStyle.box}>
                <Image source={item.Image} style={carStyle.car}/>
                <Text style={{marginTop:5,fontWeight:"bold"}}>{item.name}</Text>

            </View>
        );
    }
    renderitem2=({item})=>{
        return(
            <View>
                <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                <Text style={carStyle.shop}>Feature Car Listings</Text>
                <Text style={{marginTop:15,marginRight:10,fontWeight:"bold"}}>View All</Text>
               </View>

               
            </View>
        );
    }
    renderitem3=({item})=>{
        return(
            <View>
                <Image source={item.Image} style={carStyle.car1}/>
                <Text style={carStyle.car2}>{item.name}</Text>
                <Text style={carStyle.car2}>{item.price} </Text>

            </View>
        )
    }
    
    
    
    

    render(){
        return(
            <View>
                <ScrollView>
                    <FlatList data={carData.datatype} renderItem={this.renderitem}/>
                    <FlatList data={carData.datatype1} renderItem={this.renderitem1} horizontal/>
                    <FlatList data={carData.datatype2} renderItem={this.renderitem2}/>
                    <FlatList data={carData.datatype3} renderItem={this.renderitem3} horizontal/>
                </ScrollView>
            </View>
        )
    }
}
