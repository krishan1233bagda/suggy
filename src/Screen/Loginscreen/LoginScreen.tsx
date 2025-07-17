import React, { Component } from "react";
import {  View,Text, TextInput,Button, Image, TouchableOpacity  } from "react-native";


export default class LoginScreen extends Component{
   handlenavigate=()=>{
        this.props.navigation.navigate("Bottom")
    }
  render(){
    return(
      <View>
        <Image source={require("../../Assets/Images/01.jpg")} style={{width:600,height:400}}/>
      
      <View style={{backgroundColor:"#fff"}}>
      <Text style={{fontSize:35,textAlign:"center",marginBottom:30}}>India's #1 Food Delivery and Dinig App</Text>
        </View>
        <View >
<TouchableOpacity onPress={this.handlenavigate}>          

          <Text  style={{textAlign:"center", marginBottom:40}}>_______log in or sign up______</Text>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection:"row",alignItems:"center",marginLeft:20}}>
          <Image source={require("../../Assets/Icons/india.png")}style={{marginTop:20,width:30,height:40}}/>
          <TextInput placeholder="+91 enter phone number" style={{borderWidth:1,borderColor:"#000",width:"50%",marginLeft:20,marginTop:20}}/>
        </View>
    <View >
    <Text style={{ height:30, paddingTop:5,color:"#fff",  backgroundColor:"#a83242",textAlign:"center",margin:20,borderRadius:4}}>Continue</Text>
    </View>
    <View>
      <Text style={{marginLeft:10}}>____________________________or______________________</Text>
    </View>
        </View>
        
       

      
    )

  }
}