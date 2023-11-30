import { ImageBackground,StyleSheet, Text, View,SafeAreaView, ScrollView, Dimensions } from 'react-native'
import React from 'react'
import {COLORS ,SIZES} from '../constants';
 import useFetch from '../hooks/useFetch';
 import {REACT_APP_UPLOAD_URL} from '@env';

const image = {uri: 'https://legacy.reactjs.org/logo-og.png'};
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
const CategoryPost = () => {
  const { data, loading, error } = useFetch(`/category-posts?populate=*&`);
  /* console.log(data, 'data') */

  return (
    <SafeAreaView 
     
    >
    <View  style={styles.main}>

    <View style={styles.thegrid}>
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
          

      <ImageBackground source={REACT_APP_UPLOAD_URL + e.attributes?.image?.data[0].attributes?.url} style={styles.container}>
        
         
           
          <Text style={styles.thetxt1}>{e.attributes?.title}</Text>
          <Text style={styles.thetxt2}>{e.attributes?.heading}</Text>
          <Text style={styles.thetxt3}>{e.attributes?.linktxt}</Text>
      
      </ImageBackground>
        </View>
      ))
     }
    </ScrollView>
    </View>
    </View>
    </SafeAreaView>
  )
}

export default CategoryPost

const styles = StyleSheet.create({
    main:{
      flex:2,
    },
    thegrid:{
        display:'flex',
        flexDirection: "col",
       flex:2,
      
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
      fontSize:SIZES.medium,
      color:COLORS.color1,
      marginLeft:35,
      textTransform:'capitalize'
    },thetxt2:{
      fontSize:SIZES.large,
      color:COLORS.color3,
      marginLeft:35,
      paddingTop:15,
      paddingBottom:15,
      fontFamily: 'Bold',
      textTransform:'capitalize'

    },thetxt3:{
      fontSize:SIZES.medium,
      color:COLORS.color3,
      marginLeft:35,
      textTransform:'capitalize'

    },
    wrap:{
      width:WIDTH,
      height:HEIGHT * 0.35
    }
})