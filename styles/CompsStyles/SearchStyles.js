import {StyleSheet} from 'react-native';
import {Colors} from '../Colors';
import Texts from '../Texts'

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
        marginTop: 40,
        marginBottom: 20
    },
    ImageStyle: {
        paddingRight: 30,
        margin: 10,
        //height: 36,
        width: 28,
       // alignSelf: 'flex-end',
        
    },
    searchBar:{
        flex:1,
        alignItems: 'flex-start',
        paddingLeft: 20

    }   
    
});

export default styles;