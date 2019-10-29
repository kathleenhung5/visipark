import React,{useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Visitors from './Visitors';
import History from './History';
import Report from './Report';
import styles from '../../styles/TenantStyles';


function Tenant(){
  const [cont, setCont] = useState('Visitors');

// img src variables
  var visitorimg = null;
  var historyimg = null;
  var reportimg = null;

// Content is everything above tab bar
  var Content = null;

// conditions updating Content and tabbar
  if(cont == 'Visitors'){
    Content = <Visitors />
    visitorimg = 'ppl-purp.png';
    historyimg = 'history-grey.png';
    reportimg = 'report-grey.png';
  }
  if(cont =='History'){
    Content = <History />
    visitorimg = 'ppl-grey.png';
    historyimg = 'history-purp.png';
    reportimg = 'report-grey.png';
  }
  if(cont == 'Report'){
    Content = <Report />
    visitorimg = 'ppl-grey.png';
    historyimg = 'history-grey.png';
    reportimg = 'report-purp.png';
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
              source = {require("../../img/ppl-purp.png")}
              resizeMode = 'contain'
            />
            <Text style={styles.tabtext}>Visitors</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style = {styles.tabcont}
            onPress={()=> setCont('History')}>
            <Image 
              style = {styles.tabimg}
              source = {require("../../img/history-grey.png")}
              resizeMode = 'contain'
            />
            <Text style={styles.tabtext}>History</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style = {styles.tabcont}
            onPress={()=> setCont('Report')}>
            <Image 
              style = {styles.tabimg}
              source = {require("../../img/report-grey.png")}
              resizeMode = 'contain'
            />
            <Text style={styles.tabtext}>Report</Text>
          </TouchableOpacity>

      </View>
      {/* End of Tab bar */}
    </View>
      
  )
}


export default Tenant;
