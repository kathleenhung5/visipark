import {StyleSheet} from 'react-native';
import {Colors} from './Colors';

var styles = StyleSheet.create({
    container:{
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 60
    },
    card:{
        backgroundColor: '#fff',
        padding:30,
        shadowColor: Colors.Purple,
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.13,
        borderRadius: 23,
        marginTop: 30
    },
    title:{
        alignItems:'center'
    },
    input:{
        width:"100%",
        height: 45,
        padding: 15,
        backgroundColor: Colors.Lightgrey,
        borderRadius: 25,
        marginTop: 10,
        marginBottom: 10,
        borderColor: Colors.Purple
    },
    button:{
        backgroundColor: Colors.Purple,
        borderRadius: 23,
        height: 45,
        justifyContent:'center',
        alignItems:'center'
    }
});

export default styles;