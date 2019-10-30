import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, TextInput} from 'react-native';
import styles from '../styles/MainStyles';



function Login(){
  const [showTenantPage, setShowTenantPage] = useState(false);

  var TenantPage = null;
  if (showTenantPage === true){
  TenantPage=(

      <View style={styles.container}>
        <Text style={styles.LogoText}>VisiPark</Text>
        <TextInput
          style={{ height: 40, borderColor: 'white', borderWidth: 1, borderRadius:25 }}
          />
        <TextInput
            style={{ height: 40, borderColor: 'white', borderWidth: 1, borderRadius:25 }}
            />
      </View>
  );
  }
  return(
    <View style={styles.container}>
    {TenantPage}
      <Text style={styles.LogoText}>VisiPark</Text>
      <Text style={styles.LoginText}>Login as</Text>

      <View>
        <TouchableOpacity style={styles.BMBtn}>
          <Text style={styles.BMText}>Building Manager</Text>
         </TouchableOpacity>

        <TouchableOpacity style={styles.TenantBtn}
        onPress={()=>{setShowTenantPage(!showTenantPage)}}>
          <Text style={styles.TenantText}>Tenants</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}


export default Login;
