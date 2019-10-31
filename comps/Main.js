
import React,{useState} from 'react';
import {View, Text} from 'react-native';
import styles from '../styles/MainStyles';
import Tenant from './Tenant/Tenant';
import Login from '../comps/Login';
import Report from '../comps/Tenant/Report';
import Popup from '../comps/Popup/Popup';


function Main(){
    // Function for Popup
    // Call showPop('your Popup title') in your button to show the corresponding Popup.
    // Example: Your Popup title is 'Add Visitor', call showPop('AddVisitor') in your onPress.
    // !! IMPORTANT !! To close Popup, call showPop('').
    const [pop, showPop] = useState('AddVisitor'); 
    var Popup = null;
    if (pop == ''){
       Popup = null;
    } else {
        Popup = <Popup 
                    pop = {pop} 
                    showPop = {showPop}
                />
    }

    // UI
    var page = <Tenant showPop = {showPop}/>

    return (
        <View style={{height: "100%"}}>
            {Popup}
           {page}
            
        </View>
    )
}

export default Main;
