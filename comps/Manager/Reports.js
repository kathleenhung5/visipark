import React from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import {Colors} from '../../styles/Colors';
import Texts from '../../styles/Texts';
import styles from '../../styles/CompsStyles/ReportsStyles';
import DropShadows from '../../styles/DropShadows';


function Reports(props){

    var reports = 

    <View style={[styles.card,  DropShadows.shadow]}>
        <TouchableOpacity onPress={() => {props.showPop('Reports') }}>
            <Text style={Texts.HeadL}>Overtime parking!!</Text>
            <Text style={Texts.Body}>Aug.22</Text>
            <Text style={Texts.BodyLight}>someone has been parkin...</Text>
            <Text style={Texts.Link}>Read More >></Text>
        </TouchableOpacity>

     </View>

    return(
        <View style={styles.container}>

        <Text style={[Texts.SecHead, styles.header]}>Reports</Text>
        <Text style={[Texts.Body, styles.headerDesc]}>Read or delete reports submitted by tenants regarding visitor parkng.</Text>

{/* tenants reports starts here */}
<ScrollView>

        {reports}
</ScrollView>

    
</View>
    )
}

export default Reports;
