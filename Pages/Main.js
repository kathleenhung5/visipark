import React,{useState,useEffect} from 'react';
import {View, Text, AsyncStorage} from 'react-native';
import styles from '../styles/PagesStyles/MainStyles';
import Tenant from '../Pages/Tenant';
import Login from '../Pages/Login';
import Popup from '../comps/Popup';
import Manager from '../Pages/Manager';

var timer = null;
function Main(props){
// --------------- Communicate with DB ----------------
    // getData Function
    const [dbUnits, setDbUnits] = useState([]);
    const [dbVisitors, setDbVisitors] = useState([]);
    const [dbReports, setDbReports] = useState([]);
    var dbGetData = async()=>{
        var resp = await fetch('http://localhost:8888/visipark/getData.php');
        var data = await resp.json();
        setDbUnits(data.data.units);
        setDbVisitors(data.data.visitors);
        setDbReports(data.data.reports);
    }

    // Auto Remove expired visitors
    var dbAutoRemove = async()=>{
        var resp = await fetch('http://localhost:8888/visipark/autoRemove.php');
        // console.log('timer');
    }

     // Get Current Visitor Function
     //const [currentVisitors, setCurrentVisitors] = useState([]);
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
        // console.log("Data received from server for showing current visitors of a unit",JSON.parse(visitordata)); 

        // set current visitors
        // console.log('parsed',JSON.parse(visitordata));
        var currentVisitors = JSON.parse(visitordata);
        
        // set visitor1 and visitor2 with current visitors info
        if (currentVisitors.length == 1){
            // console.log('there is 1 current visitor');
            setName1(currentVisitors[0].name);
            setPlate1(currentVisitors[0].plate);
            setDur1(currentVisitors[0].time_left);
            setId1(currentVisitors[0].id);
            setCard1(true);
        }
        if (currentVisitors.length == 2){
            // console.log('there are 2 current visitors');
            setName1(currentVisitors[0].name);
            setPlate1(currentVisitors[0].plate);
            setDur1(currentVisitors[0].time_left);
            setId1(currentVisitors[0].id);
            setCard1(true);
            setName2(currentVisitors[1].name);
            setPlate2(currentVisitors[1].plate);
            setDur2(currentVisitors[1].time_left);
            setId2(currentVisitors[1].id);
            setCard2(true);
        }
    }
   
    // Get History function 
    const [PinnedVisitors, setPinnedVisitors] = useState([]);
    const [UnpinnedVisitors, setUnpinnedVisitors] = useState([]);
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
        console.log('pinned',JSON.parse(visitordata).pinned);
        console.log('Unpinned',JSON.parse(visitordata).notpinned);
        // set Pinned Visitors
        setPinnedVisitors(JSON.parse(visitordata).pinned);
        setUnpinnedVisitors(JSON.parse(visitordata).notpinned);
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

    // get spots left function 
    const [spots,setSpots] = useState();
    var dbGetSpots = async()=>{
    var resp = await fetch('http://localhost:8888/visipark/getSpots.php');
    var data = await resp.json();
    setSpots(data);
}


// ------------------- Pop up ----------------------
    // Function for Popup
    // Call showPop('YourPopupTitle') in your button to show the corresponding Popup.
    // Example: Your Popup title is 'Add Visitor', call showPop('AddVisitor') in your onPress.
    // !! IMPORTANT !! To close Popup, call showPop('')

    // Variable to show and hide popup
    const [pop, showPop] = useState(''); 


// ----------------- Unit and Visitors info ----------------
    // state variables for setting Tenant page content
    const [cont, setCont] = useState('Visitors');
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

   // function to get unit number from local storage 
   const [unit, setUnit] = useState();
   var getUnit = async()=>{
       var localunit = await AsyncStorage.getItem('unit');
       console.log('your unit', localunit);
       
       if(localunit !== null && localunit !==''){
           // if there IS unit number stored in local storage
           // run get current visitor
           await dbGetCurrentVisitors(localunit);
           setUnit(localunit);
           setShowpage('Tenant');
         } else {
           setShowpage('Login');
         }
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
                // content 
                cont = {cont}
                setCont = {setCont}
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
                 id1 = {id1}
                 id2 = {id2}
                 // spots
                 spots = {spots}
                 // History Page
                 UnpinnedVisitors = {UnpinnedVisitors}
                 PinnedVisitors = {PinnedVisitors}
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
                     // popup
                     pop = {pop} 
                     showPop = {showPop} 
                     // show page
                     setShowpage = {setShowpage}
                     // set content on Tenant page
                     cont = {cont}
                     setCont = {setCont}
                     // cards
                     card1 = {card1}
                     setCard1 = {setCard1}
                     card2 = {card2}
                     setCard2 = {setCard2}
                     // unit
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
                     id1 = {id1}
                     id2 = {id2}
                     // functions
                     dbGetCurrentVisitors = {dbGetCurrentVisitors}
                 />;                 
             }



// ----------- functions that run when the app loads ----------------
    
    
    

    useEffect(()=>{
        getUnit();
        dbGetHistory();
        // timer for auto remove
        // if(timer === null){
        //     timer = setInterval(()=>{
        //         dbAutoRemove();
        //         dbGetCurrentVisitors();
        //         dbGetHistory();
        //     },1000);
        // }
        // return ()=>{
        //     if(timer){
        //         clearInterval(timer);
        //         timer = null;
        //     }
        // }

    },[]);
    



    
    // -------------- UI ------------------
return (
        <View style={styles.container}>
           {mpopup} 
           {page}
        </View>
    )
}

export default Main;
