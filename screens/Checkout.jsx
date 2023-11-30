import { Pressable, ScrollView, StyleSheet, Text, View,Dimensions } from 'react-native'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { useState } from 'react';
 import { UserData } from '../helper/helper';
 import img from '../assets/chapa_img.jpg'; 
 import { useNavigation } from '@react-navigation/native';
import { DataTable } from 'react-native-paper'; 
import { COLORS } from '../constants';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
const Checkout = () => {
    const [res,setRes] = useState();
  const navigate = useNavigation();



  const user_info = UserData();
  //  console.log('user_info',user_info)  
  
  const Cart_Products = useSelector((state) => state.Cart_Products);
/*   console.log(Cart_Products,'Cart_Products') */
  
  const dispatch = useDispatch();
  const final_pay = Cart_Products.reduce((total, item)=>total+(item.price*item.quantity),0)
  const currency =  "ETB"

  const datas =   
    {
    
    "amount": final_pay,
    "currency":currency,
    "email": user_info.email,
    "first_name": user_info.first_name,
    "last_name": user_info.last_name,
    "phone_number":  user_info.phone_number,
 
    "callback_url": "https://webhook.site/077164d6-29cb-40df-ba29-8a00e59a7e60",
    
    "customization[title]": "Payment for my favourite merchant",
    "customization[description]": "I love online payments"
  } 


/*   console.log(datas) */
  
 
  
  const post_to_backend = async() => {
    const url = `http://localhost:1337/api/new`;
    try{
  
        await axios.post(url,datas,
         { headers: {
            Authorization: "bearer " + process.env.REACT_APP_API_TOKEN,
          }}
          ).then(response => window.open(location.replace(response.data?.data?.checkout_url)))
 
    }catch(error){
      setRes(error)
      //  console.log(error,'error');
    }

   }


 

// console.log(res,'res')
// console.log(res?.response?.data?.message?.amount,'res')
 
{
  if(user_info == ""){
    navigate('/login')
  }
}
  return (
    <View  style={{marginTop:5 }}>
    <ScrollView 

showsHorizontalScrollIndicator={false}
pagingEnabled
vertical
style={{height: HEIGHT  ,width:WIDTH, paddingBottom:200}}
    >
 
             
                <DataTable  style={{margin:20, }}>
                <DataTable.Row>
                         
                         <DataTable.Cell  style={{textTransform:'uppercase',fontFamily:'Bold', }} >
                            <Text  style={{textTransform:'uppercase',fontFamily:'Bold', fontSize:18}} >CART INFORMATION</Text>
                           </DataTable.Cell>
                        
                     
                    
      </DataTable.Row>
                    <DataTable.Row>
                         
                             <DataTable.Cell  style={{textTransform:'uppercase',fontFamily:'Bold'}} ><Text style={{textTransform:'uppercase',fontFamily:'Regular'}}>NAME</Text></DataTable.Cell>
                            <DataTable.Cell   style={{textTransform:'uppercase',fontFamily:'Bold'}}  ><Text style={{textTransform:'uppercase',fontFamily:'Regular'}}> UNIT PRICE </Text> </DataTable.Cell>
                            <DataTable.Cell   style={{textTransform:'uppercase',fontFamily:'Bold'}}  ><Text style={{textTransform:'uppercase',fontFamily:'Regular'}}>QUANTITY</Text></DataTable.Cell>
                            <DataTable.Cell   style={{textTransform:'uppercase',fontFamily:'Bold'}}  ><Text style={{textTransform:'uppercase',fontFamily:'Regular'}}>TOTAL</Text></DataTable.Cell> 
                         
                        
          </DataTable.Row>
          
          {
                            Cart_Products.map(item =>(
                                <DataTable.Row  key={item.id}>
                             <DataTable.Cell     style={{textTransform:'uppercase',fontFamily:'Bold'}}  >
                               {item.title} 
                                 
                            </DataTable.Cell>
                            <DataTable.Cell      style={{textTransform:'uppercase',fontFamily:'Bold'}} > {item.price}  </DataTable.Cell>
                            <DataTable.Cell      style={{textTransform:'uppercase',fontFamily:'Bold'}} >
                                     {item.quantity} 
         
                            </DataTable.Cell>
                            <DataTable.Cell     style={{textTransform:'uppercase',fontFamily:'Bold'}} >  {item.price * item.quantity} </DataTable.Cell>
                             
                                </DataTable.Row >
                            ))
                        }
                
        <DataTable.Row>
         
           
          <DataTable.Cell ><Text style={{textTransform:'uppercase',fontFamily:'Regular'}}>Cart Subtotal</Text>     
          </DataTable.Cell>
         <DataTable.Cell><Text style={{textTransform:'uppercase',fontFamily:'Regular'}}>{Cart_Products.reduce((total, item)=>total+(item.price*item.quantity),0)}</Text></DataTable.Cell>
         
        </DataTable.Row>
        
        <DataTable.Row>
            <DataTable.Cell>
                        <Text style={{textTransform:'uppercase',fontFamily:'Medium' }}>Total Pay:</Text>
            </DataTable.Cell>
            <DataTable.Cell>
                        <Text style={{textTransform:'uppercase',fontFamily:'Medium' }}>{final_pay} </Text>
            </DataTable.Cell>

          
          
        </DataTable.Row>
        
   
              
                    <DataTable.Row>
                        <DataTable.Cell>
                        <Text  style={{textTransform:'uppercase',fontFamily:'Bold', fontSize:18}} >

                             USER INFORMATION
                        </Text>
                             
                         
                        </DataTable.Cell>
          </DataTable.Row>
        
          <DataTable.Row>

            <DataTable.Cell><Text style={{textTransform:'uppercase',fontFamily:'Regular'}}>USER NAME</Text></DataTable.Cell>
            <DataTable.Cell>{user_info.username}</DataTable.Cell>

            </DataTable.Row>

            <DataTable.Row>

            <DataTable.Cell><Text style={{textTransform:'uppercase',fontFamily:'Regular'}}>EMAIL</Text></DataTable.Cell>
            <DataTable.Cell><Text style={{textTransform:'uppercase',fontFamily:'Regular'}}>{user_info.email}</Text></DataTable.Cell>

            </DataTable.Row>
            <DataTable.Row>

            <DataTable.Cell><Text style={{textTransform:'uppercase',fontFamily:'Regular'}}>FULL NAME:</Text></DataTable.Cell>
            <DataTable.Cell><Text style={{textTransform:'uppercase',fontFamily:'Regular'}}>{user_info.first_name}</Text></DataTable.Cell>
             
            </DataTable.Row>
            <DataTable.Row>
            <DataTable.Cell> </DataTable.Cell>
            <DataTable.Cell><Text style={{textTransform:'uppercase',fontFamily:'Regular'}}>{user_info.last_name}</Text></DataTable.Cell>
                        </DataTable.Row>
             
            <DataTable.Row>

          <DataTable.Cell><Text style={{textTransform:'uppercase',fontFamily:'Regular'}}>Phone number</Text></DataTable.Cell>
          <DataTable.Cell><Text style={{textTransform:'uppercase',fontFamily:'Regular'}}>{user_info.phone_number}</Text></DataTable.Cell>
          
          
          </DataTable.Row>

           
      
                </DataTable>
                {/*/ End Shopping Summery */}
            


            <View className="col-3  " style={{margin:'10px'}}>
            <View style={{marginLeft:'1.4rem'}}>

            {res?.response?.data?.status == 'failed' ? <View class="alert alert-danger" style={{marginTop:'20px'}}><strong>{res?.response?.data?.status}</strong><br></br>  {res?.response?.data?.message?.amount}</View> : ''}
   


         <View style={{textTransform:'uppercase',fontFamily:'Medium',fontSize:22,}}>Pay With Chapa</View>
       <Pressable type="button" onPress={post_to_backend}   style={{width:180,marginTop:20}}  >

       <img src={img}  style={{width:180}}></img>

       </Pressable>
    

       </View>


      
       
   </View>
    
    
       
    
    </ScrollView>
</View>
  )
}

export default Checkout

const styles = StyleSheet.create({})