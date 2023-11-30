import { StyleSheet, Text, View } from 'react-native'
import {COLORS ,SIZES} from '../constants';

 const styles = StyleSheet.create({
 textStyle:{
    fontFamily:'bold',
    fontSize:24,

 },
 appBarWrapper:{
 
    marginHorizontal:22,
    marginTop:SIZES.large,
    marginBottom:0
 },
 appBar:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
 },companyTxt:{
    textTransform:'capitalize',
    fontFamily:'Bold',
    fontSize:25
 },cartcount:{
    position:'absolute',
    bottom:18,
    left:22,
    width:16,
    height:16,
    borderRadius:8,
    alignItems:"center",
    backgroundColor:COLORS.color1,
    justifyContent:'center',
    zIndex:999
 },cartNumber:{
    fontFamily:'Regular',
    fontWeight:"600",
    fontSize:10,
    color:'white',
 }

 })
 export default styles