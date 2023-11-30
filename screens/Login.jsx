import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import axios from 'axios';
import {storeUser} from '../helper/helper';
import { REACT_APP_UPLOAD_URL } from "@env";
import {  REACT_APP_API_URL } from "@env";
import {  REACT_APP_API_TOKEN } from "@env";
import { COLORS } from '../constants';

const intialUser = {password:'', identifier:''};
const Login = () => {
    
  
    //  console.log('isSignedIn',isSignedIn)

  const navigation = useNavigation(); 
  const [user , SetUser] = useState(intialUser);
//   console.log(user)

  const handleChange = ({target}) =>{
    SetUser((currentUser) => ({
      ...currentUser,
      [target.name]:target.value,
    }))
   }
   const handleLogin = async() => {
    const url = REACT_APP_API_URL + `/auth/local`;
    try{
      if(user.identifier && user.password){
        const {data} = await axios.post(url,user,
         { headers: {
            Authorization: "bearer " + REACT_APP_API_TOKEN,
          }}
          );
        if(data){
          storeUser(data);
          SetUser(intialUser)
        
          navigation.navigate('BottomTabNavigation')
        }
      }
    }catch(error){
      //  console.log(error,'error');
    }

   }


  return (
    <View>
      <View>
      <View class="text-center mb-4">
         <Text  style={{textAlign:'center',fontFamily:'Medium',fontSize:42,marginTop:130,
         color:COLORS.color1

        }}>Etho Express </Text>
       </View>
       <View style={{width: 320,
    maxWidth: 420,
    padding: 15,
    marginTop: 80,marginLeft:30,}}>
   <View class="text-center mb-4">
         <Text  style={{textAlign:'center',fontFamily:'Medium',fontSize:24}}>Login Now </Text>
       </View>
   <View  >
             
              <View className="form-group  ">
                      <label for="inputEmail4"  
                      style={{textAlign:'left',fontFamily:'Regular',fontSize:15,marginLeft:10}}

                      >
                        <Text>Email</Text>
                        </label>
                            <input type="email" name='identifier' 
                            value={user.identifier}
                            onChange={handleChange}
                            placeholder='Enter Your Email' required
                            style={{textAlign:'left',fontFamily:'Regular',fontSize:15,marginLeft:10,marginTop:10}}
                             id="inputEmail4"/>
                      </View>
              
             </View>
              <View className="form-group  ">
              <label for="inputPassword4"  
               style={{textAlign:'left',fontFamily:'Regular',fontSize:15,marginLeft:10,marginTop:12}}
              
              >
                <Text>Password</Text>
                </label>
                    <input type="password" 
                      name='password'   required
                      value={user.password}
                      onChange={handleChange}
                      placeholder='Enter Your Password'

                      style={{textAlign:'left',fontFamily:'Regular',fontSize:15,marginLeft:10}}
                       id="inputPassword4"/>
              </View>

               <View className="form-group  ">
                  <button type="button"
                  onClick={handleLogin}
                  style={{textAlign:'left',fontFamily:'Regular',fontSize:15,
                  color:COLORS.color3, backgroundColor:COLORS.color4,
                  border:0,paddingTop:10,paddingBottom:10,
                  marginLeft:10,marginTop:15,textAlign:'center',width:120}}
                  >
                    Log in 
                   </button>
                </View>
                <View className="form-group  ">

                <View
                 style={{textAlign:'left',fontFamily:'Regular',fontSize:13,marginLeft:10, marginTop:5}}
                >  <Pressable   onPress={() =>  navigation.navigate('Register')} ><Text>Forgot password ?</Text></Pressable></View>
                <View 
                 style={{textAlign:'left',fontFamily:'Regular',fontSize:13,marginLeft:10}}
                > <Pressable   onPress={() =>  navigation.navigate('Register')} ><Text>Don't Have User Account ? Register Now !</Text></Pressable></View>
                </View>
              
             
             </View>
   
</View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({})