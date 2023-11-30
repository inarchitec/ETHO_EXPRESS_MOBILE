import { StyleSheet, Text, View,Dimensions, ImageBackground, Pressable, ScrollView } from 'react-native'
import React from 'react'
import { REACT_APP_UPLOAD_URL } from "@env";
import {Ionicons} from '@expo/vector-icons';
import { COLORS } from '../constants';
import { DataTable } from 'react-native-paper'; 
import { useSelector, useDispatch } from 'react-redux';
import { incrementQuantity,
	decrementQuantity,
	removeItem, } from "../redux/cartSlice";
    import { useNavigation } from '@react-navigation/native';

    import { UserData } from '../helper/helper';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
const Cart = () => {
    const Cart_Products = useSelector((state) => state.Cart_Products);
    const dispatch = useDispatch();
    const final_pay = Cart_Products.reduce((total, item)=>total+(item.price*item.quantity),0)
  //  console.log('final_pay',final_pay)
  //  console.log('Cart_Products',Cart_Products)

  const navigation = useNavigation(); 
  const user_info = UserData();
  // console.log('user_info',user_info) 

  return (
    <View  >
       <ScrollView
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        vertical
        style={{height: HEIGHT  ,width:WIDTH, paddingBottom:200}}
       
       >
								 

        <DataTable style={styles.container}> 
      <DataTable.Header style={{display:'flex',flexDirection:'row',width:WIDTH,backgroundColor:COLORS.color1   }}> 
        <DataTable.Title style={{textTransform:'uppercase',fontFamily:'Bold',margin:10}}><View><Text>PRODUCT</Text></View></DataTable.Title> 
        <DataTable.Title style={{textTransform:'uppercase',fontFamily:'Bold',margin:10}}><View><Text>UNIT PRICE</Text></View></DataTable.Title> 
        <DataTable.Title style={{textTransform:'uppercase',fontFamily:'Bold',margin:10}}><View><Text>QUANTITY</Text></View></DataTable.Title> 
        <DataTable.Title style={{textTransform:'uppercase',fontFamily:'Bold',margin:10}}><View><Text>TOTAL</Text></View></DataTable.Title> 
      </DataTable.Header> 
       
  
       
      {
								Cart_Products.map(item =>(
									<DataTable.Row key={item.id} style={{backgroundColor:'transparent',display:'flex',flexDirection:'row',width:WIDTH - 20 }}>
								<DataTable.Cell style={{textTransform:'uppercase',fontFamily:'Bold',margin:2, }}>
                                    <View style={{display:'flex', flexDirection:'col'}}>

                                    
								  <img src={process.env.REACT_APP_UPLOAD_URL + item.gallery?.data[0].attributes?.url} alt="#"style={styles.container2} /> 
								 
									<View style={{textTransform:'uppercase',fontFamily:'Regular',margin:2, fontSize:10}}><Text>{item.title}</Text></View>
                                    </View>
								</DataTable.Cell>
								<DataTable.Cell  >
                                    <View style={{textTransform:'uppercase',fontFamily:'Regular',margin:5, fontSize:13}}>
                                        <Text>

                                    {item.price} 
                                        </Text>
                                    </View>
                                    </DataTable.Cell>
								<View  style={{textTransform:'uppercase',fontFamily:'Regular',margin:2}}> 
									<DataTable.Cell style={{display:'flex',flexDirection:'row'}}>
										<View style={{width:30,height:30,backgroundColor:COLORS.color4,padding:1}}>
											<Pressable  
											  onPress={() => dispatch(decrementQuantity(item.id))}
											  
											>
											<Ionicons name={ "remove-outline" } style={{fontSize:20,color:'white',textAlign:'center'}}/>

											</Pressable>
										</View>
                                        <View style={{width:30,height:30,backgroundColor:COLORS.color3,padding:1,textAlign:'center'}}>
                                            <View  style={{fontSize:20,color:COLORS.color4,textAlign:'center',fontFamily:'Medium'}}>
                                                <Text>

                                                {item.quantity}
                                                </Text>
                                                </View>
										 

                                        </View>
										<View   style={{width:30,height:30,backgroundColor:COLORS.color4,padding:1}}>
											<Pressable  
											 onPress={() => dispatch(incrementQuantity(item.id))}
											
											>
											<Ionicons name={ "add-outline" } style={{fontSize:20,color:'white',textAlign:'center'}}/>
											</Pressable>
										</View>
									</DataTable.Cell>
									{/*/ End Input Order */}
								</View>
								<DataTable.Cell  style={{textTransform:'uppercase',fontFamily:'Regular',margin:5}}>
                                    <View style={{display:'flex',flexDirection:'col'}}>
                                        <View  style={{textTransform:'uppercase',fontFamily:'Regular',margin:5, fontSize:13}}>   {item.price * item.quantity} </View>


								<Pressable  
											 onPress={() => dispatch(removeItem(item.id))}
											
											>
												 	<Ionicons name={ "trash-outline" } style={{fontSize:20,color:COLORS.color4,textAlign:'center'}}/>
											</Pressable>
                                    </View>
                                 
								 
								</DataTable.Cell>
									</DataTable.Row>
								))
							}
    </DataTable> 

    <DataTable style={{width:300,margin:20,marginTop:300}}> 
        
      <DataTable.Row> 
        <DataTable.Cell> 
        <View style={styles.tableHeader3}>

        Cart Subtotal
            </View>
            </DataTable.Cell> 
            <DataTable.Cell> 
        <View style={styles.tableHeader4}>

        {Cart_Products.reduce((total, item)=>total+(item.price*item.quantity),0)}
            </View>
            </DataTable.Cell> 
         
      </DataTable.Row> 
      <DataTable.Row> 
        <DataTable.Cell> 
        <View style={styles.tableHeader3}>

        Delivery
            </View>
            </DataTable.Cell> 
            <DataTable.Cell> 
        <View style={styles.tableHeader4}>

       Free
            </View>
            </DataTable.Cell> 
         
      </DataTable.Row> 
      <DataTable.Row> 
        <DataTable.Cell> 
        <View style={styles.tableHeader3}>

        You Pay
            </View>
            </DataTable.Cell> 
            <DataTable.Cell> 
        <View style={styles.tableHeader4}>

        {final_pay}
            </View>
            </DataTable.Cell> 
         
      </DataTable.Row> 
     
       
      <DataTable.Row> 
        <DataTable.Cell  >
      <Pressable 
      
      
      onPress={() =>  navigation.navigate(user_info == '' ? 'Login' : 'Checkout')} >

            <View style={styles.tableHeader2}>

            CHECKOUT
            </View>
      </Pressable>
        </DataTable.Cell> 
        
 
        
      </DataTable.Row> 
      <DataTable.Row> 
        

        <DataTable.Cell  >
        <Pressable onPress={() =>  navigation.navigate('Shop')} >

            <View style={styles.tableHeader2}>

            CONTINUE SHOPPING
            </View>
        </Pressable>
        </DataTable.Cell> 
        
      </DataTable.Row> 
    </DataTable> 
    </ScrollView>
        </View>
  )
}

export default Cart

const styles = StyleSheet.create({
    container2: { 
        backgroundColor:'transparent',
        
      
        
        height:50,
      
        width:WIDTH / 5,
      
      
      },
      container: { 
        padding: 2, 
       
        
      }, 
      tableHeader: { 
        backgroundColor: COLORS.color1, 
      },
      tableHeader2: { 
        backgroundColor: COLORS.color4, 
        color:'white',
        fontFamily:'Regular',
        width:300,
        marginTop:2,
        paddingTop:15,
        paddingBottom:15,
        textAlign:'center'
        // paddingLeft:40,
        // paddingRight:40,
      },
      
      tableHeader3: { 
        backgroundColor: 'transparent', 
        color: COLORS.color4,
        fontFamily:'Regular',
        width:150,
        marginTop:2,
        paddingTop:15,
        paddingBottom:15,
        textAlign:'left'
        // paddingLeft:40,
        // paddingRight:40,
      },
      tableHeader4: { 
        backgroundColor: 'transparent', 
        color: COLORS.color4,
        fontFamily:'Regular',
        width:150,
        marginTop:2,
        paddingTop:15,
        paddingBottom:15,
        textAlign:'right'
        // paddingLeft:40,
        // paddingRight:40,
      },
})