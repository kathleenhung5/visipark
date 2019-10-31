import React, {useState} from 'react';
import {View, Text, Image, StyleSheet,TouchableOpacity, TextInput} from 'react-native';
import styles from '../styles/LoginStyles';

function BMform(){

  return(

    <View style={{width: "80%", marginTop: 10}}>
      <TextInput
      style={{ padding: 13, borderColor: 'white', borderWidth: 2, borderRadius: 25 , height: 45,  color:'white'}}

      placeholder="password"
      placeholderTextColor="#bea9c9"

      />


    </View>
  )
}


export default BMform;
