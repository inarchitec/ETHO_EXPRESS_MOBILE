import { StyleSheet, Text, View ,ScrollView, ImageBackground, Dimensions, Pressable} from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../constants'
import useFetch from '../hooks/useFetch'
import {REACT_APP_UPLOAD_URL} from '@env';
import { useNavigation } from '@react-navigation/native';

import Product from '../screens/Product';
 
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
const Onsale = () => {
    const {data} = useFetch(
        `/products?populate=*&[filters][onsale][$eq]='true'`
      );
  /*     console.log(data,'onsale') */
      const navigation = useNavigation(); 

  return (
    <View>
      <Text style={styles.mainn}>Onsale</Text>
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
            {e.attributes.title}
            </Text>
            <View  style={styles.txt2}>
                    <Text style={{padding:5}}>

            {e.attributes.price} ETB
                    </Text>
            </View>
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

export default Onsale

const styles = StyleSheet.create({
    mainn:{
        marginTop:200,
        marginLeft:30,
        fontFamily:'Medium',
        textTransform:'capitalize',
        fontSize:SIZES.large,
      
       
    },card:{
    backgroundColor: 'transparent',
    width:WIDTH,
    height:160,
    marginLeft:10,
    marginRight:30,
    marginTop:10,
 

    },wrap:{
     
        width:WIDTH,
        height:155,
    
    }, container: { 
        backgroundColor:'white',
        borderWidth:  1,
        borderColor:'lightgray',
        justifyContent:'center',
        alignContent:'center',
       padding:10,
       marginLeft:10,
        width:330,
        height:150,
      
    }
    , container2: { 
        backgroundColor:'transparent',
        justifyContent:'center',
        alignContent:'center',
      
        marginRight:25,
        marginTop:10,
        marginBottom:10,
        height:130,
        width: 150,
      
    }, container3: { 
        backgroundColor:'transparent',
        justifyContent:'flex-end',
        alignContent:'center',
        marginLeft:5,
        marginRight:30,
        marginTop:10,
        marginBottom:10,
        height:130,
        width: 150,
      
    },txt1:{
         
         padding:5,
         textTransform:'capitalize',
         fontFamily:'Medium'
         
    },txt2:{
        backgroundColor:COLORS.color1,
        width:110,
        alignItems:'center',
        borderRadius:10,
       
       marginBottom:10
        
      

        
    }
})