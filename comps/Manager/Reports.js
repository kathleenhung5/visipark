import React from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import {Colors} from '../../styles/Colors';
import Texts from '../../styles/Texts';
import styles from '../../styles/CompsStyles/ReportsStyles';

function Reports(props){

    var reports = 

    <View style={styles.card}>
        <TouchableOpacity onPress={() => {props.showPop('Reports') }}>
            <Text style={Texts.HeadL}>Overtime parking!!</Text>
            <Text style={Texts.Body}>Aug.22</Text>
            <Text style={Texts.BodyLight}>someone has been parkin...</Text>
            <Text style={Texts.Link}>Read More >></Text>
        </TouchableOpacity>

     </View>

    return(
        <View style={styles.container}>

        <Text style={Texts.SecHead}>Reports</Text>
        <Text style={[Texts.Body, styles.headerDesc]}>Read or trash reports submitted by tenants regarding visitor parkng.</Text>

{/* tenants reports starts here */}
<ScrollView>
<View style={styles.card}>

        <TouchableOpacity onPress={() => {props.showPop('Reports') }}>

             <Text style={Texts.HeadL}>Help!</Text>
             <Text style={Texts.Body}>Aug.22</Text>
             <Text style={Texts.BodyLight}>someone has been parkin...</Text>
             <Text style={Texts.Link}>Read More >></Text>

        </TouchableOpacity>


     </View>
        {reports}
</ScrollView>

    
</View>
    )
}

export default Reports;
