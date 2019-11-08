import React, {useState} from 'react';
import {View, Text, Image, StyleSheet,TouchableOpacity, TextInput} from 'react-native';
import styles from '../../styles/PagesStyles/LoginStyles';

function BMform(props){

  return(

    <View style={{width: "90%", marginTop: 10, alignItems:"center"}}>
      <TextInput
      style={{ padding: 13, borderColor: 'white', borderWidth: 2, borderRadius: 25 , height: 45,  color:'white', margin:10,width:'90%'}}
      placeholder="password"
      placeholderTextColor="#bea9c9"
      />
      <TouchableOpacity
        style={styles.BMForm }
        onPress={()=>{props.setShowpage('Manager')}}>
        <Text style={styles.TenantText}>
        Login as Manager
        </Text>
       </TouchableOpacity>
    </View>





  )
}


export default BMform;
