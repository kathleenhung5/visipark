import React from 'react';
import {View, Text,ScrowView, TextInput, Image} from 'react-native';
import {Colors} from '../../styles/Colors';
import Texts from '../../styles/Texts';
import styles from '../../styles/HistoryStyles';




function History(){


  return(
    <View style={styles.container}>

      {/*  Header */}
      <View>
      <Text style={styles.headerText}>History</Text>
      <Text style={styles.description}>
            Your recent visitors. You can pin a visitor to keep the profile on the top.
      </Text>

       {/*  SearchBar */}
        <View style={styles.SectionStyle}>
          <TextInput 
            placeholder="search"
            style={styles.searchBar}
          />
          <Image 
          source={require('../../img/search-grey.png')}
          style={styles.ImageStyle}
          />  
        </View>       
      </View>

      {/*  Middle Part */}
      <View>
        


      </View>
        
    </View>
  )
}


export default History;
