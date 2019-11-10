
import React,{useState,useEffect} from 'react';
import {View, Text} from 'react-native';
import styles from '../styles/PagesStyles/MainStyles';
import Tenant from '../Pages/Tenant';
import Login from '../Pages/Login';
import Popup from '../comps/Popup';
import Manager from '../Pages/Manager';
import axios from 'axios';
import Axios from 'axios';




function Main(props){
// --- Communicate with DB ----
    const [dbUnits, setDbUnits] = useState([]);
    const [dbVisitors, setDbVisitors] = useState([]);
    const [dbReports, setDbReports] = useState([]);
    
    // getData Function
    var getData = async()=>{
        var resp = await fetch('http://localhost:8888/visipark/visipark.php');
        var data = await resp.json();
        setDbUnits(data.data.units);
        setDbVisitors(data.data.visitors);
        setDbReports(data.data.reports);
        console.log('units',dbUnits);
        console.log('visitors',dbVisitors);
        console.log('reports',dbReports);
    }

    // postData Function
    const addVisitor = async()=>{
        var visitor = {
            table:"visitors",
            data: {
                unit_num: 101,
                name: "Visitor Name",
                plate: "vis plt"
            }
        }
        var data = await axios.post("http://localhost:8888/visipark/visipark.php", visitor);
        console.log("create", data);
        }
    


    // ---- Run getData when it loads
    useEffect(()=>{
        addVisitor();
       getData();
    },[]);

// ---- Pop up ---
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
        props.setSafebg(false);
    }
    if(showpage == 'Tenant'){
        page = <Tenant 
                 pop = {pop} 
                 showPop = {showPop}
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
