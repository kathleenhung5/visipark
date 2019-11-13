import React, {useState} from 'react';
import {View, Text, TouchableOpacity, ScrollView, Image} from 'react-native';
import {Colors} from '../../styles/Colors';
import Texts from '../../styles/Texts';
import styles from '../../styles/CompsStyles/VisitorStyles';

function Visitors(props){

  //Mockup Numbers
  var UnitNum = "201";
  var SpotCount = "5";
  //Active Card 
  var currentVisitor1 = "Elias Tayag"
  var currentVisitorPlate = "343 I6R"
  var timeLeft = 11;
 
  

  //Function 1


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
          {/* UnitVisitors.js*/}
            <View style={styles.activeBox} >
              <Text style={styles.visitorName}>{currentVisitor1}</Text>
              <Text style={styles.plateText}>{currentVisitorPlate}</Text>
              <Image resizeMode='contain' source={require('../../img/car.png')} style={styles.carIcon} />
              <Text style={styles.time}>{timeLeft}</Text>
              <Text style={styles.timeHr}>hr</Text>
              <Text style={styles.leftText}>left</Text>

              <TouchableOpacity style={styles.extendButton} onPress={() => {props.showPop('ExtendParking')}}>
              <Text style={[Texts.HeadS,{color:Colors.Purple}]}>Extend</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.removeButton} onPress={() => {props.showPop('Remove')}}>
              <Text style={[Texts.HeadS,{color:'#fff'}]}>Remove</Text>
              </TouchableOpacity>

          </View>
          
          {/* Empty card */}
         <TouchableOpacity style={styles.Box} onPress={() => {props.showPop('AddVisitor')}}>
                <Image resizeMode='contain' source={require('../../img/add-visi.png')} style={styles.Img}/>
                <Text style={Texts.BodyLight}>Add Visitor</Text>
         </TouchableOpacity> 
      </View>
    </View>
    </ScrollView>
    </View>
  )
}

export default Visitors;