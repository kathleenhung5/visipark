
import React,{useState,useEffect} from 'react';
import {View, Text} from 'react-native';
import styles from '../styles/PagesStyles/MainStyles';
import Tenant from '../Pages/Tenant';
import Login from '../Pages/Login';
import Popup from '../comps/Popup';
import Manager from '../Pages/Manager';





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
    
     // Get Current Visitor Function
     const dbGetCurrentVisitors = async()=>{
        var visitor = {
            // the following is an exmaple of what to put in the obj "data" to send to the server for adding a visitor 
            data: {
                unit_num: 101

                // here add your own data, make sure use the same property name and same data type for value 

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



    // ------------- functions that run when the app loads ----------------
    useEffect(()=>{
        dbGetCurrentVisitors();
        // dbUnpinVisitor();
        // dbPinVisitor();
         //dbGetHistory();
        // dbGetData();
        // dbExtendVisitor();
        // dbRemoveVisitor();
        // dbAddVisitor();
    },[]);
    console.log(dbUnits,dbVisitors,dbReports);

// ------------- Pop up -----------------
    // Function for Popup
    // Call showPop('YourPopupTitle') in your button to show the corresponding Popup.
    // Example: Your Popup title is 'Add Visitor', call showPop('AddVisitor') in your onPress.
    // !! IMPORTANT !! To close Popup, call showPop('').

    const [pop, showPop] = useState(''); 
    const [showpage, setShowpage] = useState('Login');
    // visitor info
     const [visiName, setVisiName] = useState('');
     const [visiPlate, setVisiPlate] = useState('');
     const [visiDur, setVisiDur] = useState(0);

    var mpopup = null;
    var page = null;

    //--------- Kathleen ----------
    // I added them here, and pass them in popup and in Tenant
    // functions to set visitor cards
    const [card1, setCard1] = useState(false);
    const [card2, setCard2] = useState(false);
    const [name1, setName1] = useState('');
    const [name2, setName2] = useState('');
    const [plate1, setPlate1] = useState('');
    const [plate2, setPlate2] = useState('');
    const [dur1, setDur1] = useState(1);
    const [dur2, setDur2] = useState(1);
    
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
                 visiName = {visiName}
                 setVisiName = {setVisiName}
                 visiPlate ={visiPlate} 
                 setVisiPlate = {setVisiPlate}
                 visiDur = {visiDur} 
                 setVisiDur = {setVisiDur}
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

//                    visiName = {visiName}
//                     setVisiName = {setVisiName}
//                     visiPlate ={visiPlate} 
//                     setVisiPlate = {setVisiPlate}
//                     visiDur = {visiDur} 
//                     setVisiDur = {setVisiDur}

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
    
    // -------------- UI ------------------
return (
        <View style={styles.container}>
           {mpopup} 
           {page}
        </View>
    )
}

export default Main;
