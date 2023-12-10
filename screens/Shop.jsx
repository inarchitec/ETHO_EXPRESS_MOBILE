import {
  SafeAreaView,
  ScrollView,
  Dimensions,
  StyleSheet,
  Text,
  View,
  Pressable,
  CheckBox,
  ImageBackground,
  Button,
} from "react-native";
import List from "../components/List";
import Card from "../components/Cards";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { COLORS, SIZES } from "../constants";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import Search from "../components/Search";
import useFetch from "../hooks/useFetch";
import { useState } from "react";
import { REACT_APP_UPLOAD_URL } from "@env";
import { RadioButton } from "react-native-paper";
 
import { Dropdown } from 'react-native-element-dropdown';
 

import { value } from "deprecated-react-native-prop-types/DeprecatedTextInputPropTypes";
const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;


const Shop = ({ route  }) => {
const [show , setShow] = useState(false);
//  const pass = route.params; 
 const pass = route.params; 
 const  search  = pass ? pass?.state.pass?.search : '';
 
	// const search = pass ? pass?.state.search : '';
  // console.log(search,'search')
  // console.log( search  , 'pass')

  const Show = [
    { showlabel: '5', showvalue: '5' },
    { showlabel: '10', showvalue: '10' },
    { showlabel: '15', showvalue: '15' },
    { showlabel: '20', showvalue: '20' },
    { showlabel: '25', showvalue: '25' },
    { showlabel: '30', showvalue: '30' },
  ];
  const [showvalue, setshowValue] = useState(10);
 
  const [isshowFocus, setIsshowFocus] = useState(false);

  // console.log(showvalue,'showvalue')
	const [sort, setSort] = useState("created_At");

  const Sort = [
    { sortlabel: 'Name', sortvalue: 'title' },
    { sortlabel: 'Date', sortvalue: 'created_At' },
    { sortlabel: 'Price', sortvalue: 'price' },
   
  ];
  const [sortvalue, setsortValue] = useState("created_At");
  const [issortFocus, setIssortFocus] = useState(false);
  // console.log(sortvalue,'sortvalue')


  
  const Order = [
    { orderlabel: 'Ascending', ordervalue: 'asc' },
    { orderlabel: 'descending', ordervalue: 'desc' },
    
   
  ];
  const [ordervalue, setorderValue] = useState("desc");
  const [isorderFocus, setIsorderFocus] = useState(false);
  // console.log(ordervalue,'ordervalue')

  const[price_min, setPrice_min] = useState(1);
	const[price_max, setPrice_max] = useState(1000000);

  // console.log(price_min,'price_min')
  // console.log(price_max,'price_max')

  const [isSelected, setSelection] = useState(false);
  
  const [checked, setChecked] = React.useState("");
  // console.log(checked,'checked')

 
   const { data, loading, error } = useFetch(`/products?populate=category`);
  // console.log(data, "product");  

  const category_data = useFetch(`/categories?populate=*&`);
	const categ_data = category_data.data 
  ;
	// console.log(categ_data, "categ_data");
  

  const selectedCateg = []
  const [products, setProducts] = React.useState(selectedCateg);
    // console.log(products,'products')


 const [selectedCats,setSelectedCats] =useState([])
//  console.log(selectedCats,'selectedCats')
 const handleChange = (e) => {
  const value =  e.target.value ;
  const isChecked = e.target.checked;

  setSelectedCats(
    isChecked
      ? [...selectedCats, value]
      : selectedCats.filter((item) => item !== value)
  );
};
 
const [currentPage,setCurrentPage] = useState(0);
const offset = currentPage * showvalue;  
//console.log(offset, 'offset')
const pageCount = Math.ceil( data?.length / showvalue);

 
  const previousPage = () => {
    if (currentPage !== 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage !== pageCount - 1) {
      setCurrentPage(currentPage + 1 );
    }
  };

 

  return (
    <SafeAreaView>
      <View style={styles.appBarWrapper}>
        <View style={styles.appBar}>
          <Text style={styles.companyTxt}>etho&nbsp;express</Text>
          <View style={{marginLeft:180}}> 
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
      <View style={{ flex: 1, marginTop: 20 }}>
        <ScrollView
          Vertical
          showsHorizontalScrollIndicator={false}
          style={{ height: HEIGHT, width: WIDTH, paddingBottom: 200 }}
        >
          <Search></Search> 
          <Pressable 
          style={{width:WIDTH,backgroundColor:'none',padding:2,fontFamily:'Medium',zIndex:1,
         marginTop:-15,color:'white',marginLeft:WIDTH/3,
          alignItems:'center',justifyContent:'center'}}
          onPress={() => setShow(!show)}> 
<View>

      <Ionicons name="menu-outline" size={42} style={{color:COLORS.color4,  }} ></Ionicons>
</View>
          
          </Pressable>
         
          {
            show ? (<View style={{backgroundColor:'transparent'  }}>
            <View
              style={{
                display: "flex",
                flex:1,
                flexWrap:'wrap',
                flexDirection: "row",
                paddingLeft:10,
                paddingTop:10,
                paddingBottom:10,
                backgroundColor: "white",
                height: HEIGHT / 15,
              }}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                   
                }}
              >
              
                <View style={{fontFamily:'Medium',}}><Text>Show</Text></View>
                <View style={{marginTop:-5, height:20}}>
                  <Dropdown style={{  
        
         backgroundColor:"lightgrey" ,fontFamily:'Medium' ,
        borderRadius:3,padding:3,height:30, marginLeft:10,
        
        }}
                    placeholder={!isshowFocus ? ' 10' : ''}
                    placeholderStyle={{width:30,height:20,alignItems:'center',fontFamily:'Medium'}}
                    selectedTextStyle={{width:30,height:20,alignItems:'center',fontFamily:'Medium', color:COLORS.color1, paddingLeft:5}}
                      data={Show}
                      labelField="showlabel"
                      valueField="showvalue"
                      value={showvalue}
            onFocus={() => setIsshowFocus(true)}
            onBlur={() => setIsshowFocus(false)}
            onChange={item => {
              setshowValue(item.showvalue);
              setIsshowFocus(false);
            }}
                  ></Dropdown>
                </View>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  paddingLeft:10,
                
        
                }}
              >
                <View style={{fontFamily:'Medium',}}><Text>Sort By :</Text></View>
                <View style={{marginTop:-5.5, height:20}}>
                  <Dropdown style={{  
        
        borderBottomColor: 'black', backgroundColor:'lightgrey',borderColor:'black',fontFamily:'Medium',
        borderRadius:3,padding:3,height:30, marginLeft:10,}}
                    placeholder={!isshowFocus ? '' : ''}
                    placeholderStyle={{width:60,height:20,alignItems:'center',fontFamily:'Medium',marginTop:-2}}
                    selectedTextStyle={{width:60,height:20,alignItems:'center',fontFamily:'Medium',color:COLORS.color1, paddingLeft:5}}
                      data={Sort}
                      labelField="sortlabel"
                      valueField="sortvalue"
                      value={sortvalue}
            onFocus={() => setIssortFocus(true)}
            onBlur={() => setIssortFocus(false)}
            onChange={item => {
              setsortValue(item.sortvalue);
              
              setIssortFocus(false);
            }}
                  ></Dropdown>
                </View>
              </View>
             
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
               
                  paddingTop:12,
                  marginTop:4
        
                }}
              >
                <View style={{fontFamily:'Medium',}}><Text>Order By :</Text></View>
                <View style={{marginTop:-5.5, height:20}}>
                  <Dropdown
                  style={{  
        
                    borderBottomColor: 'gray', backgroundColor:'lightgrey',borderColor:'white',fontFamily:'Medium',
                    borderRadius:3,padding:3,height:30, marginLeft:10}}
                    placeholder={!issortFocus ? '' : ''}
                    placeholderStyle={{width:100,height:20,alignItems:'center',fontFamily:'Medium',marginTop:-2}}
                    selectedTextStyle={{width:100,height:20,alignItems:'center',fontFamily:'Medium',color:COLORS.color1,paddingLeft:5}}
                      data={Order}
                      labelField="orderlabel"
                      valueField="ordervalue"
                      value={ordervalue}
            onFocus={() => setIsorderFocus(true)}
            onBlur={() => setIsorderFocus(false)}
            onChange={item => {
              setorderValue(item.ordervalue);
              setIsorderFocus(false);
            }}
                  ></Dropdown>
                </View>
              </View>
             
            </View>
        
            <View
              style={{ backgroundColor: "white", WIDTH: WIDTH, height: 320 }}
            >
              <View>
                <Text
                  style={{
                    marginLeft: 10,
                    marginTop: 20,
                    fontFamily: "Medium",
                    textTransform: "capitalize",
                  }}
                >
                  Categories
                </Text>
                <View style={styles.container}>
                {
                          categ_data?.map((x) =>(
                            <View key={x.id} style={styles.checkboxContainer}>
                                 
                                 <input type="checkbox" id={x.id} 
                          
                          value={x.id} onChange={handleChange} />
                    <Text style={styles.label}>{x.attributes?.title}</Text>
                </View>
                          ))  
                }
        
                  
                   
                </View>
              </View>
              <View>
                <Text
                  style={{
                    marginLeft: 10,
                 
                    fontFamily: "Medium",
                    textTransform: "capitalize",
                   
                  }}
                >
                  Shop By Price
                </Text>
        
                <View
                  style={{
                    backgroundColor: "White",
                    flex: 1,
                    alignItems: "left",
                    justifyContent: "left",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    alignItems: "flex-end",
                   
                  }}
                >
                  <View style={{ display: "flex", flexDirection: "row" }}>
                    <RadioButton
                      value="1-1000000"
                      status={checked === "1-1000000" ? "checked" : "unchecked"}
                      onPress={() => {setChecked("1-1000000")
                      setPrice_min(1),
                      setPrice_max(1000000)
                    }}
                    />
                    <Text
                      style={{
                        justifyContent: "center",
                        marginTop: 8,
                        fontFamily: "Medium",
                      }}
                    >
                      All Price
                    </Text>
                  </View>
                  <View style={{ display: "flex", flexDirection: "row" }}>
                    <RadioButton
                      value="1-500"
                      status={checked === "1-500" ? "checked" : "unchecked"}
                      onPress={() => {setChecked("1-500")
                      setPrice_min(1),
                      setPrice_max(500)
                    }}
                    />
                    <Text
                      style={{
                        justifyContent: "center",
                        marginTop: 8,
                        fontFamily: "Medium",
                      }}
                    >
                      1 ETB-500 ETB
                    </Text>
                  </View>
                  <View style={{ display: "flex", flexDirection: "row" }}>
                    <RadioButton
                      value="500-1000"
                      status={checked === "500-1000" ? "checked" : "unchecked"}
                      onPress={() => {setChecked("500-1000")
                      setPrice_min(500),
                      setPrice_max(1000)
                    }}
                    />
                    <Text
                      style={{
                        justifyContent: "center",
                        marginTop: 8,
                        fontFamily: "Medium",
                      }}
                    >
                      500 ETB - 1000 ETB 
                    </Text>
                  </View>
        
                  <View style={{ display: "flex", flexDirection: "row" }}>
                  <RadioButton
                      value="1000-5000"
                      status={checked === "1000-5000" ? "checked" : "unchecked"}
                      onPress={() => {setChecked("1000-5000")
                      setPrice_min(1000),
                      setPrice_max(5000)
                    }}
                    />
                    <Text
                      style={{
                        justifyContent: "center",
                        marginTop: 8,
                        fontFamily: "Medium",
                      }}
                    >
                      1000 ETB - 5000 ETB
                    </Text>
                  </View><br></br>
                  <View style={{ display: "flex", flexDirection: "row" }}>
                  <RadioButton
                      value="5000-10000"
                      status={checked === "5000-10000" ? "checked" : "unchecked"}
                      onPress={() => {setChecked("5000-10000")
                      setPrice_min(5000),
                      setPrice_max(10000)
                    }}
                    />
                    <Text
                      style={{
                        justifyContent: "center",
                        marginTop: 8,
                        fontFamily: "Medium",
                      }}
                    >
                      5000 ETB - 10,000 ETB
                    </Text>
                  </View>
                  <View style={{ display: "flex", flexDirection: "row" }}>
                  <RadioButton
                      value="10000-50000"
                      status={checked === "10000-50000" ? "checked" : "unchecked"}
                      onPress={() => {setChecked("10000-50000")
                      setPrice_min(10000),
                      setPrice_max(50000)
                    }}
                    />
                    <Text
                      style={{
                        justifyContent: "center",
                        marginTop: 8,
                        fontFamily: "Medium",
                      }}
                    >
                      10,000 ETB - 50,000 ETB
                    </Text>
                  </View>
                  <View style={{ display: "flex", flexDirection: "row" }}>
                  <RadioButton
                      value="50000-100000"
                      status={checked === "50000-100000" ? "checked" : "unchecked"}
                      onPress={() => {setChecked("50000-100000")
                      setPrice_min(50000),
                      setPrice_max(100000)
                    }}
                    />
                    <Text
                      style={{
                        justifyContent: "center",
                        marginTop: 8,
                        fontFamily: "Medium",
                      }}
                    >
                      50,000 ETB - 100,000 ETB
                    </Text>
                  </View>
                  <View style={{ display: "flex", flexDirection: "row" }}>
                    <RadioButton
                      value="100000-500000"
                      status={checked === "100000-500000" ? "checked" : "unchecked"}
                      onPress={() => {setChecked("100000-500000")
                      setPrice_min(500000),
                      setPrice_max(1000000)
                    }}
                    />
                    <Text
                      style={{
                        justifyContent: "center",
                        marginTop: 8,
                        fontFamily: "Medium",
                      }}
                    >
                      100,000 ETB - 500,000 ETB
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            </View>):null
          }

          
         
           
        


          <View
      style={{marginTop:-30}}
          >
                 <List  
								 	showvalue={showvalue}
										 offset={offset}   
								  /* 	categ={categ}  */
										search={search}
							 	/* price={price} */
								 sort={sort}  
                  
                  sortvalue={sortvalue}
										price_min={price_min}
										price_max={price_max}
										selectedCats ={selectedCats}
                    ordervalue={ordervalue}
								 
										// subCats={selectedCats}   
										/* id={id} */

										/>    

                



          
          </View>



          <View
            style={{
              height: 40,
              margin: 5,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              width: WIDTH,
            }}
          >
            <Pressable
              onPress={previousPage}
              style={{
                height: 40,
                backgroundColor: "white",
                paddingLeft: 10,
                paddingRight: 10,
                margin: 5,
                boxShadow: "#171717",
                shadowOffset: { width: -2, height: 1 },
                shadowOpacity: 0.2,
                shadowRadius: 3,
              }}
            >
              <Ionicons
                name="arrow-back-circle-outline"
                style={{ fontSize: 30, margin: 5 }}
              ></Ionicons>
            </Pressable>
            <View
              style={{
                height: 40,
                backgroundColor: "white",
                paddingLeft: 10,
                paddingRight: 10,
                margin: 5,
                alignItems: "center",
                justifyContent: "center",

                boxShadow: "#171717",
                shadowOffset: { width: -2, height: 1 },
                shadowOpacity: 0.2,
                shadowRadius: 3,
              }}
            >
              <Text>{currentPage + 1}/{pageCount}</Text>
            </View>

            <Pressable
              onPress={nextPage}
              style={{
                height: 40,
                backgroundColor: "white",
                paddingLeft: 10,
                paddingRight: 10,
                margin: 5,

                boxShadow: "#171717",
                shadowOffset: { width: -2, height: 1 },
                shadowOpacity: 0.2,
                shadowRadius: 3,
              }}
            >
              
              <Ionicons
                name="arrow-forward-circle-outline"
                style={{ fontSize: 30, margin: 5 }}
              ></Ionicons>
            </Pressable>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Shop;

