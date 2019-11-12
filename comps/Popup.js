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
  var button = null;


  const [strk1, setStrk1] = useState(0);
  const [strk2, setStrk2] = useState(0);
  
  // Conditions for deciding what to show in popup 
  // ---- Visitor Parking Policy ----
  if (props.pop == 'VisitorParkingPolicy'){
    title = 'Visitor Parking Policy';
    btnTxt = 'Okay';
    
     button = (
       <TouchableOpacity 
       style = {styles.button}
       onPress = {()=>{props.showPop('')}}>
       <Text style={[Texts.HeadS,{color:'#fff'}]}>{btnTxt}</Text>
     </TouchableOpacity>
     )
    content = (
      <View>
        <Text style={[Texts.Body,{marginBottom:10}]}>. Each apartment is allowed to have maximum 2 visitors parking in visitor parking at the same time. 
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
 

  //if card1 is false then it will add the card to the card1 slot (the first card slot)
  if (props.pop == 'AddVisitor' && props.card1 == false){
    title = 'Add Visitor';
    btnTxt = 'Add';
      // ------- Kathleen --------- 
    // this is the button for when I have only one visitor
    // You will need to add more conditions to change {button} when there's 0, or 1 visitors. 
    button = (
    <TouchableOpacity 
            style={styles.button}

            onPress={()=>{
              // turn card1 on
              props.setCard1(true);

              props.showPop('');
            }}>
            <Text style={[Texts.HeadS,{color: "#fff"}]}>{btnTxt}</Text>
          </TouchableOpacity>
    )
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
          onChangeText = {(addvisiName)=>{props.setName1(addvisiName); console.log(props.name1)}}
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
          onChangeText = {(addvisiPlate)=>{props.setPlate1(addvisiPlate)}}
          />
        <Text style={Texts.Body}>Parking duration (max 24hr):</Text>

        <View style={{flexDirection:'row',alignItems:'center'}}>
          <Picker 
            style={{width: 130, marginRight: 20}}
            selectedValue = {addvisiDur}
            itemStyle={{height:90}}
            onValueChange = {(val, ind)=>{props.setDur1(val)}}
          >
            {addhr}
          </Picker>
          <Text style={Texts.Body}>hr</Text>
        </View>
      </View>
    );
   } 


   //if card1 is true then it will turn on card2, which is the second card slot
   if (props.pop == 'AddVisitor' && props.card1 == true){
    title = 'Add Visitor';
    btnTxt = 'Add';

    button = (
    <TouchableOpacity 
            style={styles.button}

            onPress={()=>{
 
              props.setCard2(true);
              props.showPop('');
            }}>
            <Text style={[Texts.HeadS,{color: "#fff"}]}>{btnTxt}</Text>
          </TouchableOpacity>
    )
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
          onChangeText = {(addvisiName)=>{props.setName2(addvisiName); }}
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
          onChangeText = {(addvisiPlate)=>{props.setPlate2(addvisiPlate)}}
          />
        <Text style={Texts.Body}>Parking duration (max 24hr):</Text>

        <View style={{flexDirection:'row',alignItems:'center'}}>
          <Picker 
            style={{width: 130, marginRight: 20}}
            selectedValue = {addvisiDur}
            itemStyle={{height:90}}
            onValueChange = {(val, ind)=>{props.setDur2(val)}}
          >
            {addhr}
          </Picker>
          <Text style={Texts.Body}>hr</Text>
        </View>
      </View>
    );
   } 

  // ---- Extend Parking ---- //currently only extends card1
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

    button = (
      <TouchableOpacity 
      style = {styles.button}
      onPress = {()=>{props.showPop('')}}>
      <Text style={[Texts.HeadS,{color:'#fff'}]}>{btnTxt}</Text>
    </TouchableOpacity>

    )
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
            onValueChange = {(val,ind)=>{setExtendhr + props.setDur1 (val)}}
          >
            {exthr}
          </Picker>
          <Text style={Texts.Body}>hr</Text>
        </View>
      </View>
    );
  }

  // ---- Remove ---- //if card2 is false (if theres no 2nd visitor it will remove card1 which is the first slot)
  if (props.pop == 'Remove' && props.card2 == false){
    title = 'Remove';
    btnTxt = 'Yes';

    button = (
      <TouchableOpacity 
              style={styles.button}
              // here are the functions called when the button is pressed. 
              onPress={()=>{
                // this is for adding ONE visitor

                // this is for closing the popup
                props.showPop('');
                props.setCard1(false);
              }}>
              <Text style={[Texts.HeadS,{color: "#fff"}]}>{btnTxt}</Text>
            </TouchableOpacity>
      )
    content = (
      <View>
        <Text style={[Texts.Body,{marginBottom: 30}]}>Are you sure you want to remove {props.name1}?</Text>
      </View>
    );
  }


  //!!! This is where i need to make a different if statement if theres 2 visitors. this if statement
  //always removes the second card (card2) everytime.
  if (props.pop == 'Remove' && props.card2 == true){
    title = 'Remove';
    btnTxt = 'Yes';

    button = (
      <TouchableOpacity 
              style={styles.button}
              onPress={()=>{

                // always turns off the second card slot (card2)
                props.showPop('');
                props.setCard2(false);
              }}>
              <Text style={[Texts.HeadS,{color: "#fff"}]}>{btnTxt}</Text>
            </TouchableOpacity>
      )
    content = (
      <View>
        <Text style={[Texts.Body,{marginBottom: 30}]}>Are you sure you want to remove {props.name2}?</Text>
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
