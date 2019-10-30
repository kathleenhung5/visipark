
import {StyleSheet} from 'react-native';

var styles = StyleSheet.create({
    container: {
        width: "100%",
        height:'100%',
        backgroundColor: "#863AE8",
        padding:20
    },
    LogoText: {
      fontSize:30,
      fontFamily:"Poppins-Medium",
      color:"white",
      alignItems:"center",
      justifyContent:"center",
      top: "30%",
      left:"35%"
    },
    LoginText: {
      fontFamily:"Poppins-SemiBold",
      alignItems:"center",
      justifyContent:"center",
      color: "white",
      fontSize:20,
      paddingLeft:"40%",

    },
    BMBtn: {
      alignItems: 'center',
      justifyContent:"center",
      backgroundColor: '#863AE8',
      padding: 12,
      borderRadius: 25,
      borderWidth: 1,
      borderColor: 'white',
      width:'80%',
      left: '10%',
      marginTop: 250

    },
    BMText: {
      color: "white",
      fontSize:20,
      fontFamily:"Poppins-SemiBold"

    },
    TenantBtn: {
      alignItems: 'center',
      justifyContent:"center",
      backgroundColor: 'white',
      padding: 12,
      borderRadius: 25,
      width:'80%',
      left: '10%',
      marginTop: 20

    },
    TenantText: {
      color: "#863AE8",
      fontSize:20,
      fontFamily:"Poppins-SemiBold"


    }




});

export default styles;
