import React, {Component} from 'react';
import {View, Text, ScrollView, TextInput, Image, Button, TouchableOpacity } from 'react-native';
import {Colors} from '../../styles/Colors';
import Texts from '../../styles/Texts';
import styles from '../../styles/HistoryStyles';




function History(){


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
            style={styles.searchBar}
          />
          <Image 
          source={require('../../img/search-grey.png')}
          style={styles.ImageStyle}
          />  
        </View>       
      </View>

      {/*  Middle Part */}
      <View sty>
        <ScrollView>
          {/* guests */}
          <View style={styles.card}>
            <TouchableOpacity>
              <Image
                source={require('../../img/pin-grey.png')}
                style={styles.pinImg}
              />
            </TouchableOpacity>
            <View>
            <Text style={Texts.BodyBold}>Nicole Li</Text>
            <Text style={Texts.BodyLight}>PKN 853</Text>
            </View>
            

            <TouchableOpacity style={styles.visiBtn}>
              <Text style={Texts.Link}>Revisit</Text>
            </TouchableOpacity>
            

            </View>

            <View style={styles.card}>
            <TouchableOpacity>
              <Image
                source={require('../../img/pin-grey.png')}
                style={styles.pinImg}
              />
            </TouchableOpacity>
            <View>
            <Text style={Texts.BodyBold}>Nicole Li</Text>
            <Text style={Texts.BodyLight}>PKN 853</Text>
            </View>
            

            <TouchableOpacity style={styles.visiBtn}>
              <Text style={Texts.Link}>Revisit</Text>
            </TouchableOpacity>
            

            </View>


            <View style={styles.card}>
            <TouchableOpacity>
              <Image
                source={require('../../img/pin-grey.png')}
                style={styles.pinImg}
              />
            </TouchableOpacity>
            <View>
            <Text style={Texts.BodyBold}>Nicole Li</Text>
            <Text style={Texts.BodyLight}>PKN 853</Text>
            </View>
            

            <TouchableOpacity style={styles.visiBtn}>
              <Text style={Texts.Link}>Revisit</Text>
            </TouchableOpacity>
            

            </View>

            <View style={styles.card}>
            <TouchableOpacity>
              <Image
                source={require('../../img/pin-grey.png')}
                style={styles.pinImg}
              />
            </TouchableOpacity>
            <View>
            <Text style={Texts.BodyBold}>Nicole Li</Text>
            <Text style={Texts.BodyLight}>PKN 853</Text>
            </View>
            

            <TouchableOpacity style={styles.visiBtn}>
              <Text style={Texts.Link}>Revisit</Text>
            </TouchableOpacity>
            

            </View>


            <View style={styles.card}>
            <TouchableOpacity>
              <Image
                source={require('../../img/pin-grey.png')}
                style={styles.pinImg}
              />
            </TouchableOpacity>
            <View>
            <Text style={Texts.BodyBold}>Nicole Li</Text>
            <Text style={Texts.BodyLight}>PKN 853</Text>
            </View>
            

            <TouchableOpacity style={styles.visiBtn}>
              <Text style={Texts.Link}>Revisit</Text>
            </TouchableOpacity>
            

            </View>

            <View style={styles.card}>
            <TouchableOpacity>
              <Image
                source={require('../../img/pin-grey.png')}
                style={styles.pinImg}
              />
            </TouchableOpacity>
            <View>
            <Text style={Texts.BodyBold}>Nicole Li</Text>
            <Text style={Texts.BodyLight}>PKN 853</Text>
            </View>
            

            <TouchableOpacity style={styles.visiBtn}>
              <Text style={Texts.Link}>Revisit</Text>
            </TouchableOpacity>
            

            </View>


          


        </ScrollView>
        

        
        


      </View>
        
    </View>
  )
}


export default History;
