
import React from 'react';
import {View, Text} from 'react-native';
import styles from '../styles/MainStyles';
import Tenant from './Tenant/Tenant';
import Login from '../comps/Login';
import History from '../comps/Tenant/History';
import Report from '../comps/Tenant/Report';


function Main(){
    // UI

    var page = <Tenant />

    return (
        <View style={{height: "100%"}}>

           {page}
            
        </View>
    )
}

export default Main;
