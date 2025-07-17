import React, { Component } from "react";
import { Image, View ,Text, TextInput, ImageBackground, ScrollView} from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";




export default class CarScreen3 extends Component{
    render(){
        return(<>
        <ScrollView>
            <View style={{flexDirection:"row",margin:18}}>
                <Image source={require("../../Assets/Icons/arrow.png")} style={{height:hp(1.75),width:wp(4.5),marginTop:5}}/>
                <Text style={{marginLeft:85}}>Car Listing</Text>
            </View>
            <View style={{flexDirection:"row"}}>
            <View style={{borderWidth:0.2,backgroundColor:"#D3D3D3",height:hp(4.5),width:wp(74),maxWidth:250,borderRadius:10,flexDirection:"row",marginLeft:20}}>
                <Image source={require("../../Assets/Icons/search.png")} style={{height:hp(2.3),width:wp(5),marginTop:8,marginLeft:10}}/>
                <TextInput placeholder="Search here...." style={{marginTop:-7}}/>
            </View>
            <View style={{borderWidth:1.2,backgroundColor:"#D3D3D3",height:hp(4.5),width:wp(9),borderRadius:10,marginLeft:20}}>
                <Image source={require("../../Assets/Icons/sort.png")}style={{height:hp(3),width:wp(5),margin:5}}/>
            </View>
            </View>


<View style={{flexDirection:"row"}}>
          <View style={{height:hp(22),width:wp(40),margin:30}}>
            <ImageBackground source={require("../../Assets/Images/car5-removebg-preview.png")}style={{height:hp(12),width:wp(35)}}> 
            <View style={{flexDirection:"row",justifyContent:"space-between",marginTop:10}}>
            <Text style={{height:hp(2.6),width:wp(8.8),backgroundColor:"blue",color:"#fff"}}>New</Text>
            
            </View>
            </ImageBackground>
            <Text>BMW 4 series</Text>
            <Text style={{fontSize:15,fontWeight:"bold"}}>2020 A Can Ford</Text>
            <Text style={{fontSize:15,fontWeight:"bold"}}>Mustang Car</Text>
            <Text style={{color:"blue"}}>$49,960</Text>
          </View>
          <View style={{height:hp(22),width:wp(40),marginTop:30}}>
            <ImageBackground source={require("../../Assets/Images/car2-removebg-preview.png")}style={{height:hp(9),width:wp(40)}}> 
            <View >
    

            </View>
            </ImageBackground>
            <Text>TOYOTA series</Text>
            <Text style={{fontSize:15,fontWeight:"bold"}}>2019 Camf Explorer</Text>
            <Text style={{fontSize:15,fontWeight:"bold"}}>Platinum</Text>
            <Text style={{color:"blue"}}>$74,000</Text>
          </View>
</View>

<View style={{flexDirection:"row"}}>
          <View style={{height:hp(25),width:wp(40),margin:30}}>
            <ImageBackground source={require("../../Assets/Images/car10-removebg-preview.png")}style={{height:hp(12),width:wp(35)}}> 
            <View >

            
            </View>
            </ImageBackground>
            <Text>Hyundai</Text>
            <Text style={{fontSize:13,fontWeight:"bold"}}>2019 Adx Alfa Romeo</Text>
            <Text style={{fontSize:15,fontWeight:"bold"}}>Giulia</Text>
            <Text style={{color:"blue"}}>$40,000</Text>
          </View>
          <View style={{height:hp(25),width:wp(40),marginTop:30}}>
            <ImageBackground source={require("../../Assets/Images/car8-removebg-preview.png")}style={{height:hp(12),width:wp(35)}}> 
            <View >
            
            </View>
            </ImageBackground>
            <Text>Ford Exporer</Text>
            <Text style={{fontSize:13,fontWeight:"bold"}}>2019 Shevrolet</Text>
            <Text style={{fontSize:15,fontWeight:"bold"}}>Corvette Z51</Text>
            <Text style={{color:"blue"}}>$88,000</Text>
          </View>
</View>

<View style={{flexDirection:"row"}}>
          <View style={{height:hp(25),width:wp(40),margin:30}}>
            <ImageBackground source={require("../../Assets/Images/car7-removebg-preview.png")}style={{height:hp(12),width:wp(35)}}> 
            <View >

            
            </View>
            </ImageBackground>
            <Text>NISSAN 4 series</Text>
            <Text style={{fontSize:15,fontWeight:"bold"}}>2020 A Can Ford</Text>
            <Text style={{fontSize:15,fontWeight:"bold"}}>Mustang Car</Text>
            <Text style={{color:"blue"}}>$49,960</Text>
          </View>
          <View style={{height:hp(25),width:wp(40),marginTop:30}}>
            <ImageBackground source={require("../../Assets/Images/car6-removebg-preview.png")}style={{height:hp(12),width:wp(35)}}> 
            <View >

            </View>
            </ImageBackground>
            <Text>HYUNDAI series</Text>
            <Text style={{fontSize:15,fontWeight:"bold"}}>2020 A Can Ford</Text>
            <Text style={{fontSize:15,fontWeight:"bold"}}>Mustang Car</Text>
            <Text style={{color:"blue"}}>$49,960</Text>
          </View>
</View>
</ScrollView>
            </>
               )
    }
}
