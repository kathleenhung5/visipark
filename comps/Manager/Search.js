import React, { useState } from 'react';
import {View, Text, TextInput, Image, TouchableOpacity, ScrollView} from 'react-native';
import {Colors} from '../../styles/Colors';
import Texts from '../../styles/Texts';
//import styles from '../../styles/CompsStyles/SearchStyles';
<<<<<<< HEAD
import styles from '../../styles/CompsStyles/SearchStyles';
import { ScrollView } from 'react-native-gesture-handler';
=======
import styles from '../../styles/CompsStyles/HistoryStyles';
>>>>>>> master

var data = [
  {plate:"kk123", unit:"101", },
  {plate:"aa234", unit:"102"},
  {plate:"cc789", unit:"103"},
  {plate:"dd456", unit:"104"},
  {plate:"ee789", unit:"105"}

];


function Search(){
  const [searchKey, setSearchKey] = useState('');
  const filteredData = data.filter((obj)=>{
    return obj.plate.indexOf(searchKey) >= 0 ||
            obj.unit.indexOf(searchKey) >= 0 
  })


    return(
        <View style={styles.container}> 
        {/*  Header */}
            <View>
              <Text style={Texts.SecHead}>Search</Text>
              <Text style={Texts.Body}>
                  Search for plate number to see if the vehicle belongs to a tenant, a current visitors or a stranger.
              </Text>
      
            {/*  SearchBar */}
              <View style={styles.SectionStyle}>
                <TextInput 
                  placeholder="Search plate number"
                  style={[styles.searchBar,Texts.FormText]}
                  onChangeText={(value)=>{setSearchKey(value)}}
                  
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
                {filteredData.map((item, index)=>{
                  return (
                
                  <View style={styles.card}>

                    <View style={styles.List}>
                      <Text style={[Texts.HeadS, styles.name]}>{item.plate}</Text>
                      <Text style={Texts.BodyLight}>unit{item.unit}</Text>
                    </View>
                    

                    <View> 
                      <Text style={[Texts.BodyBold,{color: Colors.Purple}]}>visitor
                      </Text>
                    </View> 

                  </View>
                  

                                
                  )
              
                })}
             </ScrollView>  



        </View>
    )


}


export default Search;
