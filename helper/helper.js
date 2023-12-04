import React, { useEffect } from "react";
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
 


export const storeUser = (data) => {
    AsyncStorage.setItem(
       "@user",
        ({
           username: data.user.username,
           first_name: data.user.first_name,
           last_name: data.user.last_name,
           email: data.user.email,
           phone_number: data.user.phone_number,
           jwt: data.jwt
       })
   )
}

export const UserData = () => {
   const stringifiedUser = AsyncStorage.getItem("@user")  || '""';
   return  (stringifiedUser || {});
}


export const Protector = ({component}) => {
    
   const navigate = useNavigation();
   const { jwt} = UserData();

   useEffect(() =>{
       if(!jwt) {
           navigate("/login")
       } 
       
   },[navigate, jwt])
}