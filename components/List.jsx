import { StyleSheet, Text, View ,Dimensions} from 'react-native'
import React from 'react'
import useFetch from "../hooks/useFetch";
import Cards from './Cards';
const List = ({
    search,
    showvalue,
    sortvalue,
    ordervalue,
    price_min,
    price_max,
  selectedCats,
  sort,
   offset,
 
 }) => {
    const { data, loading, error } = useFetch(
        /* find multiple Products(subcategories) with subCats, maxPrice, sort, catId */
    
        `/products?populate=* &[filters][price][$gte]=${price_min} &[filters][price][$lte]=${price_max} &sort=${sortvalue}:${ordervalue}${selectedCats.map( (item) => `&[filters][category][id]=${item}`)}`
      );

      
    // console.log(data,'data');
    // console.log(showvalue,'showvalue');
    // console.log(offset,'offset');

    const currentPageData = data?.slice(offset, offset + showvalue);
    // console.log(currentPageData,'currentPageData');

     
              
          
            

    const WIDTH = Dimensions.get("window").width;
    const HEIGHT = Dimensions.get("window").height;



 
  return (
    <View style={{
      backgroundColor: "transparent",
      WIDTH: WIDTH,
      flex: 1,
      
      flexDirection: "row",
      flexWrap: "wrap",
      alignItems: "flex-end",
       marginTop: 20,
       padding: 5,
    }}>
       {  currentPageData
              ?.filter((item) => {
                return search.toLowerCase() === " "
                  ? item
                  : item.attributes?.title?.toLowerCase().includes(search);
              })
  
              .map((item) => ( 
                    
                   <Cards item={item} key={item.id}/>
                
             ))}   
    </View>
  )
}

export default List

const styles = StyleSheet.create({})