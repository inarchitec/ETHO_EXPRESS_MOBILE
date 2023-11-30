import { StyleSheet, Text, View,Dimensions } from 'react-native'
import React from 'react'
import {Ionicons} from '@expo/vector-icons';

const WIDTH = Dimensions.get('window').width;

const Servicebar = () => {
  return (
    <View style={styles.container}>

        <View style={styles.next}>

            <View style={styles.then}>
                <View   style={styles.and}>
                                    <Text><Ionicons name={ "rocket-outline" } style={{fontSize:20}}/></Text>
                        </View>
                        <View  style={styles.annd}  >
                                    <Text>FREE SHIPING</Text>
                                    <Text>Orders over $100</Text>
                        </View>

        
                        <View    style={styles.and} >
                        <Text><Ionicons name={ "sync-circle-outline" } style={{fontSize:20}}/></Text>
                        </View>
                        <View   style={styles.annd} >
                                    <Text>FREE RETURN</Text>
                                    <Text>Within 30 days returns</Text>
                        </View>
                </View>
                    

        </View>
        
        <View style={styles.next}>

<View style={styles.then}>
    <View   style={styles.and}>
    <Text><Ionicons name={ "lock-closed-outline" } style={{fontSize:20}}/></Text>

            </View>
            <View  style={styles.annd}  >
                        <Text>SUCURE PAYMENT</Text>
                        <Text>100% secure payment</Text>
            </View>


            <View    style={styles.and} >
            <Text><Ionicons name={ "bookmark-outline" } style={{fontSize:20}}/></Text>

            </View>
            <View   style={styles.annd} >
                        <Text>BEST PEICE</Text>
                        <Text>Guaranteed price</Text>
            </View>
    </View>
        

</View>
        


    </View>
  )
}

export default Servicebar

const styles = StyleSheet.create({
    container: {
        flex: 2,
        flexDirection:'col',
        width:WIDTH,
            
        height:100,
        marginTop:30
        
    },next:{
       alignItems:'left',
       justifyContent:'center',
        width:WIDTH,
        height:100,
     
        backgroundColor:'#F6F7FB',
    },then:{
        display:'flex',
       flexDirection:'row',
       alignItems:'center',
       justifyContent:'center',
     
    },and:{
        alignItems:'center',
        justifyContent:'center',
        padding:5, display:'flex',
        flexDirection:'col',
    },annd:{
       
        display:'flex',
        flexDirection:'col',
        padding:5

    }

})