import React, {useState} from 'react';
import {View, Text, Image, StyleSheet,TouchableOpacity, TextInput} from 'react-native';
import styles from '../../styles/PagesStyles/LoginStyles';
import {Colors} from '../../styles/Colors';
import Texts from '../../styles/Texts';

function Tform(props){


  return(

    <View style={{width: "90%", marginTop: 10, alignItems:"center"}}>
      <TextInput
      style={[Texts.FormText,{ padding: 13, borderColor: 'white', borderWidth: 2, borderRadius: 25
              ,width:'90%', height: 45,  color:'white', margin:10,textAlign: 'center'}]}
      placeholder="unit number"
      placeholderTextColor="#bea9c9"
      onChangeText = {(txt)=>{
        props.setroom(txt);
      }}
      />
      <TouchableOpacity
        style={styles.Tform}
        onPress={()=>{
          props.setShowpage('Tenant');
          console.log(props.room);
        }}>
        <Text style={{color:"#863AE8", fontFamily:"Poppins-SemiBold", fontSize:20}}>
        Login as Tenant
        </Text>
       </TouchableOpacity>
     </View>
  )
}


export default Tform;
