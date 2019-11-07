import {StyleSheet} from 'react-native';
import {Colors} from '../../styles/Colors';

var styles = StyleSheet.create({
    bg:{
        position: 'absolute',
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: 'rgba(0,0,0,0.3)',
        zIndex: 1,
        padding: 20
    },
    poparea:{
        width: "100%",
        padding: 30,
        marginTop: 30,
        borderRadius: 23,
        backgroundColor: "#fff",
        shadowColor: "#000",
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.2,
    },
    title:{
        alignItems:'center',
        marginBottom: 10
    },
    button:{
        width: "100%",
        height: 45,
        backgroundColor: Colors.Purple,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        marginTop: 20
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
    closeBut:{
        width:30,
        height:30,
        position:'absolute',
        right: 30,
        top: 30,
        zIndex: 1
    },
    img:{
        width: 30,
        height:30
    }
})

export default styles;