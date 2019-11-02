
import React,{useState} from 'react';
import {View, Text} from 'react-native';
import styles from '../styles/MainStyles';
import Tenant from './Tenant/Tenant';
import Login from '../comps/Login';
import Report from '../comps/Tenant/Report';
import Popup from './Popup/Popup';


function Main(){
    // Function for Popup
    // Call showPop('YourPopupTitle') in your button to show the corresponding Popup.
    // Example: Your Popup title is 'Add Visitor', call showPop('AddVisitor') in your onPress.
    // !! IMPORTANT !! To close Popup, call showPop('').
    const [pop, showPop] = useState('AddVisitor'); 
    var mpopup = null;
    var page = <Tenant 
                 pop = {pop} 
                 showPop = {showPop}
                />;
    // Conditions to show Popup
    if (pop == ''){
       mpopup = null;
    } else {
        mpopup = <Popup 
                    pop = {pop} 
                    showPop = {showPop} 
                />;
            }
    
    // UI
    return (
        <View style={{height: "100%"}}>
           {mpopup} 
           {page}
        </View>
    )
}

export default Main;
