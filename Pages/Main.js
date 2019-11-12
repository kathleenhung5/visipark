
import React,{useState} from 'react';
import {View, Text} from 'react-native';
import styles from '../styles/PagesStyles/MainStyles';
import Tenant from '../Pages/Tenant';
import Login from '../Pages/Login';
import Popup from '../comps/Popup';
import Manager from '../Pages/Manager';




function Main(props){
    // Function for Popup
    // Call showPop('YourPopupTitle') in your button to show the corresponding Popup.
    // Example: Your Popup title is 'Add Visitor', call showPop('AddVisitor') in your onPress.
    // !! IMPORTANT !! To close Popup, call showPop('').

    const [pop, showPop] = useState(''); 
    const [showpage, setShowpage] = useState('Login');
    var mpopup = null;
    var page = null;

    //--------- Kathleen ----------
    // I added them here, and pass them in popup and in Tenant
    // functions to set visitor cards
    const [card1, setCard1] = useState(false);
    const [card2, setCard2] = useState(false);
    
    // Conditions to show {page}
    if(showpage == 'Login'){
        page = <Login showpage={showpage} setShowpage={setShowpage} />;
        props.setSafebg(false);
    }
    if(showpage == 'Tenant'){
        page = <Tenant 
                 pop = {pop} 
                 showPop = {showPop}
                 card1 = {card1}
                 setCard1 = {setCard1}
                 card2 = {card2}
                 setCard2 = {setCard2}
                />;
        props.setSafebg(true);
    }
    if(showpage == 'Manager'){
        page = <Manager 
                 pop = {pop} 
                 showPop = {showPop}
                />;
        props.setSafebg(true);
    }


    // Conditions to show Popup
    if (pop == ''){
       mpopup = null;
    } else {
        mpopup = <Popup 
                    pop = {pop} 
                    showPop = {showPop} 
                    card1 = {card1}
                    setCard1 = {setCard1}
                    card2 = {card2}
                    setCard2 = {setCard2}
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
