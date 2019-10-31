import React, {useState} from 'react';
import {View, Text, Image, StyleSheet,TouchableOpacity, TextInput} from 'react-native';
import styles from '../styles/LoginStyles';

function Tform(){

  return(

    <View style={{width: "80%", margin: 11}}>
      <TextInput
      style={{ padding: 13, borderColor: 'white', borderWidth: 2, borderRadius: 25
              ,width:'100%', height: 45,  color:'white'}}

      placeholder="unit number"
      placeholderTextColor="#bea9c9"

      />


    </View>
  )
}


export default Tform;
