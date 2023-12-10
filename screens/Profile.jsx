import { ScrollView, StyleSheet, Text, View,Dimensions, Pressable } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { DataTable } from "react-native-paper";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { useState, useEffect } from "react";
import { UserData } from "../helper/helper";
import { REACT_APP_UPLOAD_URL } from "@env";
import { REACT_APP_API_URL } from "@env";
import { REACT_APP_API_TOKEN } from "@env";
import { COLORS } from "../constants";
import AsyncStorage from '@react-native-async-storage/async-storage';
 
 
  
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const Profile = () => {
  const navigation = useNavigation();

  const user_info = UserData();
  const [error, setError] = useState();
  const [payinfo, setPayinfo] = useState();
  const Cart_Products = useSelector((state) => state.Cart_Products);
  console.log(user_info, 'user_info')
  /* console.log(Cart_Products,'Cart_Products') */
  const Email = user_info.email;
  // console.log(Email);
  
  const payment_info = async () => {
    const url = REACT_APP_API_URL + `/payment-info`;
    const datas = {
      email: Email,
    };

    try {
      await axios
        .post(url, datas, {
          headers: {
            Authorization: "bearer " + REACT_APP_API_TOKEN,
          },
        })
        .then((response) => setPayinfo(response.data));
    } catch (error) {
      setError(error.response.data);
      // console.log(error, "error");
    }
  };

  useEffect(() => {
    payment_info();
  }, []);

  // console.log(payinfo, "payinfo");
  const logout = () =>{
	AsyncStorage.removeItem("user",{})
	navigation.navigate('Home')
}

  return (
    <View>
      <ScrollView
      showsHorizontalScrollIndicator={false}
      pagingEnabled
      vertical
      style={{height: HEIGHT  ,width:WIDTH, paddingBottom:200}}

      >

        {
            user_info == null ? (
                <Pressable style={{alignItems:'center'}} onPress={() =>  navigation.navigate('Login')}>
                <Text style={{ margin:10,width:WIDTH-250,height:50,boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                color:'white',textAlign:'center',textTransform: "uppercase",fontWeight:'Medium',
                fontSize:19,padding:10,backgroundColor:COLORS.color1 }}>
                Login
                </Text>
                
            </Pressable>
            
            ) : (

                <Pressable style={{alignItems:'center'}} onPress={logout}>
                <Text style={{ margin:10,width:WIDTH-250,height:50,boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                color:'white',textAlign:'center',textTransform: "uppercase",fontWeight:'Medium',
                fontSize:19,padding:10,backgroundColor:COLORS.color1 }}>
                Logout
                </Text>
                
            </Pressable>
            )
        }
       
        <DataTable  style={{ margin:10,width:WIDTH-20,boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}}>
           
            <DataTable.Row>
              <DataTable.Cell style={{ textTransform: "uppercase" }}>
              <Text  style={{ textTransform: "uppercase",fontWeight:'Bold',fontSize:19 }}>
                 user information </Text>
              </DataTable.Cell>
            </DataTable.Row>
         
         
            <DataTable.Row>
                <DataTable.Cell>
                <Text  style={{ textTransform: "uppercase",fontSize:16 }}>username </Text>
                </DataTable.Cell>
                <DataTable.Cell>

                <Text  style={{ textTransform: "uppercase",fontSize:16 }}>
                {user_info.username}
              </Text>
                </DataTable.Cell>
           </DataTable.Row>
           <DataTable.Row>
            <DataTable.Cell>

            <Text  style={{ textTransform: "uppercase",fontSize:16 }}>first name</Text>
            </DataTable.Cell>
            <DataTable.Cell>

            <Text  style={{ textTransform: "uppercase",fontSize:16 }}>
                {user_info.first_name}
              </Text>
            </DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
                <DataTable.Cell>

                <Text  style={{ textTransform: "uppercase",fontSize:16 }}>last name</Text>
                </DataTable.Cell>
                <DataTable.Cell>

                <Text  style={{ textTransform: "uppercase",fontSize:16 }}>
                {user_info.last_name}
              </Text>
                </DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                <DataTable.Cell>

                <Text  style={{ textTransform: "uppercase",fontSize:16 }}>phone number</Text>
                </DataTable.Cell>
                <DataTable.Cell>

                <Text  style={{ textTransform: "uppercase",fontSize:16 }}>
                {user_info.phone_number}
              </Text>
                </DataTable.Cell>
            </DataTable.Row>
          
        </DataTable>

        <DataTable  style={{ margin:10,width:WIDTH-20,boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}}>
          <DataTable.Row>
             <DataTable.Cell>
             <Text  style={{ textTransform: "uppercase",fontWeight:'Bold',fontSize:19 }}>
             cart information</Text>
             </DataTable.Cell>
           
          </DataTable.Row>
          
            {Cart_Products.map((item) => (
              <DataTable.Row key={item.id}>
                <DataTable.Cell>{item.title}</DataTable.Cell>
                <DataTable.Cell> {item.price} </DataTable.Cell>
                <DataTable.Cell>{item.quantity}</DataTable.Cell>
                <DataTable.Cell> {item.price * item.quantity} </DataTable.Cell>
              </DataTable.Row>
            ))}
         
        </DataTable>

        
          
            <DataTable style={{ margin:10,width:WIDTH-20,boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}}>
            <DataTable.Row >
                <DataTable.Cell>
                <Text  style={{ textTransform: "uppercase",fontWeight:'Bold',fontSize:19, }}>
               
                PAYMENT_INFORMATION
                </Text>
          
                </DataTable.Cell>
            </DataTable.Row>
            </DataTable>
          
            {payinfo?.map((item) => (
                <DataTable key={item.id} style={{ margin:10,width:WIDTH-20,boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}}>
              <DataTable.Row >
                <DataTable.Cell style={{ textTransform: "uppercase", width: "5px" }}>
                <Text  style={{ textTransform: "uppercase",fontSize:12 }}>id:{item.id}</Text>
                </DataTable.Cell>
                <DataTable.Cell><Text  style={{ textTransform: "uppercase",fontSize:10 }}> transaction reference:{item.tx_ref}</Text></DataTable.Cell>
              </DataTable.Row>
                <DataTable.Row>
                <DataTable.Cell><Text  style={{ textTransform: "uppercase",fontSize:12 }}>amount:{item.amount}</Text></DataTable.Cell>
                <DataTable.Cell><Text  style={{ textTransform: "uppercase",fontSize:12 }}>currency:{item.currency}</Text></DataTable.Cell>

                </DataTable.Row>
                
                <DataTable.Row>


                <DataTable.Cell><Text  style={{ textTransform: "uppercase",fontSize:10 }}>created At 
              updated At:{item.createdAt} 
                 {item.updatedAt}</Text></DataTable.Cell>
                <DataTable.Cell><Text  style={{ textTransform: "uppercase",fontSize:12 }}>payment status:{item.payment_status}</Text></DataTable.Cell>
                </DataTable.Row>
                </DataTable>
            ))}
         
       
      </ScrollView>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});
