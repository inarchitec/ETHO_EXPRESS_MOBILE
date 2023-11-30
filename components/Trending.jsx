import { StyleSheet, Text, View, ScrollView ,Dimensions,ImageBackground} from 'react-native'
import React from 'react'
import {COLORS ,SIZES} from '../constants';
import { Button } from "native-base";
 import { useState } from 'react';
 import useFetch from '../hooks/useFetch';
 import {REACT_APP_UPLOAD_URL} from '@env';


 const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
const Trending = ({type}) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  );
/* console.log('Trending', data) */
const [selectedCateg, setSelectedCateg] = useState([]);
/*  console.log('selectedCateg',selectedCateg)
 */     const categ = data?.map((x)=>(
        
        x.attributes?.category?.data?.attributes.title 
       
     ))

     const removeDuplicates = (categ) => {

        return categ?.filter((value,index) => categ.indexOf(value) === index)
     }
     const categ_data = removeDuplicates(categ)
 
  return (
    <View style={styles.collec}>
 
      <View>
    
      <Text style={styles.theheader}>Trending items</Text>
      {
      categ_data?.map((y)=> (
                                      <View>
                                        <Text    style={styles.btntxt}>

                                             {y}
                                        </Text>
                                      </View>
      
                                        ))
                                    }
      </View>
      <View>
       
        
        <View style={styles.wrap}>
            <ScrollView
            onScroll={({nativeEvent}) => Onchange(nativeEvent) }
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            horizontal
            style={styles.wrap}
            >
            {
      data?.map((e,item) => (
        <View key={e.id}>
          

      <ImageBackground source={REACT_APP_UPLOAD_URL + e.attributes?.gallery?.data[0].attributes?.url} style={styles.container}>
        
         
           
        
      
          <Text style={styles.thetxt1}>{e.attributes?.title}</Text>
          <Text style={styles.thetxt2}>{e.attributes?.price} ETB</Text>
      </ImageBackground>
   
        </View>
      ))
     }
               </ScrollView>
               
           
          </View>
      </View>
    </View>
  )
}

export default Trending

const styles = StyleSheet.create({
  collec:{
    marginTop:50,
    flex:1,
  },
    theheader:{
        fontSize:SIZES.large,
        textTransform:'capitalize',
        fontFamily:'Medium',
        textAlign:'center',
       
       
    },customButton:{
      width:100,
      margin:10,
      flex:1,
      backgroundColor: "#009688",
    },therow:{
      padding:10,
      flex:1,
      direction:'flex',
      flexDirection:'row',
    },wrap:{
     
        width:WIDTH,
        height:HEIGHT * 0.35
    
    },
    container: { 
        backgroundColor:'transparent',
        justifyContent:'center',
        alignContent:'center',
        marginLeft:30,
        marginRight:25,
        marginTop:25,
        marginBottom:10,
        height:300,
        width: 330,
      
    },thetxt1:{
      color:COLORS.color1,
      fontFamily:'Bold',
      marginTop:180,
      marginLeft:30
    },thetxt2:{
      color:'white',
      marginLeft:30

      
    },btntxt:{
      marginLeft:30
    }

})