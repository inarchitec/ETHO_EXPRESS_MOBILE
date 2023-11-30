import { StyleSheet, Text, View ,ScrollView, ImageBackground, Dimensions, Pressable} from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../constants'
import useFetch from '../hooks/useFetch'
import {REACT_APP_UPLOAD_URL} from '@env';
import { useNavigation } from '@react-navigation/native';


const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;


const Blog = () => {
    const { data, loading, error } = useFetch(`/blogs?populate=*&`);
   /*    console.log(data,'Blog') */
      const navigation = useNavigation(); 
  return (
    <View>
    <Text style={styles.mainn}>Our Blogs</Text>
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
      <Pressable /*  onPress={() => navigation.navigate('Product',{ data:e})} */ >
          
        
        <View style={{display:'flex',flexDirection:'col'}}>

      
   <ImageBackground source={REACT_APP_UPLOAD_URL + e.attributes.image.data[0].attributes?.url} style={styles.container2} >
      
       
    </ImageBackground>   
          <View style={styles.container3}>

          <Text style={styles.txt1} >
          {e.attributes.title}
          </Text>
          <Text  style={styles.txt2}>
          Continue Reading
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

export default Blog

const styles = StyleSheet.create({
    mainn:{
        marginTop:40,
        marginLeft:30,
        fontFamily:'Medium',
        textTransform:'capitalize',
        fontSize:SIZES.large,
      textAlign:'center'
       
    },card:{
    backgroundColor: 'transparent',
    width:WIDTH,
    height:220,
    marginLeft:10,
    marginRight:30,
    marginTop:10

    },wrap:{
       
       
        width:WIDTH,
        height:455,
    
    }, container: { 
        backgroundColor:'transparent',
      
        justifyContent:'center',
        alignContent:'center',
      alignItems:'center',
       width:300,

        height:200,
      
    }
    , container2: { 
        backgroundColor:'transparent',
        justifyContent:'center',
        alignContent:'center',
      textAlign:'center',
      
        height:130,
        width: 250,
      
    }, container3: { 
        backgroundColor:'transparent',
        textAlign:'center',
      
     
        
      
    },txt1:{
        textAlign:'center',
         
         padding:5,
         textTransform:'capitalize',
         fontFamily:'Medium'
         
    },txt2:{
     
        alignItems:'center',
        textAlign:'center',

    
        
      

        
    }
})