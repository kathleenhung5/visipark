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

    //Elias: if u add scroll view to this view,
    //it squishes the <UnitVisitors> component...
    //change from <View style...> to
    //<ScrollView style...> dont forget the </View> aswell
    <View style={{height:"100%"}}>
      {/* Kathleen: I added ScrollView here */}
    <ScrollView style={styles.scrollview}>
    <View style={{height:"100%"}}>
      {/* Top */}
      {/* Initially you wrapped your everything in your TOP, I've adjusted it so that your TOPview only wrap the top */}
        <View style={styles.Top}>
          <Text style={Texts.SecHead}>Visitors</Text>
          <Text style={Texts.Body}>
            Add your visitors upon their arrival
            and remove them upon their departure.
          </Text>
          <TouchableOpacity>
            <Text style={Texts.Link}>
              Visitor Parking Policy >>
            </Text>
          </TouchableOpacity>
        </View>

      {/* Middle */}
        <View style={styles.Middle}>
          <Text style={Texts.HeadL}>Unit {UnitNum}
          </Text>
          <UnitVisitors/>
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
