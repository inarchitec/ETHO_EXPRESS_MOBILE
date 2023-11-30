 import { SafeAreaView, ScrollView, Dimensions, StyleSheet, Text, View ,Pressable} from 'react-native'
 import React from 'react'
 import styles from './home.style'
 import {Ionicons} from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-web';
import Search from '../components/Search';
import Carousel from '../components/Carousel';
import CategoryPost from '../components/CategoryPost';
import Trending from '../components/Trending'
import Onsale from '../components/Onsale';
import Bestsale from '../components/Bestsale';
import Topviewed from '../components/Topviewed';
import Dealoftheday from '../components/Dealoftheday';
import Blog from '../components/Blog';
import Servicebar from '../components/Servicebar';
import { useNavigation } from '@react-navigation/native';


const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
 const Home = () => {
  const navigation = useNavigation(); 

   return (
    <SafeAreaView>
     <View  style={styles.appBarWrapper}>
      <View style={styles.appBar}>
        <Text style={styles.companyTxt}>etho express</Text>
        <View style={{marginLeft:120}}>

      <Pressable  onPress={() =>  navigation.navigate('Profile')}>
      <Ionicons name="people-circle-outline" size={32}  ></Ionicons>
      </Pressable>
        </View>

            <Pressable onPress={() =>  navigation.navigate('Cart')} >
        <View style={{ alignItems:'flex-end'}}>
            <View style={styles.cartcount}>
              <Text style={styles.cartNumber}>
                    10
              </Text>

            </View>
            
            <Ionicons name="cart-outline" size={32}  ></Ionicons>
        </View>
            </Pressable>
      </View>
     </View>
     <View style={{flex:1,marginTop:20 }}>

          <ScrollView
            Vertical
            showsHorizontalScrollIndicator={false}
            style={{height: HEIGHT  ,width:WIDTH, paddingBottom:200}}
            
            
            >
            <Search></Search>
       <Carousel></Carousel>
           <CategoryPost></CategoryPost>  
                  <Trending type="trending"></Trending>   

<Onsale></Onsale>
<Bestsale></Bestsale>
<Topviewed></Topviewed>
<Dealoftheday></Dealoftheday>
<Blog></Blog>
<Servicebar></Servicebar>
                             </ScrollView>
     </View>
     </SafeAreaView>
   )
 }
 
 export default Home
 
/*  const styles = StyleSheet.create({}) */