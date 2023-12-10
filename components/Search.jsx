import { StyleSheet, Text, View ,TextInput,Pressable} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

import {Ionicons} from '@expo/vector-icons';
import styles from './search.style';
import { Button, SearchBar } from 'react-native-elements';
import { useState } from 'react';
const Search = () => {
    const [search, setSearch]= useState('');
    console.log(search, 'search')
    // const searchvalue = (z) =>{
    //   console.log(z)
    // }
    const navigation = useNavigation(); 
	 

    const pass = {
      "search":search,
      

  }
 
  return (
    <View style={styles.searchbartop}>
         

        <TextInput   style={styles.inputt}
            placeholder="search"
              
             onChange={(e) => setSearch(e.target.value)}
        />
   
        <Pressable onPress={() =>  navigation.navigate('Shop', {state:{pass}})}>

       <View style={styles.btnn}>
       <Ionicons name="search-outline" 
       
       style={styles.searcol} size={24} ></Ionicons>

       </View>
        </Pressable>


      
    </View>
  )
}

export default Search

 