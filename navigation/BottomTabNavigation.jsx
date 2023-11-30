import React, { Component } from 'react';
import { Text, View } from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Shop from '../screens/Shop';
import Cart from '../screens/Cart';
import Product from '../screens/Product';
import Login from '../screens/Login';
import Register from '../screens/Register';
import Checkout from '../screens/Checkout';
import Profile from '../screens/Profile'
import { COLORS } from '../constants';
import {Ionicons} from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();
const screenOptions ={
    tabBarShowLabel :false,
    tabBarHideOnKeyboard : true,
    headerShown: false,
    tabBarStyle:{
      position:"absolute",
      bottom:0,
      right:0,
      left:0,
      elevation:0,
      height:60,
      backgroundColor:'#222'
    }
  
  }
const BottomTabNavigation = () => {
  
    return (
    <Tab.Navigator screenOptions={screenOptions}  >
        
        {/* <Tab.Screen  name='Profile'  component={Profile}
        options={
            {
                tabBarIcon:({focused}) =>{
                    
                    return <View><Ionicons name={focused ? "home" : "home-outline"}
                    size={24}
                    color={focused ? COLORS.color1 : COLORS.color3}
                    /></View>
                }
            }
        }
        />      */}

 
     <Tab.Screen  name='Home'  component={Home}
        options={
            {
                tabBarIcon:({focused}) =>{
                    
                    return <View><Ionicons name={focused ? "home" : "home-outline"}
                    size={24}
                    color={focused ? COLORS.color1 : COLORS.color3}
                    /></View>
                }
            }
        }
        />   
         <Tab.Screen  name='Shop'  component={Shop}
        options={
            { 
                tabBarIcon:({focused}) =>{
                    return <Ionicons name={focused ? "briefcase" : "briefcase-outline"}
                    size={24}
                    color={focused ? COLORS.color1 : COLORS.color3}
                    />
                }
            }
        }/>   
        
       
    </Tab.Navigator>
    )
  }
 

export default BottomTabNavigation
