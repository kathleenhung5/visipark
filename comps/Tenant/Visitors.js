import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, ScrollView, Image} from 'react-native';
import {Colors} from '../../styles/Colors';
import Texts from '../../styles/Texts';
import styles from '../../styles/CompsStyles/VisitorStyles';

function Visitors(props){




  //Function 1
  // time left = start + duration - now
  // count time in mili seconds
//  useEffect(()=>{
//    var stime = new Date('2019-11-13 12:00:00');
//    var now = new Date();
//    console.log("miliseconds passed", Date.parse(stime),Date.parse(now));
//    console.log("time passed since start time",   Date.parse(now)-Date.parse(stime));
//    var parkingseconds = 3600;
//   var timepassed = Date.parse(now)-Date.parse(stime);
 //   console.log(parkingseconds, timepassed/1000);

//  },[]);

  // UI Variables
  var cardtop = null;
  var cardbot = null;
  var cardbot2 = null;
  var button1 = null;
  var button2 = null;

  //time convert
  let time1= props.dur1
  var Hours1 = Math.floor(time1 /60)
  var minutes1 = time1 % 60

 let time2= props.dur2
 var Hours2 = Math.floor(time2 /60)
 var minutes2 = time2 % 60

    if (props.reg1 >= 24){
      button1 = 
      <TouchableOpacity style={styles.extendButtonGrey} >
      <Text style={[Texts.HeadS,{color:'lightgrey'}]}>Extend</Text>
      </TouchableOpacity>
    } else {
      button1 = 
      <TouchableOpacity style={styles.extendButton} onPress={() => {props.showPop('ExtendParking1')}}>
      <Text style={[Texts.HeadS,{color:Colors.Purple}]}>Extend</Text>
      </TouchableOpacity>
    }

    if (props.reg2 >= 24){
      button2 = 
      <TouchableOpacity style={styles.extendButtonGrey}>
      <Text style={[Texts.HeadS,{color:'lightgrey'}]}>Extend</Text>
      </TouchableOpacity>
    } else {
      button2 = 
      <TouchableOpacity style={styles.extendButton} onPress={() => {props.showPop('ExtendParking2')}}>
      <Text style={[Texts.HeadS,{color:Colors.Purple}]}>Extend</Text>
      </TouchableOpacity>
    }


  //Visitor card 1 function
  if (props.card1 == false && props.card2 == false){

    cardtop =
    null;
  } 

  if (props.card1 == false && props.card2 == true){
    cardbot2 = 
         <TouchableOpacity style={styles.Box} onPress={() => {props.showPop('AddVisitor'); }} >
       <Image resizeMode='contain' source={require('../../img/add-visi.png')} style={styles.Img}/>
       <Text style={Texts.BodyLight}>Add Visitor</Text>
     </TouchableOpacity> 
  }

  
  //if visitor is added state = true 
  if (props.card1 == true){
    cardtop =
            <View style={styles.activeBox} >
              <Text style={styles.visitorName}>{props.name1}</Text>
              <Text style={styles.plateText}>{props.plate1}</Text>
              <Image resizeMode='contain' source={require('../../img/car.png')} style={styles.carIcon} />
              {/* <Text style={styles.time}>{Hours1}:{minutes1}</Text> */}
              <Text style={styles.time}>{Hours1}</Text>
              <Text style={styles.timeHr}>hr</Text>
              <Text style={styles.leftText}>left</Text>


              {button1}


              <TouchableOpacity style={styles.removeButton} onPress={() => {props.showPop('Remove1')}}>
              <Text style={[Texts.HeadS,{color:'#fff'}]}>Remove</Text>
              </TouchableOpacity>

          </View> 
  } 


  //Visitor card 2 functions (same syntax as visitor 1)
  if (props.card2 == false){
    cardbot =
    <TouchableOpacity style={styles.Box2} onPress={() => {props.showPop('AddVisitor') }}>
      <Image resizeMode='contain' source={require('../../img/add-visi.png')} style={styles.Img}/>
      <Text style={Texts.BodyLight}>Add Visitor</Text>
    </TouchableOpacity> 
  } 

  if (props.card2 == true){
    cardbot =
              <View style={styles.activeBox2} >
              <Text style={styles.visitorName}>{props.name2}</Text>
              <Text style={styles.plateText}>{props.plate2}</Text>
              <Image resizeMode='contain' source={require('../../img/car.png')} style={styles.carIcon} />
              {/* <Text style={styles.time}>{Hours2}:{minutes2}</Text> */}
              <Text style={styles.time}>{Hours2}</Text>
              <Text style={styles.timeHr}>hr</Text>
              <Text style={styles.leftText}>left</Text>

              {button2}

              <TouchableOpacity style={styles.removeButton} onPress={() => {props.showPop('Remove2')}}>
              <Text style={[Texts.HeadS,{color:'#fff'}]}>Remove</Text>
              </TouchableOpacity>
          </View> 
  } 


  return(
    <View style={{flex:1, marginBottom: 70}}>
      {/* ScrollView Starts here, wraps around everything */}
      <ScrollView>
      {/* Top */}
        <View style={styles.Top}>
          <Text style={Texts.SecHead}>Visitors</Text>
          <Text style={Texts.Body}>
            Add your visitors upon their arrival
            and remove them upon their departure.
          </Text>
          <TouchableOpacity onPress={() => {props.showPop('VisitorParkingPolicy')}}>
            <Text style={Texts.Link}>
              Visitor Parking Policy >>
            </Text>
          </TouchableOpacity>
        </View>

      {/* Middle */}
    <View style={styles.Middle}>
          {/* Unit number */}

          <Text style={Texts.HeadL}>Unit {props.unit}
          </Text>
          <Text style={Texts.BodyLight}>Estimated spots left: {props.spots}</Text>

      <View style={{height:"100%", paddingTop:20}}>
        
          {/* Visitor Cards UI*/}
          {cardtop}
          {cardbot}
          {cardbot2}

      </View>
    </View>
    </ScrollView>
    </View>
  )
}

export default Visitors;