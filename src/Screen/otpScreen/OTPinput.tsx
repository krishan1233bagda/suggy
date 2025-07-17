import React, { Component } from "react";
import OTPInputView from  "@twotalltotems/react-native-otp-input"
import { Text, View } from "react-native";
import OTPstyie from "./Otpstyle";





export default class OTPinput extends Component{
    constructor(){
        super()
        this.state={
            otp:" ",
        }


    }

render(){
const{otp}=this.state

return(
    <View>
        <Text>rapido</Text>
        <Text>what your number</Text>
        <Text>entre your phone number to proceed</Text>
        <OTPInputView

style={{width:"80%", height:60, alignSelf: "center"}}

pinCount={4}

autoFocusOnLoad

codeInputFieldStyle={OTPstyie.underlinestylebase}

codeInputHighlightStyle={OTPstyie.underlinehighlight}

onCodeChanged={(code)=>{
this.setState({otp:code});

}}

onCodeFilled={(code)=>{

 this.setState({otp:code}); 
 }}
/>
    </View>
)
}}
