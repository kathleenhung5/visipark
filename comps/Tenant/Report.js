import React,{useState}from 'react';
import {View, Text,TouchableOpacity,TextInput,Button} from 'react-native';
import Texts from '../../styles/Texts';
import styles from '../../styles/CompsStyles/ReportStyles';




function Report(props){
const[Svalue,onChangesText] = React.useState('');
const[value,onChangeText] = React.useState('');
const [strk1, setStrk1] = useState(0);
const [strk2, setStrk2] = useState(0);
//I'm commenting this out. Cause I'll build popup function. -Kathleen. 

//const[showPopus,setPopus] = React.useState(false);
// var popus = null;
//  if (showPopus === true){
//    popus = (
//      <View style={styles.popupsBg}>
//       <Text style={Texts.HeadL}>Reported Succefully</Text>
//       <Text style={Texts.Body}>You've reported succefully!</Text>
//       <Button style={styles.button} 
//       title="Okay" onPress={()=>{ setPopus(!showPopus)}}>
//       </Button>
//      </View>
//    );
//  }


  return(

    <View style={styles.container}>
      {/* {popus} */}

      {/* Headings */}
      <View style={styles.Head}>
        <Text style={Texts.SecHead}>Report</Text>
        <Text style={Texts.Body}>Send a message to building manager regarding visitor parking issues.</Text>
      </View>
      {/* TextInput Card */}
    <View style={styles.card}>
        <View style={styles.title}>
          <Text style={Texts.HeadL}>Your message</Text>
        </View>
        {/* Subject textInput */}
        <Text style={Texts.Body}>Subject:</Text>
        <TextInput
          style={[styles.input,Texts.FormText,{borderWidth: strk1}]}
          onFocus = {()=>{setStrk1(2)}}
          onBlur = {()=>{setStrk1(0)}}
          onChangeText={text => onChangesText(text)}
          value={Svalue}
          clearButtonMode = 'always'
          maxLength = {50}

        />
        {/* Message textInput */}
          <Text style={Texts.Body}>Message:</Text>
        <TextInput
          style={[styles.input,Texts.FormText,{height: 100,borderWidth: strk2}]}
          onFocus = {()=>{setStrk2(2)}}
          onBlur = {()=>{setStrk2(0)}}
          onChangeText={text => onChangeText(text)}
          value={value}
          multiline = {true}
        />
               
        <TouchableOpacity
          style={styles.button}
          onPress = {()=>{props.showPop('ReportedSuccessfully')}}
        >
          <Text style={[Texts.HeadS,{color:'#fff'}]}>Send</Text>
        </TouchableOpacity>
        
        
    </View>

    </View>
  )
}


export default Report;
