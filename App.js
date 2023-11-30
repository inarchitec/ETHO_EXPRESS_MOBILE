import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import {useFonts} from 'expo-font';
import *  as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';
 import {NavigationContainer} from '@react-navigation/native';
 import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { ViewPropTypes } from 'deprecated-react-native-prop-types';
import BottomTabNavigation from './navigation/BottomTabNavigation';
 
import { NativeBaseProvider, Text, Box } from "native-base";
import Product from './screens/Product';
import Cart from './screens/Cart'
import Checkout from './screens/Checkout'
import Shop from './screens/Shop'
import Home from './screens/Home'
import Register from './screens/Register'
import Login from './screens/Login'
import Profile from './screens/Profile'
import React from 'react'
import { useState } from 'react';

 const Stack = createNativeStackNavigator();
 
import { Provider } from 'react-redux/es';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './redux/store';
import { UserData } from './helper/helper';
 
import { useNavigation } from '@react-navigation/native';

const user_info = UserData();

 const getIsSignedIn = () =>{
  
  if( user_info == ''){
    return false;
  }else{
    return  true;
  }

    
  
   
 }
 
 
export default function App() {
   
 const [fontsLoaded] = useFonts({
  "Black": require("./assets/fonts/Poppins-Black.ttf"),
  "BlackItalic": require("./assets/fonts/Poppins-BlackItalic.ttf"),
  "Bold": require("./assets/fonts/Poppins-Bold.ttf"),
  "BoldItalic": require("./assets/fonts/Poppins-BoldItalic.ttf"),
  "ExtraBold": require("./assets/fonts/Poppins-ExtraBold.ttf"),
  "ExtraLight": require("./assets/fonts/Poppins-ExtraLight.ttf"),
  "Italic": require("./assets/fonts/Poppins-Italic.ttf"),
  "Light": require("./assets/fonts/Poppins-Light.ttf"),
  "LightItalic": require("./assets/fonts/Poppins-LightItalic.ttf"),
  "Medium": require("./assets/fonts/Poppins-Medium.ttf"),
  "MediumItalic": require("./assets/fonts/Poppins-MediumItalic.ttf"),
  "Regular": require("./assets/fonts/Poppins-Regular.ttf"),
  "SemiBold": require("./assets/fonts/Poppins-SemiBold.ttf"),
  "SemiBoldItalic": require("./assets/fonts/Poppins-SemiBoldItalic.ttf"),
  "Thin": require("./assets/fonts/Poppins-Thin.ttf"),
  "ThinItalic": require("./assets/fonts/Poppins-ThinItalic.ttf"),
   
})
  const OnLayOutRootView = useCallback(async() =>{
    if(fontsLoaded){
      await SplashScreen.hideAsync();
    }
  },[fontsLoaded]); 
  if(!fontsLoaded){
    return null;
  } 
  const isSignedIn = getIsSignedIn();

   
  
  return (
   
<Provider store={store}>
<PersistGate loading={"loading"} persistor={persistor}>
     <NavigationContainer>
          <Stack.Navigator>
          
              <Stack.Screen 
            name='BottomTabNavigation'
            component={BottomTabNavigation}
            options={{headerShown:false}}/>  
            <Stack.Screen name="Home" component={Home}
          />  
            
          <Stack.Screen name="Product" component={Product}
           />
           
            <Stack.Screen name="Cart" component={Cart}
           />
           
            
             
           <Stack.Screen name="Profile" component={Profile}
           />  
           
           
          <Stack.Screen name="Login" component={Login}
           /> 
           <Stack.Screen name="Register" component={Register}
           /> 
           <Stack.Screen name="Checkout" component={Checkout}
           /> 
           
          </Stack.Navigator>
          
     </NavigationContainer>
          </PersistGate>
</Provider>
 
  );
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle:{
    fontFamily:'Bold',
    fontSize:18
  }
});
