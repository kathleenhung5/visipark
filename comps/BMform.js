import React, {useState} from 'react';
import {View, Text, Image, StyleSheet,TouchableOpacity, TextInput} from 'react-native';
import styles from '../styles/MainStyles';

function BMform(){

  return(

    <View style={{top:400 }}>
      <TextInput
      style={{ padding: 13, borderColor: 'white', borderWidth: 1, borderRadius: 25
              ,width:'80%', left: '10%', color:'white'}}

      placeholder="password"
      placeholderTextColor="#bea9c9"

      />


    </View>
  )
}


export default BMform;
