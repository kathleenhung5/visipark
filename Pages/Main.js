import React,{useState,useEffect} from 'react';
import {View, Text, AsyncStorage} from 'react-native';
import styles from '../styles/PagesStyles/MainStyles';
import Tenant from '../Pages/Tenant';
import Login from '../Pages/Login';
import Popup from '../comps/Popup';
import Manager from '../Pages/Manager';

function Main(props){
// --------------- Communicate with DB ----------------
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
    
     // Get Current Visitor Function
     const [currentVisitors, setCurrentVisitors] = useState([]);
     const dbGetCurrentVisitors = async(unit)=>{
        var visitor = {
            data: {
                unit_num: unit
            }
        }
        var data = await fetch('http://localhost:8888/visipark/getCurrentVisitors.php',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body: JSON.stringify(visitor)
        })
        let visitordata = await data.text();
        console.log("Data received from server for showing current visitors of a unit",JSON.parse(visitordata)); 
        dbGetData();
        // set current visitors
        setCurrentVisitors(JSON.parse(visitordata));
    }
    
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
            // the following is an exmaple of what to put in the obj "data" to send to the server for extending a visitor 
            data: {
                // id: 8,
                // extendhour: "3:00:00"

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
            // the following is an exmaple of what to put in the obj "data" to send to the server for getting all pinned and not pinned visitors in History page 
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
        console.log("Data received from server for History page",JSON.parse(visitordata)); 
    }

    // Pin Visitor function 
    const dbPinVisitor = async()=>{
        var visitor = {
            // the following is an exmaple of what to put in the obj "data" to send to the server for pinning a visitor in History page 
            data: {
                id: 5
                // here add your own data, make sure use the same property name and same data type for value 
            }
        }
        var data = await fetch('http://localhost:8888/visipark/pinVisitor.php',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body: JSON.stringify(visitor)
        })
        let visitordata = await data.text();
        console.log("Data sent to server to pin a visitor",JSON.parse(visitordata)); 
        dbGetHistory();
        dbGetData();
    }

    // Unpin Visitor function 
    const dbUnpinVisitor = async()=>{
        var visitor = {
            // the following is an exmaple of what to put in the obj "data" to send to the server for pinning a visitor in History page 
            data: {
                id: 5
                // here add your own data, make sure use the same property name and same data type for value 
            }
        }
        var data = await fetch('http://localhost:8888/visipark/unpinVisitor.php',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body: JSON.stringify(visitor)
        })
        let visitordata = await data.text();
        console.log("Data sent to server to Unpin a visitor",JSON.parse(visitordata)); 
        dbGetHistory();
        dbGetData();
    }



    // ----------- functions that run when the app loads ----------------
    useEffect(()=>{
        //Get unit number if there's one
        getUnit().then(dbGetCurrentVisitors(101));
        // dbUnpinVisitor();
        // dbPinVisitor();
        // dbGetHistory();
        dbGetData();
        // dbExtendVisitor();
        // dbRemoveVisitor();
        // dbAddVisitor();
    },[]);
    // console.log('get all tables',dbUnits,dbVisitors,dbReports);

// ------------------- Pop up ----------------------
    // Function for Popup
    // Call showPop('YourPopupTitle') in your button to show the corresponding Popup.
    // Example: Your Popup title is 'Add Visitor', call showPop('AddVisitor') in your onPress.
    // !! IMPORTANT !! To close Popup, call showPop('')

    // Variable to show and hide popup
    const [pop, showPop] = useState(''); 
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
                     name1 = {name1}
                     setName1 ={setName1}
                     name2 = {name2}
                     setName2 ={setName2}
                     plate1 = {plate1}
                     setPlate1 ={setPlate1}
                     plate2 = {plate2}
                     setPlate2 ={setPlate2}
                     dur1 = {dur1}
                     setDur1 ={setDur1}
                     dur2 = {dur2}
                     setDur2 ={setDur2}
                 />;                 
             }

// ----------------- Unit and Visitors info ----------------
    // state variable for unit info
    const [unit, setUnit] = useState();
    // function to get unit number from local storage 
    var getUnit = async()=>{
        var localunit = await AsyncStorage.getItem('unit');
        console.log('your unit', localunit);
        if(localunit !== null && localunit !==''){
            // if there IS unit number stored in local storage
            // whice means, a unit has logged in on this phone
            setUnit(localunit);
            setShowpage('Tenant');
        } else {
            setShowpage('Login');
        }
    }
    // state variables for visitor info
    const [card1, setCard1] = useState(false);  // card1={true} means cardtop in <Visitors /> is shown and holding a visitor's info   
    const [card2, setCard2] = useState(false);
    const [name1, setName1] = useState('');
    const [name2, setName2] = useState('');
    const [plate1, setPlate1] = useState('');
    const [plate2, setPlate2] = useState('');
    const [dur1, setDur1] = useState(1); // unit is Minute
    const [dur2, setDur2] = useState(1);
    const [id1,setId1] = useState();
    const [id2,setId2] = useState();
    // set visitor1 and visitor2 with current visitors info
    if (currentVisitors.length == 1){
        console.log('test!!',currentVisitors[0].name);
        // setName1(currentVisitors[0].name);
        // setPlate1(currentVisitors[0].plate);
        // setDur1(currentVisitors[0].time_left);
        // setId1(currentVisitors[0].id);
    }
// ------------------ Pages ---------------------
    // state variable to show and hide pages and variables hold pages. 
    const [showpage, setShowpage] = useState('');
    var mpopup = null;
    var page = null;
    
    // conditions to show and hide pages
    

    if(showpage == 'Login'){
        page = <Login 
                // show Login, Tenant or Manager page
                showpage={showpage}    
                setShowpage={setShowpage} 
                // unit info
                unit = {unit}
                setUnit = {setUnit}
                />;
        props.setSafebg(false);
    }
    if(showpage == 'Tenant'){
        page = <Tenant 
                // pop up
                 pop = {pop} 
                 showPop = {showPop}
                 // cards
                 card1 = {card1}
                 setCard1 = {setCard1}
                 card2 = {card2}
                 setCard2 = {setCard2}
                 // unit info
                 unit = {unit}
                 // visitors info
                 name1 = {name1}
                 setName1 ={setName1}
                 name2 = {name2}
                 setName2 ={setName2}
                 plate1 = {plate1}
                 setPlate1 ={setPlate1}
                 plate2 = {plate2}
                 setPlate2 ={setPlate2}
                 dur1 = {dur1}
                 setDur1 ={setDur1}
                 dur2 = {dur2}
                 setDur2 ={setDur2}

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

    // -------------- UI ------------------
return (
        <View style={styles.container}>
           {mpopup} 
           {page}
        </View>
    )
}

export default Main;
