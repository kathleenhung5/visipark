import React, {useState} from 'react';
import {View, Text, TouchableOpacity, ScrollView, Image} from 'react-native';
import {Colors} from '../../styles/Colors';
import Texts from '../../styles/Texts';
import styles from '../../styles/VisitorStyles';
import UnitVisitors from './UnitVisitors';





function Visitors(props){

  //random numbers for now...
  var UnitNum = "201";
  var SpotCount = "5";
  //active visitors card 1
  var currentVisitor1 = "Elias Tayag"
  var currentVisitorPlate = "343 I6R"
  var timeLeft = 11;



  
  return(
    //Top part (SecHead, Desc, Policy)

    <View style={{height:"100%"}}>

       
      {/* Kathleen: I added ScrollView here */}
    <ScrollView style={styles.scrollview} >
    <View style={{height:"100%"}}>
      {/* Top */}
        <View style={styles.Top}>
          <Text style={Texts.SecHead}>Visitors</Text>
          <Text style={Texts.Body}>
            Add your visitors upon their arrival
            and remove them upon their departure.
          </Text>
          <TouchableOpacity onPress={() => {props.showPop('VisitorsParkingPolicy')}}>
            <Text style={Texts.Link}>
              Visitor Parking Policy >>
            </Text>
          </TouchableOpacity>
        </View>

      {/* Middle */}
        <View style={styles.Middle}>
          <Text style={Texts.HeadL}>Unit {UnitNum}
          </Text>

          {/* UnitVisitors.js moved in here*/}
          <View style={{height:"100%"}}>
            
            <View style={styles.activeBox} >
          <Text style={styles.visitorName}>{currentVisitor1}</Text>
          <Text style={styles.plateText}>{currentVisitorPlate}</Text>
          <Image source={require('../../img/car.png')} style={styles.carIcon} />
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
                <TouchableOpacity style={styles.Box} onPress={() => {props.showPop('AddVisitor')}}>
                <Image source={require('../../img/add-visi.png')} style={styles.Img}/>
                <Text style={Texts.BodyLight}>Add Visitor</Text>
            </TouchableOpacity>
        
                </View>

        </View>


      {/* Bottom */}
        <View style={styles.Bottom}>
          <Text style={Texts.BodyBold}>Estimated spots left: {SpotCount}</Text>
        </View>
        
    {/* Added scrollview and a view inside */}
    </View>
    </ScrollView>

    </View>
    
  )
}


export default Visitors;
