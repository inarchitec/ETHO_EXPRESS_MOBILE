import { StyleSheet, Text, View,ScrollView,Dimensions ,ImageBackground,Button, Pressable } from 'react-native'
 import useFetch from '../hooks/useFetch';
import React from 'react'
import { REACT_APP_UPLOAD_URL } from "@env";
import { COLORS } from '../constants';
import {Ionicons} from '@expo/vector-icons';

import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
 import { useState } from 'react';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
const Product = ({ route  }) => { 
    //  const { data, otherParam } = route.params;
   
    // console.log(data.id, 'product')
    const file = route.params; 
	const item = file ? file?.state.e : '';
  
    //  console.log(item2, 'id')

     const dispatch = useDispatch();

     const [quantity, setQuantity] = useState(1);
 
 
  return (
    <View>
      <ScrollView
       showsHorizontalScrollIndicator={false}
       pagingEnabled
       vertical
       style={{height: HEIGHT  ,width:WIDTH, paddingBottom:200}}
      >
       <ScrollView
         showsHorizontalScrollIndicator={false}
         pagingEnabled
         horizontal
         style={styles.wrap}
       >
        {
          item?.attributes?.gallery?.data.map((x, index)=>(
            <ImageBackground source={REACT_APP_UPLOAD_URL + x.attributes?.url} style={styles.container2} key={index} >
        
         
            </ImageBackground>   
          ))
        }
         
       </ScrollView>
       <View>
        <Text style={{marginLeft:20,fontFamily:'Bold',fontSize:24}}>
          {item.attributes?.title}
        </Text>
        <Text style={{marginLeft:20,fontFamily:'Medium',fontSize:16}}>
          {item.attributes?.price} ETB
        </Text>
        <Text style={{marginLeft:20,fontFamily:'Medium',fontSize:16}}>
          {item.attributes?.desc}
        </Text>
        <Text style={{marginLeft:20,fontFamily:'Medium',fontSize:16}}>
          Size : {item.attributes?.Size}
        </Text>
       </View>
       <View style={{display:'flex',flexDirection:'row',marginLeft:20,marginTop:15,marginBottom:15}}>

       <View style={{width:100,backgroundColor:COLORS.color4,padding:10,}}>
        <Pressable  onPress={()=>  setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}> 
        <Ionicons name={ "remove-outline" } style={{fontSize:20,color:'white',textAlign:'center'}}/>
        
        </Pressable>
       </View>
       <View style={{width:100,backgroundColor:COLORS.color3,padding:10,textAlign:'center'}}>
        <Pressable    style={{fontSize:20,color:COLORS.color4,textAlign:'center',fontFamily:'Medium'}}>{quantity}</Pressable>
       </View>
       <View style={{width:100,backgroundColor:COLORS.color4,padding:10}}>
        <Pressable  onPress={()=>  setQuantity((prev) => prev + 1)}>
        <Ionicons name={ "add-outline" } style={{fontSize:20,color:'white',textAlign:'center'}}/>

        </Pressable>
       </View>

       </View>
       <View style={{width:300,backgroundColor:COLORS.color4,padding:15,marginLeft:20,textAlign:'center',
       fontFamily:'Medium',textTransform:'uppercase',color:COLORS.color3}}>
        <Pressable  onPress={()=>    dispatch(addToCart({
       
       id:item.id,
       title: item.attributes.title,
       price: item.attributes.price,
       Color: item.attributes.Color,
       Size: item.attributes.Size,
       category: item.attributes.category,
       desc: item.attributes.desc,
       gallery: item.attributes.gallery,
       info: item.attributes.info,
       review: item.attributes.review,
       desc: item.attributes.desc,
        quantity,
    }))}><Text style={{ textAlign:'center',
    fontFamily:'Medium',textTransform:'uppercase',color:COLORS.color3}}>Add to Cart</Text></Pressable>
       </View>
       <Text style={{marginLeft:20,fontFamily:'Medium',fontSize:16,marginTop:30}}>
         Description  
        </Text>
        <Text style={{marginLeft:20,fontFamily:'Regular',fontSize:14,marginTop:5}}>
        
         {item.attributes?.desc}
        </Text>
        <Text style={{marginLeft:20,fontFamily:'Medium',fontSize:16,marginTop:30}}>
         Information
        </Text>
        <Text style={{marginLeft:20,fontFamily:'Regular',fontSize:14,marginTop:5}}>
        
        {item.attributes?.info}
       </Text>
        <Text style={{marginLeft:20,fontFamily:'Medium',fontSize:16,marginTop:30}}>
         Reviews
        </Text>
        <Text style={{marginLeft:20,fontFamily:'Regular',fontSize:14,marginTop:5}}>
        
        {item.attributes?.review}
       </Text>
       <Text style={{marginLeft:20,fontFamily:'Bold',fontSize:18,marginTop:30,textAlign:'center'}}>
       You May Also Like
        </Text>
       </ScrollView>
    </View>
  )
}

export default Product

const styles = StyleSheet.create({

  wrap:{
    margin:20,
    width:WIDTH - 40,
     height:355,
   

}
, container2: { 
  backgroundColor:'transparent',
  

  
  height:300,

  width:WIDTH - 40,


}
})