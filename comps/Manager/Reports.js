import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {Colors} from '../../styles/Colors';
import Texts from '../../styles/Texts';
import styles from '../../styles/CompsStyles/ReportsStyles';

function Reports(){

    var reports = 

    <View>

     </View>

    return(
        <View style={styles.container}>

        <Text style={Texts.SecHead}>Reports</Text>
        <Text style={[Texts.Body, styles.headerDesc]}>Read or trash reports submitted by tenants regarding visitor parkng.</Text>

{/* tenants reports starts here */}
<ScrollView>
        {reports}
</ScrollView>

    
</View>
    )
}

export default Reports;
