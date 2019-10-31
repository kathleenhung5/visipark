import React from 'react';
import {View, Text, TouchableOpacity, TextInput, Picker} from 'react-native';
import Texts from '../../styles/Texts';
import styles from './PopupStyles';


function Popup(props){
  // variables for changing Popup content
  var title = '';
  var content = null;
  var btnTxt = '';

  // Conditions for what to show in popup 
  if (props.pop == 'AddVisitor'){
    title = 'Add Visitor';
    btnTxt = 'Add'
    content = (
      <View>
        <Text>Add Visitor Popup Content</Text>
      </View>
    );
  }

  return(
    // This is dark background
    <View style={styles.bg}>
      {/* This is popup area */}
      <View style={styles.poparea}>
          {/* Popu Title */}
          <View style={styles.title}>
              <Text style={Texts.HeadL}>{title}</Text>
          </View>
          {/* Popup Content */}
          {content}
          {/* Popup Button */}
          <TouchableOpacity 
            style = {styles.button}
            onPress = {()=>{props.showPop('')}}
          >
            <Text style={[Texts.HeadS,{color:'#fff'}]}>{btnTxt}</Text>
          </TouchableOpacity>
      </View>
    </View>
  )
}


export default Popup;
