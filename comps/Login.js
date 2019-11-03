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

//  Kathleen: I added this variable 
  var Title = '';
  if(showBMPage){
    Title = 'Manager Password:';
  } else if (showTenantPage){
    Title = 'Apartment unit';
  } else {
    Title = 'Login as';
  }

  return(
    <View style={styles.container}>


      {/* Logo */}
      <View   style={styles.Top}>
        <Image source={require('../img/Logo.png')}
        resizeMode="contain"
        style={styles.Logo}
        />
        <Text style={styles.LogoText}>VisiPark</Text>
      </View>

      {/* Bottom Part */}
      <View style={styles.Bottom}>
        
        {/* <Text style={[styles.LoginText,{display:showBMPage ? "none" : "flex"}]}>
        {showTenantPage ? "apartment unit" : "Login as"}
        </Text>
        <Text style={[styles.LoginText,{display:showTenantPage ? "none" : ""}]}>
        {showBMPage ? "manager password" : " "}
        </Text> */}
        {/* KATHLEEN: what you had is causing the position of your bottom to move slightly when the user clicks on either of the button. Because still have two <Text>, you're just hiding them but the second one is still there. I put a variable here instead so that it'll only take up one space */}
        {/* KATHLEEN: So I added this here */}

        {/* Title */}
        {/* I had to add margin here to balance out the Margin */}
        <Text style={[styles.LoginText,{marginBottom:showBMPage||showTenantPage?0:10}]}>{Title}</Text>

        {/* Two forms. hide and show */}
        {TenantPage}
        {BMPage}

        {/* First page Two buttons */}
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
