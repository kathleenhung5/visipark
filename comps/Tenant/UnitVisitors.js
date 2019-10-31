import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {Colors} from '../../styles/Colors';
import Texts from '../../styles/Texts';
import styles from '../../styles/UnitVisitors'




function UnitVisitors(){
    return(
        <TouchableOpacity>
    <View style={styles.Box}>
        <Image source={require('../../img/add-visi.png')} style={styles.Img}/>
        <Text>Add Visitor</Text>


    </View>
    </TouchableOpacity>
    )
}

export default UnitVisitors;