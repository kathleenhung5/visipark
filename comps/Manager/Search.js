import React from 'react';
import {View, Text, TextInput, Image} from 'react-native';
import {Colors} from '../../styles/Colors';
import Texts from '../../styles/Texts';
import styles from '../../styles/CompsStyles/SearchStyles';

function Search(){
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
              onChangeText={(value)=>this.setState({searchKey : value})}
              
            />
            <Image 
            source={require('../../img/search-grey.png')}
            resizeMode = "contain"
            style={styles.ImageStyle}
            />  
          </View>       
        </View>

        </View>
    )
}

export default Search;
