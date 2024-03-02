import { StyleSheet, Text, View,SafeAreaView,Dimensions ,Image, ImageBackground, Button } from  'deprecated-react-native-prop-types';
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { ScrollView } from 'react-native';
import { SIZES, COLORS } from '../constants';
// import CarouselButton from '../components/CarouselButton'
import useFetch from '../hooks/useFetch';
import {REACT_APP_UPLOAD_URL} from '@env';


const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
 const Carousel = () => {

  const { data, loading, error } = useFetch(`/main-posts?populate=*`);
  // console.log(data, 'carosel')

  const navigation = useNavigation();
   const [imgActive, setimgActive] = useState(0);
/*    console.log(imgActive,'imgActive') */
  //  onchange = (nativeEvent) =>
  //  {
  //     if(nativeEvent){

  //       const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.Width)
  //       console.log(slide,'slide')
  //       if(slide != imgActive) {
  //         setimgActive(slide);
  //       }
  //     }
  //  }
      return (
        <View>
       <SafeAreaView style={styles.container}>

          {/* <View style={styles.wrap}>
            <ScrollView

            showsHorizontalScrollIndicator={false}
            pagingEnabled
            horizontal
            style={styles.wrap}
            >
              {
                data?.map((e, index) =>


                <ImageBackground
                key={e.id}
                resizeModel='stretch'
                style={styles.wrap}

                source={REACT_APP_UPLOAD_URL + e.attributes?.image?.data.attributes?.url}

                >
 <Text style={styles.txxt1}>UP TO 50% OFF</Text>
 <Text style={styles.txxt2}>Spice For Shiro wet</Text>
 <Text  style={styles.txxt3}>Maboriosam in a nesciung eget magnae dapibus disting tloctio in the
  find it pereri odiy maboriosm.</Text>

  <View  style={styles.txxt4}>

  <CarouselButton text='shop now !'  onPress={() => navigation.navigate('Shop')}/>
  </View>
                </ImageBackground>



                )
              }
               </ScrollView>


          </View> */}
              {/* <View style={styles.wrapDot}>

                  {
                    images.map((e, index) =>
                    <Text key={e}

                    style={imgActive == index ? styles.dotActive : styles.dot}
                    >
                    ●
                    </Text>
                    )
                  }
              </View> */}
       </SafeAreaView>
       </View>
      )


}

export default Carousel
const styles = StyleSheet.create({
  container:{
    flex:1,
    marginBottom:20,

  },
  wrap:{
    width:WIDTH,
    height:HEIGHT * 0.35
  },
  wrapDot:{
     position:'absolute',
    bottom:0,
    flexDirection:'row',
    alignSelf:'center'

  },
  dotActive:{
    margin:3,
    color:COLORS.color1
  },
  dotActive:{
    margin:3,
    color:COLORS.color2
  },txxt1:{
    color:COLORS.color3,
    fontFamily:'Medium',
    marginLeft:50,
    marginTop:35
  },
  txxt2:{
    color:COLORS.color1,
    fontFamily:'Bold',
    textTransform:'capitalize',
    fontSize:SIZES.large,
    marginLeft:50,
    marginTop:30
  },
  txxt3:{
    color:COLORS.color3,
    width:250,
    marginLeft:50,

    fontFamily:'Regular',
    fontSize:12
  },
  txxt4:{
    color:COLORS.color3,
    fontSize:SIZES.small,
    marginLeft:50,
    width:50,
    marginTop:10

  }


})
