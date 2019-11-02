
import React from 'react';
import {View, Text} from 'react-native';
import styles from '../styles/MainStyles';
import Tenant from './Tenant/Tenant';
import Login from '../comps/Login';
import History from '../comps/Tenant/History';


function Main(){
    // UI
    var page = <Login/>

    return (
        <View style={styles.container}>
           {page}

        </View>
    )
}

export default Main;
