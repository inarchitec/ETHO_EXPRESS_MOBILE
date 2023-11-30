import React from "react";
import Carousel from "./Carousel";
import { StyleSheet, Pressable, View,Text } from "react-native";
 
import { COLORS } from "../constants";



export default function CarouselButton({text,onPress}) {
    return(
        <Pressable onPress={onPress}>
            <View style={styles.Button}>
                    <Text style={styles.Buttontxt}>
                        {text}
                    </Text>
            </View>
        </Pressable>
    )
}
const styles = StyleSheet.create({
    Button:{
     
        paddingVertical:5,
        paddingHorizontal:10,
        
        backgroundColor:COLORS.color4,
        width:130
    },
    Buttontxt:{
        color:'white',
        fontFamily:'Regular',
        textAlign:'auto',
        paddingLeft:10,
        textTransform:'uppercase'
    }
})