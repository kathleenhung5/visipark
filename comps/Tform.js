import React, {useState} from 'react';
import {View, Text, Image, StyleSheet,TouchableOpacity, TextInput} from 'react-native';
import styles from '../styles/LoginStyles';

function Tform(){


  return(

    <View style={{width: "90%", marginTop: 10, alignItems:"center"}}>
      <TextInput
      style={{ padding: 13, borderColor: 'white', borderWidth: 2, borderRadius: 25
              ,width:'90%', height: 45,  color:'white', margin:10}}
      placeholder="unit number"
      placeholderTextColor="#bea9c9"

      />
      <TouchableOpacity
        style={styles.Tform}
        onPress={()=>{alert('You can login as T')}}>
        <Text style={styles.TenantText}>
        Login as Tenant
        </Text>
       </TouchableOpacity>
      </View>
  )
}


export default Tform;
