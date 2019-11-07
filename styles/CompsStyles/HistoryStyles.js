import {StyleSheet} from 'react-native';
import {Colors} from '../Colors';

var styles = StyleSheet.create({
    container:{
        paddingTop: 60,
        paddingLeft: 20,
        paddingRight: 20,
        width:"100%",
        //height: "90%"
        flex: 1,
        marginBottom: 70

    },    
    SectionStyle:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth:2, 
        borderColor:Colors.Purple,
        height: 45,
        borderRadius: 25 ,
        marginTop: 10,
        marginBottom: 10
    },
    ImageStyle: {
        paddingRight: 30,
        margin: 10,
        height: 36,
        width: 32,
       // alignSelf: 'flex-end',
        
    },
    searchBar:{
        flex:1,
        alignItems: 'flex-start',
        paddingLeft: 20

    },
    card:{
        backgroundColor: '#fff',
        paddingLeft:30,
        paddingRight:30,
        paddingTop:20,
        paddingBottom:20,
        shadowColor: Colors.Purple,
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.13,
        borderRadius: 23,
        marginTop: 10,
        flexDirection: 'row',
        justifyContent:"space-between"
        //justifyContent:"flex-start"
    },
    pinImg:{
        width:23,
        height: 40,
        marginRight: 15,
       
       
        

    },
    visiBtn:{
        borderWidth:2,
        borderRadius:25,
        borderColor: Colors.Purple,
        //width: "45%",
        height: 40,
        marginLeft: 10,
        alignItems: 'center',
        justifyContent:"center",
        paddingLeft: 15,
        paddingRight: 15,
        // alignSelf: 'flex-end'
        
    },
    List:{
       
       //borderWidth:1,
       position:"absolute",
       width: "60%",
       marginLeft: 70,
       marginTop: 18,

      


    },
    name:{
       // backgroundColor: "#fab"
    }


});

export default styles;