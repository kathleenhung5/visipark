import React,{Component}from 'react';
import {View, Text,Button,TextInput} from 'react-native';




function Report(){
const[Svalue,onChangesText] = React.useState('');
const[value,onChangeText] = React.useState('');
const[showPopus,setPopus] = React.useState(false);

var popus = null;
 if (showPopus === true){
   popus = (
     <View>
      <Text>Reported Succefully</Text>
      <Text>You've reported succefully!</Text>
      <Button title="Okay" onPress={()=>{ setPopus(!showPopus)}}></Button>
     </View>
   );
 }


  return(
    <View>
      {popus}
      {/* Headings */}
      <View style={{paddingTop:60}}>
      <Text style={{fontSize:60}}>Report</Text>
      <Text style={{fontSize:16}}>Send a message to building manager regarding visitor parking issues.</Text>
      </View>
      {/* TextInput Card */}
    <View>
    <Text>Your message</Text>
    {/* Subject textInput */}
    <Text>Subject</Text>
    <TextInput
      style={{ height: 40,width:"80%", borderColor: 'gray', borderWidth: 2, borderRadius:23 }}
      onChangeText={text => onChangesText(text)}
      value={Svalue}
    />
    {/* Message textInput */}
       <Text>Message</Text>
    <TextInput
      style={{ height: "50%",width:"80%", borderColor: 'gray', borderWidth: 2, borderRadius:23 }}
      onChangeText={text => onChangeText(text)}
      value={value}
    />

    <Button title="Send" onPress={()=>{ setPopus(!showPopus)}}>Send</Button>
    </View>

    </View>
  )
}


export default Report;
