import { StyleSheet, Text, View ,ScrollView, ImageBackground, Dimensions, Pressable} from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../constants'
import useFetch from '../hooks/useFetch'
import {REACT_APP_UPLOAD_URL} from '@env';
import { useNavigation } from '@react-navigation/native';

import Product from '../screens/Product';
 
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
const Dealoftheday = () => {
    const {data} = useFetch(
        `/products?populate=*&[filters][deal_of_the_day][$eq]='true'`
      );
   /*    console.log(data,'Dealoftheday') */
      const navigation = useNavigation(); 

  return (
    <View>
      <Text style={styles.mainn}>Deal of theday</Text>
      <View style={styles.card}> 
      <ScrollView
          
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            horizontal
            style={styles.wrap}
            >
            {
      data?.map((e,item) => (
        <View key={e.id} style={styles.container}>
        <Pressable onPress={() => navigation.navigate('Product',{state:{e}})}>
            
          
          <View style={{display:'flex',flexDirection:'row'}}>

        
     <ImageBackground source={REACT_APP_UPLOAD_URL + e.attributes?.gallery?.data[0].attributes?.url} style={styles.container2} >
        
         
      </ImageBackground>   
            <View style={styles.container3}>
           
 
 
<Text style={styles.txt1} >
DEAL OF DAY
            </Text>
 
            <Text style={styles.txt2} >
            {e.attributes.title}
            </Text>
            <Text style={styles.txt2} >
            {e.attributes.desc}
            </Text>
             
                    <Text  style={styles.txt2}>

                    {e.attributes?.price - e.attributes?.discount} ETB <s>{e.attributes?.price} ETB</s>
                    </Text>
                    <Text style={styles.txt2} >
                    1 Day Left
            </Text>
          
            </View>
        
     
      
        
     
      </View>
        </Pressable>
        </View>
      ))
     }
               </ScrollView>
               
      </View>
    </View>
  )
}

export default Dealoftheday

const styles = StyleSheet.create({
    mainn:{
        marginTop:20,
        marginLeft:30,
        marginBottom:10,
        fontFamily:'Medium',
        textTransform:'capitalize',
        fontSize:SIZES.large,
        textAlign:'center'
       
       
    },card:{
    backgroundColor: 'transparent',
    width:WIDTH,
    height:160,
  
 

    },wrap:{
     
        width:WIDTH,
        height:155,
       
    
    }, container: { 
        backgroundColor:'white',
        borderWidth:  1,
        borderColor:'lightgray',
        justifyContent:'center',
        alignContent:'center',
      
        width:WIDTH -30,

        height:160,
    marginLeft:5

      
    }
    , container2: { 
        backgroundColor:'transparent',
        
      
        
        height:160,

        width:WIDTH / 2 -30,

      
    }, container3: { 
        scale: 0.9,
        textAlign:'center',
      justifyContent:'center',
        backgroundColor:'transparent',
       
        alignContent:'center',
         
        height:160,
        width:WIDTH / 2 -30,


      
    },txt1:{
         
      textAlign:'center',
         textTransform:'capitalize',
         fontFamily:'Medium'
         
    },txt2:{
      textAlign:'center',

        fontFamily:'Regular',
       fontSize:SIZES.small,
        alignItems:'center',
     
        
      

        
    }
})