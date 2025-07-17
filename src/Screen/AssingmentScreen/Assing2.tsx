import React, { Component } from "react";
import { View,ImageBackground,Text,TouchableOpacity  } from "react-native";
import styless2 from "./styless2";






export default class Assign extends Component{
 handleNavigate=()=>{
        this.props.navigation.navigate("Bottom")
    }

    render(){
        return(
            <View style={styless2.backimage1}>
                <ImageBackground source={require("../../Assets/Images/manbg.jpg")} style={styless2.backimage}>

                <View style={styless2.main}>
                    <Text style={styless2.text}>Discover Your Unique Style</Text>
                    <Text style={styless2.text2}>A "unie style" paragraph, often seen in academic writing, focuses on a single idea and is structured with a topic sentence, supporting details, and a concluding sentence.</Text>
                    <View style={styless2.main2}>

                        
                          <TouchableOpacity onPress={this.handleNavigate}>
                      
            <Text style={styless2.text1}>LOGIN</Text>
                </TouchableOpacity>


                    </View>

                </View>
                
                </ImageBackground>
                
            </View>
        )
    }
}