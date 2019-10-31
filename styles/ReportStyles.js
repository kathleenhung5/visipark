import {StyleSheet} from 'react-native';
import {Colors} from './Colors';

var styles = StyleSheet.create({
    card:{
        backgroundColor: '#fff',
        padding:30,
        shadowColor: Colors.Purple,
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.13,
        borderRadius: 23
    },
    Sinput:{
        width:"100%",
        height: 45,
        padding: 10,
        borderWidth:2,
        borderRadius: 25,
        marginTop: 10,
        marginBottom: 10
    },
    Minput:{
        width:"100%",
        height: "45%",
        borderWidth:2,
        borderRadius: 25,
        marginTop: 10,
        marginBottom: 10
    },
    button:{
        backgroundColor: Colors.Purple,
        borderRadius: 23,
        height: 45,
        justifyContent:'center',
        alignItems:'center'
    },
    popupsBg:{
        backgroundColor: 'rgba(0,0,0,0)',
        
        
        height: "50%",
        justifyContent: 'center',
        alignItems: 'center'
    },
    Head:{
        marginTop: 40,
        padding:30
    }
});

export default styles;