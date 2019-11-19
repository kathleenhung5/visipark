import React, { useState, useEffect } from 'react';
import {View, Text, TextInput, Image, TouchableOpacity, ScrollView} from 'react-native';
import {Colors} from '../../styles/Colors';
import Texts from '../../styles/Texts';
import styles from '../../styles/CompsStyles/HistoryStyles';


var data = [
  {name:"Dora", plate:"Wowho"},
  {name:"Kathleen", plate:"Haha"},
  {name:"Elias", plate:"Yoyo"},
  {name:"Nicole", plate:"Diedie"},
  {name:"Loki", plate:"Meow"}

];
//var data = props.PinnedVisitors;




function History(props){
    const [plate, setPlate] = useState([]);
    const [showPin, setShowPin] = useState(true);
    const [searchKey, setSearchKey] = useState('');
    let PinnedVisitors = props;
    console.log("passed" +PinnedVisitors)

    data = [...props.PinnedVisitors, ...props.UnpinnedVisitors ];
    
    /* get visitor history*/
   const dbGetHistory = async()=>{
    var visitor = {
         //the following is an exmaple of what to put in the obj "data" to send to the server for getting all pinned and not pinned visitors in History page 
      data: {
            unit_num: 101,
            
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




    const filteredData = data.filter((obj)=>{
    return obj.name.indexOf(searchKey) >= 0 ||
            obj.plate.indexOf(searchKey) >= 0 
  })


    return(
        <View style={styles.container}> 
{/*  Header */}
            <View>
              <Text style={Texts.SecHead}>History</Text>
              <Text style={Texts.Body}>
              Your recent visitors. You can pin a visitor to keep the profile on the top.
              </Text>
      
{/*  SearchBar */}
            <View style={styles.SectionStyle}>
                    <TextInput 
                        placeholder="search"
                        style={[styles.searchBar,Texts.FormText]}
                        onChangeText={(value)=>setSearchKey(value)}
                        
                    />
                    <Image 
                    source={require('../../img/search-grey.png')}
                    resizeMode = "contain"
                    style={styles.ImageStyle}
                    />  
                    </View>       
                </View>
{/* history Card  */}
            <ScrollView>
                {filteredData.map((obj, index)=>{
                  return (
                
                  <View style={styles.card}>
                  <TouchableOpacity onPress={()=>{setShowPin(!showPin)}}>
                    
                  <Image
                    source={showPin ? require('../../img/pin-grey.png') : require('../../img/pin-purp.png')}  
                    style={styles.pinImg}
                />    
                  </TouchableOpacity>

                  <View style={styles.List}>
                    <Text style={[Texts.BodyBold, styles.name]}>{obj.name}</Text>
                    <Text style={Texts.BodyLight}>{obj.plate}</Text>
                  </View>
                  

                  <TouchableOpacity 
                  style={styles.visiBtn}
                  onPress={() => {props.showPop('AddVisitor');props.setName1(obj.name);props.setPlate1(obj.plate);
                
                }}>
                    <Text style={[Texts.BodyBold,{color: Colors.Purple}]}>
                        Revisit
                    </Text>
                  </TouchableOpacity>
                  

                  </View>               
                  )
              
                })}
             </ScrollView>  



        </View>
    )


}


export default History;
