import { StyleSheet, Text, View } from 'react-native'
import {COLORS ,SIZES} from '../constants';
const styles = StyleSheet.create({

    searchbartop:{
       textAlign:'center',
       flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    /*    margin-top: 33px;
	width: 460px;
	height: 40px;
	display: inline-block;
	background: #fff;
	position: relative; */
    marginTop:5,
    marginLeft:30,
    marginRight:30,
    width:'auto',
    height:40,
    backgroundColor:'white',
    position:'relative',
    border:'1px solid grey',
    borderRadius:'5px',
    overflow:'hidden',
    marginBottom:20
    },
    /* height: 48px;
	background: transparent;
	color: #666;
	border-radius: 0;
	border: none;
	font-size: 14px;
	font-weight: 400;
	padding: 0 25px 0 20px;
	width: 328px; */
    inputt:{
        height:38,
        backgroundColor:'transparent',
        color:'#666',
        borderRadius:0,
       
        fontSize:14,
        fontWeight:'400',
         
        paddingTop:10,
        paddingLeft:25,
        paddingStart:25,
        paddingBottom:10,
        width:280


    },
    btnn:{
    //     height: 50px;
	// line-height: 53px;
	// width: 62px;
	// text-align: center;
	// font-size: 18px;
	// color: #fff;
	// background: #333333;
	// position: absolute;
	// right: -2px;
	// top: -1px;
	// border: none;
	// border-radius: 0 5px 5px 0;
	// -webkit-transition: all 0.4s ease;
	// -moz-transition: all 0.4s ease;
	// transition: all 0.4s ease;
        height:38,
        color: "white",
        backgroundColor:'#333333',
        
        width:62,
        lineHeight:53,
        transition: 'all 0.4s ease',
        paddingBottom:10,
        textAlign:'center',
        justifyContent:'space-between'
    },
    btnn:{
    //     height: 50px;
	// line-height: 53px;
	// width: 62px;
	// text-align: center;
	// font-size: 18px;
	// color: #fff;
	// background: #333333;
	// position: absolute;
	// right: -2px;
	// top: -1px;
	// border: none;
	// border-radius: 0 5px 5px 0;
	// -webkit-transition: all 0.4s ease;
	// -moz-transition: all 0.4s ease;
	// transition: all 0.4s ease;
        height:38,
        color: "white",
        backgroundColor:'#333333',
        
        width:62,
        lineHeight:53,
        transition: 'all 0.4s ease',
        paddingBottom:10,
        textAlign:'center',
        justifyContent:'space-between'
    },
    searcol:{
        textAlign:'center',
        justifyContent:'space-between',
        marginTop:5,
        color: 'white'
    }


})
export default styles