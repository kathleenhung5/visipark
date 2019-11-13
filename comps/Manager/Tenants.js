import React from 'react';
import {View, Text,
        TextInput,
    } from 'react-native';
import {Colors} from '../../styles/Colors';
import Texts from '../../styles/Texts';
import styles from '../../styles/CompsStyles/TenantsStyles';

function Tenants(props){
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={Texts.SecHead}>Tenants</Text>
                <Text style={Texts.Body}>Activate VisiPark and add a tenant plate number for each unit as needed. 
                    Reactivate for updating tenant plate.</Text>
            </View>

            <View style={styles.content}>
                <TextInput 
                placeholder="Search Room Number"></TextInput>
            </View>
        </View>
    )
}

export default Tenants;
