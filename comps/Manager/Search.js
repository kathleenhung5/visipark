import React, { useState } from 'react';
import {View, Text, TextInput, Image, TouchableOpacity, ScrollView} from 'react-native';
import {Colors} from '../../styles/Colors';
import Texts from '../../styles/Texts';
//import styles from '../../styles/CompsStyles/SearchStyles';
import styles from '../../styles/CompsStyles/HistoryStyles';

var data = [
  {name:"Dora", plate:"Wowho"},
  {name:"Kathleen", plate:"Haha"},
  {name:"Elias", plate:"Yoyo"},
  {name:"Nicole", plate:"Diedie"},
  {name:"Loki", plate:"Meow"}

];


function Search(){
  const [searchKey, setSearchKey] = useState('');
  const filteredData = data.filter((obj)=>{
    return obj.name.indexOf(searchKey) >= 0 ||
            obj.plate.indexOf(searchKey) >= 0 
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
                  <TouchableOpacity onPress={this.handleToggleClick}>
                    
                    <Image
                      source={require('../../img/pin-grey.png')} style={styles.pinImg}
                      />   
                  </TouchableOpacity>

                  <View style={styles.List}>
                    <Text style={[Texts.BodyBold, styles.name]}>{item.name}</Text>
                    <Text style={Texts.BodyLight}>{item.plate}</Text>
                  </View>
                  

                  <TouchableOpacity 
                  style={styles.visiBtn}
                  onPress={()=>{}}
                  >
                    <Text style={[Texts.BodyBold,{color: Colors.Purple}]}>Revisit</Text>
                  </TouchableOpacity>
                  

                  </View>               
                  )
              
                })}
             </ScrollView>  



        </View>
    )


}


export default Search;