const styles = StyleSheet.create({
  textStyle: {
    fontFamily: "bold",
    
  },
  appBarWrapper: {
    marginHorizontal: 22,
    marginTop: SIZES.large,
    marginBottom: 0,
  },
  appBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  companyTxt: {
    textTransform: "capitalize",
    fontFamily: "Bold",
    fontSize:25,
    width:200
  
  },
  cartcount: {
    position: "absolute",
    bottom: 16,
    left: 12,
    width: 16,
    height: 16,
    borderRadius: 8,
    alignItems: "center",
    backgroundColor: COLORS.color1,
    justifyContent: "center",
    zIndex: 999,
  },
  cartNumber: {
    fontFamily: "Medium",
    fontWeight: "600",
    fontSize: 10,
    color: "white",
  },
  container: {
    flex: 1,
    alignItems: "left",
    justifyContent: "left",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-end",
    margin: 10,
    fontFamily:'Medium'

  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 3,
    fontFamily:'Medium'

  },
  checkbox: {
    alignSelf: "center",
    fontFamily:'Medium'
  },
  label: {
    margin: 3,
    fontFamily:'Medium'

  },
  ggg: {
    backgroundColor: "transparent",
    justifyContent: "center",
    alignContent: "center",
    marginLeft: 30,
    marginRight: 25,
    marginTop: 25,
    marginBottom: 10,
    height: 300,
    width: 330,
  },
});
