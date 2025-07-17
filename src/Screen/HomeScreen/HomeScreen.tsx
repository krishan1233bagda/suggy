import React, { Component } from "react";
import{ FlatList, Image, ImageBackground, ScrollView, Text, TextInput, View }from 'react-native'
import styles from "./Style";
import { widthPercentageToDP as wp,heightPercentageToDP as hp } from "react-native-responsive-screen";
import Data from "../../API/Data/Data";



export default class  HomeScreen extends Component{
 renderItem=({item})=>{
  return(
    <View>
      <Image  style={styles.flat}source={item.image}/>
      <Text>{item.name}</Text>
    </View>
  );
}
renderItem2=({item})=>{
  return(
    <View style={styles.item2}>
      <View style={styles.filiter}>
        <Image source={require("../../Assets/Icons/sort.png")} style={styles.fiicon}/>
        <Text style={styles.filitex}>Filiter</Text>
        
      </View>
      <View style={styles.filiter}>
        
        <Text style={styles.filitex}>Under 30 mins</Text>
        
      </View>
      <View style={styles.filiter}>
        
        <Text style={styles.filitex}>Price Match</Text>
        
      </View>
      <View style={styles.filiter}>
        
        <Text style={styles.filitex}>New to you</Text>
        
      </View>
      <View style={styles.filiter}>
        
        <Text style={styles.filitex}>Great offer</Text>
        
      </View>
      <View style={styles.filiter}>
        
        <Text style={styles.filitex}>Undre 200</Text>
        
      </View>
      <View style={styles.filiter}>
        
        <Text style={styles.filitex}>Pure Veg</Text>
        
      </View>
     



    </View>
  );
}
 renderItem3=({item})=>{
  return(
    <View>
    
      <Text style={styles.you}>RECOMMENDED FOR YOU</Text>
    </View>);
}
renderItem4=({item})=>{
  return(
    <View style={styles.render4}>
      <Image  style={styles.flat}source={item.image}/>
      <Text>{item.name}</Text>
    </View>
  );
}
renderItem5=({item})=>{
  return(
    <View style={styles.render4}>
      <Image  style={styles.flat}source={item.image}/>
      <Text>{item.name}</Text>
    </View>
  );
}
render(){
    return(
      
    <View>
<ScrollView>

        <ImageBackground source={require("../../Assets/Images/images.jpeg")} style={{height:hp("45"),width:wp("100"),}}> 
       <View style={styles.vieww}>
         <Image source={require("../../Assets/Icons/placeholder.png")} style={styles.imagee}/>
        <View>
            <Text style={styles.textt}>Mansarovar Sector 7</Text>
        <Text style={styles.text2}>sector 101,mansrover,jaipur</Text>
        </View>
       <View style={styles.vieww2}>
        <Image source={require("../../Assets/Icons/wallet.png")} style={styles.icon}/>
        <Image source={require("../../Assets/Icons/letter-m.png")}style={styles.icon2}/>
       </View>
       
       </View>
        <View style={styles.i3}>
            <Image source={require ("../../Assets/Icons/search.png")} style={styles.teexx}/>
            
            <TextInput placeholder="search"></TextInput>
            <Image source={require("../../Assets/Icons/audio.png")} style={styles.teexxx}/>
       </View>
       <View style={styles.veg}>
        <Text style={styles.vtext}>VEG </Text>
        <Text> mode</Text>
        <Image source={require("../../Assets/Icons/toggle.png")}style={styles.onoff}/>
       </View>
       <View>
        <Text style={styles.free}>FREE DELIVERY</Text>
        <Text style={styles.gold}>and extra discounts whith GOLD</Text>
       </View>
       <View>
        <Text style={styles.rupies}>join at $ 30 for 3 months</Text>
        <Text style={styles.now}>join Gold now</Text>
       </View>

    </ImageBackground>
    <View>
    <FlatList data={Data.datatype} renderItem={this.renderItem} horizontal/>
    <FlatList data={Data.datatype2} renderItem={this.renderItem2} horizontal/>
    <FlatList data={Data.datatype3} renderItem={this.renderItem3}/>
    
    <FlatList data={Data.datatype4} renderItem={this.renderItem4} horizontal/>
    <FlatList data={Data.datatype4} renderItem={this.renderItem5} horizontal/>
      
      </View>

</ScrollView>


      </View>
    )

}}

