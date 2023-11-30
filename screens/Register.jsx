import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import {storeUser} from '../helper/helper';
import { REACT_APP_UPLOAD_URL } from "@env";
import {  REACT_APP_API_URL } from "@env";
import {  REACT_APP_API_TOKEN } from "@env";
import { COLORS } from '../constants';
import { useNavigation } from '@react-navigation/native';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

const intialUser = {password:'', email:'',username:''};

const Register = () => {
  const navigation = useNavigation(); 

  
    const [user , SetUser] = useState(
        { username: "", first_name: "", last_name: "",
         phone_number: "", email: "", password: "",}
      );
      const handle = ({target:{value}}) => SetUser(value)
      // console.log(user,'user')

      const validationSchema = Yup.object().shape({
    
        username: Yup.string()
             .required('User name is required')
             .min(6, 'User name must be minimum 6 characters'),
              
        first_name: Yup.string()
             .required('first_name is required')
             .min(6, 'First Name must be minimum 6 characters'),
             
        last_name: Yup.string()
             .required('last_name is required')
             .min(6, 'Last Name must be minimum 6 characters'),
              
        phone_number: Yup.string()
                 .required('Phone Number is required')
                 .min(7, 'Phone Number is not valid')
                 .max(13, 'Phone Number is not valid'),
             
                  
                 email: Yup.string()
        .required('Email is required')
        ,
        password: Yup.string()
            .required('Password is required')
            .min(6, 'Password must be at least 6 characters'),
        confirmPassword: Yup.string()
            .required('Confirm Password is required')
            .oneOf([Yup.ref('password')], 'Passwords must match')
            
    });
     
    const formOptions = { resolver: yupResolver(validationSchema) };
    
    // get functions to build form with useForm() hook
    const { register, handleSubmit, reset, formState } = useForm(formOptions);
    const { errors } = formState;
    // console.log('register',register)
    const onSubmit= async(aa) => {
        // display form aa on success
        SetUser(aa)
        // console.log('aa',aa)
        const url = REACT_APP_API_URL + `/auth/local/register`;
    
      try{
       
        if(aa.email && aa.password && aa.username){
       
          const {data} = await axios.post(url,aa, 
            {
              headers: {
                "Content-type": "application/json; charset=UTF-8",
                  Authorization: "bearer " + REACT_APP_API_TOKEN,
              }
            }
            
            );
            /*   console.log(data,'data'); */
              if(data.jwt){
                storeUser(data);
                SetUser(intialUser);
               
                navigation.navigate('Login');
                
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
    marginTop: 10,marginLeft:30,}}>
   <View class="text-center mb-4">
   <Text  style={{textAlign:'center',fontFamily:'Medium',fontSize:24}}>Register Now</Text>
       </View>
   <View  >
             <View  >
                <form  onSubmit={handleSubmit(onSubmit)}  >
                  <View  className="form-row">
                  <View className="form-group col">
                            <label
                             style={{textAlign:'left',fontFamily:'Regular',fontSize:15,marginLeft:10}}
                            >User Name</label>
                            <input name="username" type="text"
                              style={{textAlign:'left',fontFamily:'Regular',fontSize:15,marginLeft:10}}
                           
                             {...register('username')} className={`form-control ${errors.username ? 'is-invalid' : ''}`} />

                            <View className="invalid-feedback">{errors.username?.message}</View>
                        </View>
                  </View>
                  <View className="form-row">
                  <View className="form-group col">
                            <label
                             style={{textAlign:'left',fontFamily:'Regular',fontSize:15,marginLeft:10}}
                            >First Name</label>
                            <input name="first_name" type="text" 
                               style={{textAlign:'left',fontFamily:'Regular',fontSize:15,marginLeft:10}}
                                
                            {...register('first_name')} className={`form-control ${errors.first_name ? 'is-invalid' : ''}`} />
                            <View className="invalid-feedback">{errors.first_name?.message}</View>
                        </View>
                        <View className="form-group col">
                            <label
                             style={{textAlign:'left',fontFamily:'Regular',fontSize:15,marginLeft:10}}
                            >Last Name</label>
                            <input name="last_name" type="text"
                             
                             style={{textAlign:'left',fontFamily:'Regular',fontSize:15,marginLeft:10}}
                            
                            {...register('last_name')} className={`form-control ${errors.last_name ? 'is-invalid' : ''}`} />
                            <View className="invalid-feedback">{errors.last_name?.message}</View>
                        </View>
                  </View>
                  <View className="form-row">
                  <View className="form-group col">
                            <label
                             style={{textAlign:'left',fontFamily:'Regular',fontSize:15,marginLeft:10}}
                            >Phone Number</label>
                            <input name="phone_number" type="text" 
                                style={{textAlign:'left',fontFamily:'Regular',fontSize:15,marginLeft:10}}
                             
                            {...register('phone_number',
                          
                            
                            {
                              required: true,
                              
                            }
                            )} className={`form-control ${errors.phone_number ? 'is-invalid' : ''}`} />
                            <View className="invalid-feedback">{errors.phone_number?.message}</View>
                        </View>
                        <View className="form-group  ">
                            <label
                             style={{textAlign:'left',fontFamily:'Regular',fontSize:15,marginLeft:10}}
                            >Email</label>
                            <input name="email" type="Email" 
                              
                              style={{textAlign:'left',fontFamily:'Regular',fontSize:15,marginLeft:10}}

                            {...register('email',
                            {
                                required: true,
                                pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                            }
                            
                            )} className={`form-control ${errors.email ? 'is-invalid' : ''}`} />
                            <View className="invalid-feedback">{errors.email?.message}</View>
                        </View>
                  </View>
                    
                      
                        <View className="form-group  ">
                            <label
                             style={{textAlign:'left',fontFamily:'Regular',fontSize:15,marginLeft:10}}
                            
                            >Password</label>
                            <input name="password" type="password" 
                                style={{textAlign:'left',fontFamily:'Regular',fontSize:15,marginLeft:10}}
                              

                            {...register('password',
                            {
                              required: true,
                              pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                            }
                            
                            )} className={`form-control ${errors.password ? 'is-invalid' : ''}`} />
                            <View className="invalid-feedback">{errors.password?.message}</View>
                        </View>
                        <View className="form-group  ">
                            <label
                             style={{textAlign:'left',fontFamily:'Regular',fontSize:15,marginLeft:10}}
                            >Confirm Password</label>
                            <input name="confirmPassword" type="password" 
                             style={{textAlign:'left',fontFamily:'Regular',fontSize:15,marginLeft:10}}
                            {...register('confirmPassword')} className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`} />
                            <View className="invalid-feedback">{errors.confirmPassword?.message}</View>
                        </View>
                     
                    <View style={{display:'flex',flexDirection:'row'}}>
                        <button type="submit" /* type="button" */  /* onClick={signup} */ 
                         style={{textAlign:'left',fontFamily:'Regular',fontSize:15,
                         color:COLORS.color3, backgroundColor:COLORS.color4,
                         border:0,paddingTop:10,paddingBottom:10,
                         marginLeft:10,marginTop:15,textAlign:'center',width:120}}
                        
                        >Register</button>
                        <button type="button" onClick={() => reset()}  
                         style={{textAlign:'left',fontFamily:'Regular',fontSize:15,
                         color:COLORS.color3, backgroundColor:COLORS.color4,
                         border:0,paddingTop:10,paddingBottom:10,
                         marginLeft:10,marginTop:15,textAlign:'center',width:120}}
                        >Reset</button>
                    </View>
                </form>
            </View>
        </View>
  
       
    
    </View>
 </View>

    </View>
  )
}

export default Register

const styles = StyleSheet.create({})