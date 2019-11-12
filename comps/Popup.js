import React,{useState} from 'react';
import {
  View, 
  Text, 
  TouchableOpacity, 
  TextInput, 
  Picker, 
  Image, 
  TouchableWithoutFeedback,
  Keyboard, 
  KeyboardAvoidingView
} from 'react-native';
import Texts from '../styles/Texts';
import styles from '../styles/CompsStyles/PopupStyles';


function Popup(props){
  // variables for changing Popup content

  var title = '';
  var content = null;
  var btnTxt = '';
  var button = ''
  
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
  const [addvisiName, setAddvisiName] = useState('');
  const [addvisiPlate, setAddvisiPlate] = useState('');
  const [addvisiDur, setAddvisiDur] = useState(2);
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
          onChangeText = {(addvisiName)=>{setAddvisiName(addvisiName); console.log(addvisiName)}}
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
          onChangeText = {(txt)=>{setAddvisiPlate(txt)}}
          />
        <Text style={Texts.Body}>Parking duration (max 24hr):</Text>

        <View style={{flexDirection:'row',alignItems:'center'}}>
          <Picker 
            style={{width: 130, marginRight: 20}}
            selectedValue = {addvisiDur}
            itemStyle={{height:90}}
            onValueChange = {(val, ind)=>{setAddvisiDur(val)}}
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
  for(var i=1;i<=(24-addvisiDur);i++){
    exthr.push(
    <Picker.Item key={i} label={i.toString()} value={i} />
    );
  }
  const [extendhr, setExtendhr] = useState(2);
  if (props.pop == 'ExtendParking'){
    title = 'Extend Parking';
    btnTxt = 'Extend';
    content = (
      <View>
        <Text style={Texts.Body}>Max parking time allowed: 24hr</Text>
        <Text style={Texts.Body}>You've registered: {addvisiDur}hr</Text>
        <Text style={[Texts.BodyBold,{marginTop: 20}]}>You would like to extend:</Text>
        <View style={{flexDirection:'row',alignItems:'center'}}>
          <Picker 
            style={{width: 130, marginRight: 20}}
            selectedValue = {extendhr}
            itemStyle={{height:90}}
            onValueChange = {(val,ind)=>{setExtendhr(val)}}
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
        <Text style={[Texts.Body,{marginBottom: 30}]}>Are you sure you want to remove {addvisiName}?</Text>
      </View>
    );
  }


  //----- Removed Successfully ----
  if (props.pop == 'RemovedSuccessfully'){
    title = 'Removed Successfully';
    btnTxt = 'Okay';
    content = (
      <View>
        <Text style={[Texts.Body,{paddingBottom: 20}]}>You have removed {addvisiName} successfully!</Text>
      </View>
    );
  }

  // ---- Reported Successfully ----
  if(props.pop == 'ReportedSuccessfully'){
    title = 'Reported Successfully';
    btnTxt = 'Okay';
    content = (
      <View>
        <Text style={[Texts.Body,{paddingBottom: 20}]}>Thank you! You reported successfully!</Text>
      </View>
    );
  }



  
  //Buttons

  if (btnTxt == 'Extend'){
    button = (
      <TouchableOpacity 
      style = {styles.button}
      onPress = {()=>{props.showPop('')}}>
      <Text style={[Texts.HeadS,{color:'#fff'}]}>{btnTxt}</Text>
    </TouchableOpacity>
    )
  }
  if (btnTxt == 'Yes'){
    button = (
      <TouchableOpacity 
      style = {styles.button}
      onPress = {()=>{props.showPop('')}}>
      <Text style={[Texts.HeadS,{color:'#fff'}]}>{btnTxt}</Text>
    </TouchableOpacity>
    )
  }




//make card = true to show the activeCard 
//how can i: props.setCard2(true)??
  if (btnTxt == 'Add'){
    button = (
      <TouchableOpacity 
      style = {styles.button}
      onPress = {()=>{props.showPop('')}}
      onPressIn = {()=>{console.log('make card 1 or 2 = true')}}>
      <Text style={[Texts.HeadS,{color:'#fff'}]}>{btnTxt}</Text>
    </TouchableOpacity>
    )
  }





  if (btnTxt == 'Okay'){
    button = (
      <TouchableOpacity 
      style = {styles.button}
      onPress = {()=>{props.showPop('')}}>
      <Text style={[Texts.HeadS,{color:'#fff'}]}>{btnTxt}</Text>
    </TouchableOpacity>
    )
  }
 


  return(
    // This is dark background
  <View style={styles.bg}>

      {/* This is popup area */}
    <KeyboardAvoidingView 
        behavior = "position"
        >
      <TouchableWithoutFeedback onPress = {Keyboard.dismiss}>
        <View style={styles.poparea}>
        {/* Close Button */}
          <TouchableOpacity 
            onPress = {()=>{props.showPop('')}}
            style={[styles.closeBut,{display:(props.pop=='AddVisitor'||props.pop=='ExtendParking'||props.pop=='Remove')?'flex':'none'}]} 
          >
              <Image 
                  source={require('../img/cross.png')}
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
          {button}
          </View>
        </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  </View>
  )
}


export default Popup;
