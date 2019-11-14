
import React,{useState,useEffect} from 'react';
import {View, Text} from 'react-native';
import styles from '../styles/PagesStyles/MainStyles';
import Tenant from '../Pages/Tenant';
import Login from '../Pages/Login';
import Popup from '../comps/Popup';
import Manager from '../Pages/Manager';
import axios from 'axios';




function Main(props){
// ---------- Communicate with DB -----------
    // These are the variables holding information sent from the db
    const [dbUnits, setDbUnits] = useState([]);
    const [dbVisitors, setDbVisitors] = useState([]);
    const [dbReports, setDbReports] = useState([]);

    // getData Function
    var dbGetData = async()=>{
        var resp = await fetch('http://localhost:8888/visipark/getData.php');
        var data = await resp.json();
        setDbUnits(data.data.units);
        setDbVisitors(data.data.visitors);
        setDbReports(data.data.reports);
    }
    console.log(dbUnits,dbVisitors,dbReports);
    
    // Add visitor Function
    const dbAddVisitor = async()=>{
        var visitor = {
            // the following is an exmaple of what to put in the obj "data" to send to the server for adding a visitor 
            data: {
                // unit_num: 102,
                // name: "Elias",
                // plate: "abd 456",
                // duration: '3:00:00'

                // here add your own data, make sure use the same property name and same data type for value 

            }
        }
        var data = await fetch('http://localhost:8888/visipark/addVisitor.php',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body: JSON.stringify(visitor)
        })
        let visitordata = await data.text();
        console.log("Data that server received for adding visitor",visitordata); 
        dbGetData();
    }
    
    // Remove visitor function 
    const dbRemoveVisitor = async()=>{
        var visitor = {
            // the following is an exmaple of what to put in the obj "data" to send to the server for removing a visitor 
            data: {
                // id: 5

                // here add your own data, make sure use the same property name and same data type for value 
            }
        }
        var data = await fetch('http://localhost:8888/visipark/removeVisitor.php',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body: JSON.stringify(visitor)
        })
        let visitordata = await data.text();
        console.log("Data that server received for removing visitor",visitordata); 
        dbGetData();
    }

    // Extend visitor function 
    const dbExtendVisitor = async()=>{
        var visitor = {
            // the following is an exmaple of what to put in the obj "data" to send to the server for removing a visitor 
            data: {
                id: 8,
                extendhour: "3:00:00"

                // here add your own data, make sure use the same property name and same data type for value 
            }
        }
        var data = await fetch('http://localhost:8888/visipark/extendVisitor.php',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body: JSON.stringify(visitor)
        })
        let visitordata = await data.text();
        console.log("Data that server received for extending visitor",visitordata); 
        dbGetData();
    }

    // Get History function 
    const dbGetHistory = async()=>{
        var visitor = {
            // the following is an exmaple of what to put in the obj "data" to send to the server for removing a visitor 
            data: {
                unit_num: 101

                // here add your own data, make sure use the same property name and same data type for value 
            }
        }
        var data = await fetch('http://localhost:8888/visipark/getHistory.php',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body: JSON.stringify(visitor)
        })
        let visitordata = await data.text();
        console.log("Data sent from server for History",JSON.parse(visitordata)); 
        dbGetData();
    }



    // ------------- functions that run when the app loads ----------------
    useEffect(()=>{
        // dbGetHistory();
        // dbGetData();
        // dbExtendVisitor();
        // dbRemoveVisitor();
        // dbAddVisitor();
    },[]);

// ------------- Pop up -----------------
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
    
    // -------------- UI ------------------
return (
        <View style={styles.container}>
           {mpopup} 
           {page}
        </View>
    )
}

export default Main;
