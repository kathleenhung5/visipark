import React, {useState} from 'react';
import {View, Text,
        TextInput,
        ScrollView,
        TouchableOpacity,
        Image,
        Switch
    } from 'react-native';
import {Colors} from '../../styles/Colors';
import Texts from '../../styles/Texts';
import styles from '../../styles/CompsStyles/TenantsStyles';
import DropShadows from '../../styles/DropShadows';


var data = [
    {plate:"kk123", unit:"101", },
    {plate:"aa234", unit:"102"},
    {plate:"cc789", unit:"103"},
    {plate:"dd456", unit:"104"},
    {plate:"ee789", unit:"105"},
    {plate:"ee789", unit:"106"},
    {plate:"ee789", unit:"107"},
    {plate:"ee789", unit:"108"},
    {plate:"ee789", unit:"109"},
  
  ];

function Tenants(props){
    var tUnit = "101"
    var tPlate = "ABC 123"

    //Tenant List Cards
    var tenantList = 

    <View style={[styles.card,DropShadows.shadow ]}>


        <Text style={[Texts.BodyBold, styles.tenantUnit]}>{tUnit}</Text>
        <Text style={[Texts.BodyBold]}>{tPlate}</Text>
        <Switch style={styles.tenantSwitch}></Switch>

     </View>


const [searchKey, setSearchKey] = useState('');
const filteredData = data.filter((obj)=>{
  return obj.plate.indexOf(searchKey) >= 0 ||
          obj.unit.indexOf(searchKey) >= 0 
})



    return(
        <View style={styles.container}>

                <Text style={[Texts.SecHead, styles.header]}>Tenants</Text>
                <Text style={[Texts.Body, styles.headerDesc]}>Activate VisiPark and add a tenant plate number for each unit as needed. 
                    Reactivate for updating tenant plate.</Text>


            <View style={styles.SectionStyle}>

            <TextInput 
            style={[styles.searchBar, Texts.FormText]}
          placeholder = "Search Room Number"
          clearButtonMode = 'always'
          maxLength = {3}
            />          

            <Image 
            source={require('../../img/search-grey.png')}
            resizeMode = "contain"
            style={styles.ImageStyle}
           />  
           </View>

            <View style={styles.subHeader}>
                <Text style={[Texts.Body, styles.subUnit]}>Unit</Text>
                <Text style={[Texts.Body]}>Tenant Plate</Text>
                <Text style={[Texts.Body, styles.subActive]}>Active</Text>
            </View>

        {/* tenants list starts here */}
        <ScrollView style={{marginBottom:72}}>
                {filteredData.map((item, index)=>{
                  return (
                
                  <View style={[styles.card, DropShadows.shadow]}>

                    <Text style={[Texts.BodyBold, styles.tenantUnit]}>{item.unit}</Text>
                    <Text style={[Texts.BodyBold,styles.tenantPlate]}>{item.plate}</Text>
                    <Switch style={styles.tenantSwitch}></Switch>

                  </View>             
                  )
                })}
             </ScrollView>  

            
    </View>
    )
}

export default Tenants;
