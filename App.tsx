// import React from "react";
// import LoginScreen from "./src/Screen/Loginscreen/LoginScreen";
// import AssingmentScreen from "./src/Screen/AssingmentScreen/AssingmentScreen";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { NavigationContainer } from "@react-navigation/native";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import HomeAssign from "./src/Screen/HomeAssign.tsx/HomeAssign";
// import HomeScreen from "./src/Screen/HomeScreen/HomeScreen";
// import Assign from "./src/Screen/AssingmentScreen/Assing2";


// const Stack=createNativeStackNavigator()
// export default function App(){
// return(
//   <NavigationContainer>
//     <Stack.Navigator>
//       <Stack.Screen name="loing" component={LoginScreen}/>
//       <Stack.Screen name="Bottom" component={BottomTab}/>
//     </Stack.Navigator>
//   </NavigationContainer>
// )
// }

// const Bottom=createBottomTabNavigator()
// function BottomTab(){
//   return(
//     <Bottom.Navigator>
//             <Bottom.Screen name="ASSin" component={AssingmentScreen}/>
//             <Bottom.Screen name="hoME" component={HomeAssign}/>
//             <Bottom.Screen name="sCREENhoME" component={HomeScreen}/>

//     </Bottom.Navigator>
//   )
// }
// import React from "react";
// import Assing2 from "./src/Screen/AssingmentScreen/Assing2";
// // import TakePicture from "./src/Screen/AssingmentScreen/camera";
// import Assing3 from "./src/Screen/AssingmentScreen/Assing3";
// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import React from "react";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import OTPinput from "./src/Screen/otpScreen/OTPinput";
// import TakePicture from "./src/Screen/AssingmentScreen/camera";
// import LoginScreen from "./src/Screen/Loginscreen/LoginScreen";


// const Stack=createNativeStackNavigator()
// export default function App(){
//   return(
//    <NavigationContainer>
//     <Stack.Navigator screenOptions={{headerShown:false}}>
  
//     <Stack.Screen name="assing2"component={Assing2}/>

//     <Stack.Screen name="Bottom"component={BottomTab}/>
//     </Stack.Navigator>
//    </NavigationContainer>
//   )
  
// }

// const Bottom=createBottomTabNavigator()
// function BottomTab(){
//   return(
//     <Bottom.Navigator screenOptions={{headerShown:false}}>
//       <Bottom.Screen name="assing"component={Assing3}/>
//           <Bottom.Screen name="login"component={LoginScreen}/>
      
//     </Bottom.Navigator>
//   )
// }

// export default function otp(){
//   return(
//     <>
//     <Assing3/>
//     {/* <OTPinput/> */}
//     {/* <TakePicture/> */}
//     </>
//   )
// }


import React from "react";
import CarScreen from "./src/Screen/carScreen/CarScreen";
import CarScreen2 from "./src/Screen/carScreen/CarScreen2";
import CarScreen3 from "./src/Screen/carScreen/carScreen3";
import { create } from "react-test-renderer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "react-native";





const Stack=createNativeStackNavigator()
export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Home" component={CarScreen}/>
        <Stack.Screen name="Bottom" component={BottomTab}/>
      </Stack.Navigator>
    </NavigationContainer>
    
  )

}
const Bottom=createBottomTabNavigator()
function BottomTab(){
  return(
    <Bottom.Navigator screenOptions={{headerShown:false}}>
      <Bottom.Screen name="Home" component={CarScreen}
      options={{tabBarIcon:({size, color})=>{
        return(
          <Image source={require('../../firstproject/src/Assets/Icons/heart.png')} style={{width:"30",height:30}}/>
        )
      }
    }}/>
       <Bottom.Screen name="car2" component={CarScreen2}
        options={{tabBarIcon:({size, color})=>{
        return(
          <Image source={require('../../firstproject/src/Assets/Icons/search.png')} style={{width:"20",height:20}}/>
        )
      }
    }}/>
        <Bottom.Screen name="car3" component={CarScreen3}options={{tabBarIcon:({size, color})=>{
        return(
          <Image source={require('../../firstproject/src/Assets/Icons/arrow.png')} style={{width:"20",height:20}}/>
        )
      }
    }}/>
    </Bottom.Navigator>
  )
}