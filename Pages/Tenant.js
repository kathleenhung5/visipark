import React,{useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Visitors from '../comps/Tenant/Visitors';
import History from '../comps/Tenant/History';
import Report from '../comps/Tenant/Report';
import styles from '../styles/PagesStyles/TenantStyles';
import {Colors} from '../styles/Colors';




function Tenant(props){
  const [cont, setCont] = useState('Visitors');
 
  // img src variables
  var visitorimg = null;
  var historyimg = null;
  var reportimg = null;

// Content is everything above tab bar
  var Content = null;

// conditions updating Content and tabbar
  if(cont == 'Visitors'){
    Content = <Visitors 
// <<<<<<< HEAD
//     pop={props.pop} 
//     showPop={props.showPop}
//     visiName = {props.visiName}
//     setVisiName = {props.setVisiName}
//     visiPlate ={props.visiPlate} 
//     setVisiPlate = {props.setVisiPlate}
//     visiDur = {props.visiDur} 
//     setVisiDur = {props.setVisiDur}
//     />
    

          pop={props.pop} 
          showPop={props.showPop}
          card1 = {props.card1}
          setCard1 = {props.setCard1}
          card2 = {props.card2}
          setCard2 = {props.setCard2}
          name1 = {props.name1}
          setName1 ={props.setName1}
          name2 = {props.name2}
          setName2 ={props.setName2}
          plate1 = {props.plate1}
          setName1 ={props.setPlate1}
          plate2 = {props.plate2}
          setPlate2 ={props.setPlate2}
          dur1 = {props.dur1}
          setDur1 ={props.setDur1}
          dur2 = {props.dur2}
          setDur2 ={props.setDur2}
          />  

    visitorimg = require('../img/ppl-purp.png');
    historyimg = require('../img/history-grey.png');
    reportimg = require('../img/report-grey.png');
  }
  if(cont =='History'){
    Content = <History 
    pop={props.pop} 
    showPop={props.showPop}
    visiName = {props.visiName}
    setVisiName = {props.setVisiName}
    visiPlate ={props.visiPlate} 
    setVisiPlate = {props.setVisiPlate}
    visiDur = {props.visiDur} 
    setVisiDur = {props.setVisiDur}
    
    />
    visitorimg = require('../img/ppl-grey.png');
    historyimg = require('../img/history-purp.png');
    reportimg = require('../img/report-grey.png');
  }
  if(cont == 'Report'){
    Content = <Report pop={props.pop} showPop={props.showPop}/>
    visitorimg = require('../img/ppl-grey.png');
    historyimg = require('../img/history-grey.png');
    reportimg = require('../img/report-purp.png');
  }


  return(
    <View style={styles.container}>
      {Content}

      {/* Tab bar starts here */}
      <View style={styles.tabbar}>

          <TouchableOpacity 
            style = {styles.tabcont}
            onPress={()=> setCont('Visitors')}>
            <Image 
              style = {styles.tabimg}
              source = {visitorimg}
              resizeMode = 'contain'
            />
            <Text 
            style={[styles.tabtext,{color:(cont=='Visitors')?Colors.Purple:Colors.Darkgrey}]}>
            Visitors</Text>
          </TouchableOpacity>
           
          <TouchableOpacity
            style = {styles.tabcont}
            onPress={()=> setCont('History')}
          >
            <Image 
              style = {styles.tabimg}
              source = {historyimg}
              resizeMode = 'contain'
            />
            <Text style={[styles.tabtext,{color:(cont=='History')?Colors.Purple:Colors.Darkgrey}]}>History</Text>

          </TouchableOpacity>

          <TouchableOpacity 
            style = {styles.tabcont}
            onPress={()=> setCont('Report')}>
            <Image 
              style = {styles.tabimg}
              source = {reportimg}
              resizeMode = 'contain'
            />
            <Text style={[styles.tabtext,{color:(cont=='Report')?Colors.Purple:Colors.Darkgrey}]}>Report</Text>
          </TouchableOpacity>

      </View>
      {/* End of Tab bar */}
    </View>

  )
}


export default Tenant;
