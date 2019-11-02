
import {StyleSheet} from 'react-native';

var styles = StyleSheet.create({
    container: {
        width: "100%",
        height:'100%',
        backgroundColor: "#863AE8",
        padding:20,
        justifyContent:"space-around"

    },
    Top: {
      alignItems:"center",
      justifyContent:"center",


    },

   Logo: {
      width:130,
      height: 100,

    }
    ,
    LogoText: {
      fontSize:25,
      fontFamily:"Poppins-Medium",
      color:"white"
    },
    Bottom:{
      justifyContent:"center",
      alignItems:"center"
    },
    LoginText: {
      fontFamily:"Poppins-SemiBold",
      color: "white",
      fontSize:20
    },
    Buttons:{
      width: "90%",
      alignItems:"center"

    },
    BMBtn: {
      alignItems: 'center',
      justifyContent:"center",
      backgroundColor: '#863AE8',
      borderRadius: 25,
      borderWidth: 2,
      borderColor: 'white',
      width:'90%',
      height:45,
      margin: 10
    },
    BMText: {
      //color: "white",
      fontSize:20,
      fontFamily:"Poppins-SemiBold",
      color:"white"

    },
    TenantBtn: {
      alignItems: 'center',
      justifyContent:"center",
      backgroundColor: 'white',
      borderRadius: 25,
      width:'90%',
      height: 45
    },
    TenantText: {
      color: "#863AE8",
      fontSize:20,
      fontFamily:"Poppins-SemiBold"


    },
    BMForm: {
      alignItems: 'center',
      justifyContent:"center",
      backgroundColor: 'white',
      borderRadius: 25,
      width:'90%',
      height: 45,
      padding: 9
    },
    Tform: {
      alignItems: 'center',
      justifyContent:"center",
      backgroundColor: 'white',
      borderRadius: 25,
      width:'90%',
      height: 45
    }





});

export default styles;
