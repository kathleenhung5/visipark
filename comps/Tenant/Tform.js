import React, {useState} from 'react';
import {
  View,
   Text, 
   Image, 
   StyleSheet,
   TouchableOpacity, 
   TextInput,
   AsyncStorage
  } from 'react-native';
import styles from '../../styles/PagesStyles/LoginStyles';
import {Colors} from '../../styles/Colors';
import Texts from '../../styles/Texts';

function Tform(props){
  // function for storing unit num locally
  // called when button is pressed
  var storeunit = async() =>{
    await AsyncStorage.setItem('unit',props.unit);
  }

  return(

    <View style={{width: "90%", marginTop: 10, alignItems:"center"}}>
      <TextInput
      placeholder="unit number"
      onChangeText = {(txt)=>{
        props.setUnit(txt);
      }}
      value = {props.unit}
      style={{ padding: 13, borderColor: 'white', borderWidth: 2, borderRadius: 25
              ,width:'90%', height: 45,  color:'white', margin:10,textAlign: 'center'}}
      placeholderTextColor="#bea9c9"
      />
      <TouchableOpacity
        style={styles.Tform}
        onPress={()=>{
          storeunit();
          props.setShowpage('Tenant')
          }}>
        <Text style={{color:"#863AE8", fontFamily:"Poppins-SemiBold", fontSize:20}}>
        Login as Tenant
        </Text>
       </TouchableOpacity>
      </View>
  )
}


export default Tform;
