import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, TextInput} from 'react-native';
import styles from '../styles/LoginStyles';
import Tform from './Tform';
import BMform from './BMform';



function Login(){
  const [showTenantPage, setShowTenantPage] = useState(false);
  const [showBMPage, setShowBMPage] = useState(false);

  var TenantPage = null;
  if (showTenantPage === true){
    TenantPage=(<Tform />);
  }
  var BMPage = null;
  if (showBMPage === true){
    BMPage=(<BMform/>);
  }



  return(
    <View style={styles.container}>



      <View   style={styles.Top}>
        <Image source={require('../img/Logo.png')}
        resizeMode="contain"
        style={styles.Logo}
        />
        <Text style={styles.LogoText}>VisiPark</Text>
      </View>


      <View style={styles.Bottom}>
        <Text style={[styles.LoginText,{display:showBMPage ? "none" : "flex"}]}>
        {showTenantPage ? "apartment unit" : "Login as"}
        </Text>
        <Text style={[styles.LoginText,{display:showTenantPage ? "none" : ""}]}>
        {showBMPage ? "manager password" : " "}
        </Text>

        {TenantPage}
        {BMPage}
        <View style={[styles.Buttons,{display:showBMPage ? "none" : ""}]}>
          <TouchableOpacity
            style={[styles.BMBtn,{display:showBMPage ? "none" : ""},{display:showTenantPage ? "none" : ""}]}
            onPress={()=>{setShowBMPage(!showBMPage)}}>
            <Text
            style={styles.BMText}>
            Building Manager
            </Text>
           </TouchableOpacity>

          <TouchableOpacity
            style={[styles.TenantBtn,{display:showTenantPage ? "none" : ""}]}
            onPress={()=>{setShowTenantPage(!showTenantPage)}}>
            <Text
            style={styles.TenantText}>
            Tenant
            </Text>
          </TouchableOpacity>
        </View>

      </View>
    </View>
  )
}


export default Login;
