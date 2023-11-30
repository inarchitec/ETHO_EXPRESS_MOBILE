import React, { useEffect } from "react";
import { useNavigation } from '@react-navigation/native';
 
 


export const storeUser = (data) => {
   localStorage.setItem(
       "user",
       JSON.stringify({
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
   const stringifiedUser = localStorage.getItem("user")  || '""';
   return JSON.parse(stringifiedUser || {});
}


export const Protector = ({component}) => {
    
   const navigate = useNavigate();
   const { jwt} = UserData();

   useEffect(() =>{
       if(!jwt) {
           navigate("/login")
       } 
       
   },[navigate, jwt])
}