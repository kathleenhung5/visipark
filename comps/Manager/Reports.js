import React, {useState} from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import {Colors} from '../../styles/Colors';
import Texts from '../../styles/Texts';
import styles from '../../styles/CompsStyles/ReportsStyles';
import DropShadows from '../../styles/DropShadows';


function ReportCard(){

  return(
     <TouchableOpacity onPress={() => {props.showPop('Reports')}}>
          <View style={[styles.card, DropShadows.shadow]}>
          <Text style={[Texts.HeadS,]}>{item.reportSubject}</Text>
          <Text style={[Texts.Body,]}>{item.reportDate}</Text>
         <Text style={[Texts.BodyLight,{marginBottom:5, marginTop:10}]} numberOfLines={2}>{item.reportBody}</Text>
          <Text style={Texts.Link}>Read More >>></Text>
          </View>  
          </TouchableOpacity> 
  )
}


function Reports(props){

  var data = [
    {reportSubject:"Parking Sideways!!", reportDate:"Aug.23", reportBody:"omg someone is parking in the visitor parkign lot bad guy ohh noo stranger dangerrrr",},
  ];

    const [searchKey, setSearchKey] = useState('');
    const filteredData = data.filter((obj)=>{
      return obj.reportSubject.indexOf(searchKey) >= 0 ||
             obj.reportDate.indexOf(searchKey) >= 0 ||
              obj.reportBody.indexOf(searchKey) >= 0 
    })
    return(
        <View style={styles.container}>

        <Text style={[Texts.SecHead, styles.header]}>Reports</Text>
        <Text style={[Texts.Body, styles.headerDesc]}>Read or delete reports submitted by tenants regarding visitor parking.</Text>

{/* tenants reports starts here */}

<ScrollView style={{marginBottom:72}}>
                {filteredData.map((item, index)=>{
                  return (
                <ReportCard />
                              
                  )
                })}
             </ScrollView>  

    
</View>
    )
}

export default Reports;
