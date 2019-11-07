import React,{useState} from 'react';
import {View, Text, TouchableOpacity, TextInput, Picker, Image} from 'react-native';
import Texts from '../../styles/Texts';
import styles from './PopupStyles';


function Popup(props){
  // variables for changing Popup content
  var title = '';
  var content = null;
  var btnTxt = '';
  const [strk1, setStrk1] = useState(0);
  const [strk2, setStrk2] = useState(0);
  
  // Conditions for deciding what to show in popup 
  // ---- Visitor Parking Policy ----
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
// ---- Add Visitor ----
  var addhr = [];
  for(var i=1;i<=24;i++){
    addhr.push(
    <Picker.Item key={i} label={i.toString()} value={i} />
    );
  }
  if (props.pop == 'AddVisitor'){
    title = 'Add Visitor';
    btnTxt = 'Add';
    content = (
      <View>
        <Text style={Texts.Body}>Visitor's name:</Text>
        <TextInput 
          placeholder = "Name"
          style={[styles.input,Texts.FormText,{borderWidth: strk1}]}
          clearButtonMode = 'always'
          maxLength = {40}
          onFocus = {()=>{setStrk1(2)}}
          onBlur = {()=>{setStrk1(0)}}
          />
        <Text style={Texts.Body}>Visitor's plate number:</Text>
        <TextInput 
          placeholder = "Plate number"
          style={[styles.input,Texts.FormText,{borderWidth: strk2}]}
          clearButtonMode = 'always'
          maxLength = {7}
          autoCapitalize = "characters"
          onFocus = {()=>{setStrk2(2)}}
          onBlur = {()=>{setStrk2(0)}}
          />
        <Text style={Texts.Body}>Parking duration (max 24hr):</Text>

        <View style={{flexDirection:'row',alignItems:'center'}}>
          <Picker 
            style={{width: 130, marginRight: 20}}
            selectedValue = {2}
            itemStyle={{height:90}}
          >
            {addhr}
          </Picker>
          <Text style={Texts.Body}>hr</Text>
        </View>

      </View>
    );
  }

  // ---- Extend Parking ----
  var exthr = [];
  for(var i=1;i<=24;i++){
    exthr.push(
    <Picker.Item key={i} label={i.toString()} value={i} />
    );
  }
  if (props.pop == 'ExtendParking'){
    title = 'Extend Parking';
    btnTxt = 'Extend';
    content = (
      <View>
        <Text style={Texts.Body}>Max parking time allowed: 24hr</Text>
        <Text style={Texts.Body}>You've registered: __hr</Text>
        <Text style={[Texts.BodyBold,{marginTop: 20}]}>You would like to extend:</Text>
        <View style={{flexDirection:'row',alignItems:'center'}}>
          <Picker 
            style={{width: 130, marginRight: 20}}
            selectedValue = {2}
            itemStyle={{height:90}}
          >
            {exthr}
          </Picker>
          <Text style={Texts.Body}>hr</Text>
        </View>
      </View>
    );
  }

  // ---- Remove ----
  if (props.pop == 'Remove'){
    title = 'Remove';
    btnTxt = 'Yes';
    content = (
      <View>
        <Text style={[Texts.Body,{marginBottom: 30}]}>Are you sure you want to remove this visitor?</Text>
      </View>
    );
  }


  //----- Removed Successfully ----
  if (props.pop == 'RemovedSuccessfully'){
    title = 'Removed Successfully';
    btnTxt = 'Okay';
    content = (
      <View>
        <Text style={[Texts.Body,{paddingBottom: 20}]}>You have removed this visitor successfully!</Text>
      </View>
    );
  }

  // ---- Reported Successfully ----
  if(props.pop == 'ReportedSuccessfully'){
    title = 'Reported Successfully';
    btnTxt = 'Okay';
    content = (
      <View>
        <Text style={[Texts.Body,{paddingBottom: 20}]}>Thank you! You've reported successfully!</Text>
      </View>
    );
  }

  return(
    // This is dark background
    <View style={styles.bg}>
      {/* This is popup area */}
      <View style={styles.poparea}>
        {/* Close Button */}
          <TouchableOpacity 
            onPress = {()=>{props.showPop('')}}
            style={[styles.closeBut,{display:(props.pop=='AddVisitor'||props.pop=='ExtendParking'||props.pop=='Remove')?'flex':'none'}]} 
          >
              <Image 
                  source={require('../../img/cross.png')}
                  resizeMode = 'contain'
                  style={styles.img}
                />
          </TouchableOpacity>
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
