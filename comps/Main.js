  
import React from 'react';
import {View, Text} from 'react-native';
import styles from '../styles/MainStyles';
import Tenant from './Tenant/Tenant';

function Main(){
    // UI
    return (
        <View style={styles.container}>
            <Tenant />
        </View>
    )
}

export default Main;