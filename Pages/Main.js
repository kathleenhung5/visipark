
import React,{useState} from 'react';
import {View, Text} from 'react-native';
import styles from '../styles/PagesStyles/MainStyles';
import Tenant from '../Pages/Tenant';
import Login from '../Pages/Login';
import Popup from '../comps/Popup';
import Manager from '../Pages/Manager';




function Main(){
    // Function for Popup
    // Call showPop('YourPopupTitle') in your button to show the corresponding Popup.
    // Example: Your Popup title is 'Add Visitor', call showPop('AddVisitor') in your onPress.
    // !! IMPORTANT !! To close Popup, call showPop('').

    const [pop, showPop] = useState(''); 
    const [showpage, setShowpage] = useState('Login');
    var mpopup = null;
    var page = null;
    
    // Conditions to show {page}
    if(showpage == 'Login'){
        page = <Login showpage={showpage} setShowpage={setShowpage} />;
    }
    if(showpage == 'Tenant'){
        page = <Tenant 
                 pop = {pop} 
                 showPop = {showPop}
                />;
    }
    if(showpage == 'Manager'){
        page = <Manager 
                 pop = {pop} 
                 showPop = {showPop}
                />;
    }


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
        <View style={styles.container}>
           {mpopup} 
           {page}
        </View>
    )
}

export default Main;
