import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, ScrollView, Image} from 'react-native';
import {Colors} from '../../styles/Colors';
import Texts from '../../styles/Texts';
import styles from '../../styles/CompsStyles/VisitorStyles';

function Visitors(props){

  //Database apartment States
  var UnitNum = "";
  var SpotCount = "5";


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

  //Current Visitor names, plates and time left
  var cardtop = null;
  var cardbot = null;
  var cardbot2 = null;

  //Visitor functions default states

  //Visitor card 1 function
  if (props.card1 == false && props.card2 == false){

    cardtop =
    null;
  } 

  if (props.card1 == false && props.card2 == true){
    cardbot2 = 
         <TouchableOpacity style={styles.Box} onPress={() => {props.showPop('AddVisitor') }} >
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
              <Text style={styles.time}>{props.dur1}</Text>
              <Text style={styles.timeHr}>hr</Text>
              <Text style={styles.leftText}>left</Text>

              <TouchableOpacity style={styles.extendButton} onPress={() => {props.showPop('ExtendParking1')}}>
              <Text style={[Texts.HeadS,{color:Colors.Purple}]}>Extend</Text>
              </TouchableOpacity>

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
              <Text style={styles.time}>{props.dur2}</Text>
              <Text style={styles.timeHr}>hr</Text>
              <Text style={styles.leftText}>left</Text>

              <TouchableOpacity style={styles.extendButton} onPress={() => {props.showPop('ExtendParking2')}}>
              <Text style={[Texts.HeadS,{color:Colors.Purple}]}>Extend</Text>
              </TouchableOpacity>

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
          <Text style={Texts.HeadL}>Unit {props.room}
          </Text>
          <Text style={Texts.BodyLight}>Estimated spots left: {SpotCount}</Text>

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