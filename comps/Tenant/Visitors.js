import React from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import {Colors} from '../../styles/Colors';
import Texts from '../../styles/Texts';
import styles from '../../styles/VisitorStyles';
import UnitVisitors from './UnitVisitors';


function Visitors(){

  //random numbers for now...
  var UnitNum = "201";
  var SpotCount = "5";
  
  return(
    //Top part (SecHead, Desc, Policy)
   
    <View style={styles.Top}>

      <Text style={Texts.SecHead}>Visitors</Text>

      <Text style={Texts.Body}>
        Add your visitors upon their arrival
        and remove them upon their departure.
      </Text>

    <TouchableOpacity>
      <Text style={Texts.Link}>
        Visitor Parking Policy >></Text>
        </TouchableOpacity>


    <View style={styles.Middle}>
      <Text style={Texts.HeadL}>Unit {UnitNum}</Text>

      <UnitVisitors/>
    </View>



    <View style={styles.Bottom}>
      <Text style={Texts.BodyBold}>Estimated spots left: {SpotCount}</Text>
      </View>
    </View>

  )
}


export default Visitors;
