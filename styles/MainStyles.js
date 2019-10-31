
import {StyleSheet} from 'react-native';

var styles = StyleSheet.create({
    container: {
        width: "100%",
        height:'100%',
        // backgroundColor: "#863AE8",
        // padding:20
    },

    Logo: {
      width:'50%',
      height:'18%',
      alignItems:"center",
      justifyContent:"center",
      position:"absolute",
      marginTop:100,
      marginLeft:110

    }
    ,
    LogoText: {
      fontSize:30,
      fontFamily:"Poppins-Medium",
      color:"white",
      alignItems:"center",
      justifyContent:"center",
      top: "33%",
      left:"40%",
      position:"absolute"
    },
    LoginText: {
      fontFamily:"Poppins-SemiBold",
      alignItems:"center",
      justifyContent:"center",
      position: "absolute",
      color: "white",
      fontSize:20,
      left:"30%",
      top: "60%",

    },
    BMBtn: {
      alignItems: 'center',
      justifyContent:"center",
      backgroundColor: '#863AE8',
      padding: 9,
      borderRadius: 25,
      borderWidth: 1,
      borderColor: 'white',
      width:'80%',
      left: '10%',
      marginTop: 400,

    },
    BMText: {
      //color: "white",
      fontSize:20,
      fontFamily:"Poppins-SemiBold"

    },
    TenantBtn: {
      alignItems: 'center',
      justifyContent:"center",
      position:"absolute",
      backgroundColor: 'white',
      padding: 9,
      borderRadius: 25,
      width:'80%',
      left: '10%',
      top: "110%"

    },
    TenantText: {
      color: "#863AE8",
      fontSize:20,
      fontFamily:"Poppins-SemiBold"


    }




});

export default styles;
