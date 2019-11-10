import React, {useState} from 'react';
import {View, Text, TouchableOpacity, ScrollView, Image} from 'react-native';
import {Colors} from '../../styles/Colors';
import Texts from '../../styles/Texts';
import styles from '../../styles/CompsStyles/VisitorStyles';

function Visitors(props){

  //Database apartment States
  var UnitNum = "201";
  var SpotCount = "5";

  //Current Visitor names, plates and time left
  var currentVisitor1 = "elias";
  var currentVisitor2 = "tayag";

  var currentVisitorPlate1 = "343 I6R"
  var currentVisitorPlate2 = "244 V35"

  var timeLeft1 = 11;
  var timeLeft2 = 11;

  //Visitor functions default states
  let [card1, setCard1] = useState(false);
  let [card2, setCard2] = useState(false);

  //Visitor card 1 function
  //default state
  if (card1 == false){

    card1 =
    <TouchableOpacity style={styles.Box} onPress={() => {props.showPop('AddVisitor') }} >
      <Image resizeMode='contain' source={require('../../img/add-visi.png')} style={styles.Img}/>
      <Text style={Texts.BodyLight}>Add Visitor</Text>
    </TouchableOpacity> 
  } 
  
  //if visitor is added state = true 
  if (card1 == true){
    card1 =
              <View style={styles.activeBox} >
              <Text style={styles.visitorName}>{currentVisitor1}</Text>
              <Text style={styles.plateText}>{currentVisitorPlate1}</Text>
              <Image resizeMode='contain' source={require('../../img/car.png')} style={styles.carIcon} />
              <Text style={styles.time}>{timeLeft1}</Text>
              <Text style={styles.timeHr}>hr</Text>
              <Text style={styles.leftText}>left</Text>

              <TouchableOpacity style={styles.extendButton} onPress={() => {props.showPop('ExtendParking')}}>
              <Text style={[Texts.HeadS,{color:Colors.Purple}]}>Extend</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.removeButton} onPress={() => {props.showPop('Remove')}}>
              <Text style={[Texts.HeadS,{color:'#fff'}]}>Remove</Text>
              </TouchableOpacity>

          </View> 
  } 

  //Visitor card 2 functions (same syntax as visitor 1)
  if (card2 == false){
    card2 =
    <TouchableOpacity style={styles.Box2} onPress={() => {props.showPop('AddVisitor') }}>
      <Image resizeMode='contain' source={require('../../img/add-visi.png')} style={styles.Img}/>
      <Text style={Texts.BodyLight}>Add Visitor</Text>
    </TouchableOpacity> 
  } 

  if (card2 == true){
    card2 =
              <View style={styles.activeBox2} >
              <Text style={styles.visitorName}>{currentVisitor2}</Text>
              <Text style={styles.plateText}>{currentVisitorPlate2}</Text>
              <Image resizeMode='contain' source={require('../../img/car.png')} style={styles.carIcon} />
              <Text style={styles.time}>{timeLeft2}</Text>
              <Text style={styles.timeHr}>hr</Text>
              <Text style={styles.leftText}>left</Text>

              <TouchableOpacity style={styles.extendButton} onPress={() => {props.showPop('ExtendParking')}}>
              <Text style={[Texts.HeadS,{color:Colors.Purple}]}>Extend</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.removeButton} onPress={() => {props.showPop('Remove')}}>
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
          <Text style={Texts.HeadL}>Unit {UnitNum}
          </Text>
          <Text style={Texts.BodyLight}>Estimated spots left: {SpotCount}</Text>

      <View style={{height:"100%", paddingTop:20}}>
        
          {/* Visitor Cards UI*/}
          {card1}
          {card2} 

      </View>
    </View>
    </ScrollView>
    </View>
  )
}

export default Visitors;