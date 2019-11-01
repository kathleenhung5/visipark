import React from 'react';
import {View, Text, TouchableOpacity, TextInput, Picker} from 'react-native';
import Texts from '../../styles/Texts';
import styles from './PopupStyles';


function Popup(props){
  // variables for changing Popup content
  var title = '';
  var content = null;
  var btnTxt = '';
  
  console.log('test in Popup.js');
  console.log(props.pop);
  
  // Conditions for deciding what to show in popup 
  if (props.pop == 'VisitorParkingPolicy'){
    title = 'Visitor Parking Policy';
    btnTxt = 'Okay';
    content = (
      <View>
        <Text style={[Texts.Body,{marginBottom:10}]}>1. Each apartment is allowed to have maximum 2 visitors parking in visitor parking at the same time. 
        </Text>
        <Text style={[Texts.Body,{marginBottom:10}]}>2. Each visitor’s vehicle is allowed to park in visitor parking for a consecutive duration of 24 hours.
        </Text>
        <Text style={Texts.Body}>3. If visitors park overtime, the building has the right to tow their vehicles. 
        </Text>
      </View>
    );
  }

  if (props.pop == 'AddVisitor'){
    title = 'Add Visitor';
    btnTxt = 'Add';
    content = (
      <View>
        <Text style={Texts.Body}>Add Visitor Popup Content</Text>
      </View>
    );
  }

  if (props.pop == 'ExtendParking'){
    title = 'Extend Parking';
    btnTxt = 'Extend';
    content = (
      <View>
        <Text style={Texts.Body}>Extend Parking Popup Content</Text>
      </View>
    );
  }

  if (props.pop == 'Remove'){
    title = 'Remove';
    btnTxt = 'Yes';
    content = (
      <View>
        <Text style={Texts.Body}>Are you sure you want to remove this visitor?</Text>
      </View>
    );
  }

  if (props.pop == 'RemovedSuccessfully'){
    title = 'Removed Successfully';
    btnTxt = 'Okay';
    content = (
      <View>
        <Text style={Texts.Body}>You have removed this visitor successfully!</Text>
      </View>
    );
  }

  if(props.pop == 'ReportedSuccessfully'){
    title = 'Reported Successfully';
    btnTxt = 'Okay';
    content = (
      <View>
        <Text style={Texts.Body}>Thank you! You've reported successfully!</Text>
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
