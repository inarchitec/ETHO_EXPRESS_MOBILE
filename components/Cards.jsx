import { StyleSheet, Text, View,ImageBackground,Dimensions,Pressable} from 'react-native'
import React from 'react'
import { REACT_APP_UPLOAD_URL } from "@env";
 
 import { Card } from "react-native-paper";

 import { useNavigation } from '@react-navigation/native';


const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;
const Cards = ({item}) => {
    // console.log(item, 'item')
    const navigation = useNavigation(); 
    const e = item
    
    const pass = {
      "product":item,
      

  }
  // console.log(pass, 'card')
  return (
    <Pressable onPress={() =>  navigation.navigate('Product',  {state:{e}})}>
       
    <Card 
    style={{
      backgroundColor: "white",
     width: WIDTH / 2.2,
    /*  height: HEIGHT / 5, */
     margin: 6, 
     display:'flex',
     flexDirection:'row',
     flexWrap:'wrap',
    borderRadius:0,
   
   }}
    >
              <View
               
              
              >
                <ImageBackground
                  source={
                    REACT_APP_UPLOAD_URL +
                    item.attributes?.gallery?.data[0].attributes?.url  
                  }
                  alt='image'
                  style={styles.ggg}
                /> 
                

                <Text style={{fontFamily:'Medium',marginLeft:10 }}>
                 {item?.attributes?.title}
                </Text> 
                <Text style={{fontFamily:'Medium',marginLeft:10 }}>
                 {item?.attributes?.price} ETB
                </Text>
                
               
              </View>
              </Card>  
              </Pressable>
    
  )
}

export default Cards

const styles = StyleSheet.create({
  ggg: {
  backgroundColor: "transparent",
  justifyContent: "center",
  alignContent: "center",
  // marginLeft: 30,
  // marginRight: 25,
  // marginTop: 25,
  // marginBottom: 10,
  width: WIDTH / 2.4,
  height: HEIGHT / 5.9,
  margin:6
},

})