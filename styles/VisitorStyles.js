import {StyleSheet} from 'react-native';
import {Colors} from './Colors';

var styles = StyleSheet.create({
    
    Bottom:{
        flex:1,
        //adding more padding here streches other components out, cant rly get the styling perfect help!
        paddingTop: 10,
        alignItems: "center",
        justifyContent: "center",
    },

    Middle:{
        paddingLeft: 20,
        paddingRight: 20,

    },
    Top: {
        paddingTop: 60,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 40
    },
    scrollview:{
        height:"100%",

    },
    Box:{
        marginTop:"5%",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        //width: "90%",
        height: "45%",
        borderRadius: 23,
        //borderRadius: 30,
        //Kathleen: Do we have bg color for this?
        backgroundColor: "#fafafa",
        borderStyle: "dashed",
        borderColor: "#CAB2E8",
        borderWidth: 3.1,
    },

    activeBox:{
        shadowColor: Colors.Purple,
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.13,
        shadowRadius: 13,
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "45%",
        borderRadius: 23,
        backgroundColor: "#fafafa",
        borderColor: "#CAB2E8",
        borderWidth: .2,
    },
    Img:{
        width: "25%",
        height: "55%",
        justifyContent: "center",
        alignItems: "center"
        
    },
    carIcon:{
        position: "absolute",
        top: "14%",
        right: "25%",
        width: "15%",
        height: "27%"
    },
    time: {
        position: "absolute",
        top: "13%",
        right: "17%",
        fontFamily:'Poppins-SemiBold',
        fontSize:20,
        color: Colors.Purple,
        letterSpacing: 1
    },
    timeHr: {
        position: "absolute",
        top: "13%",
        right: "10%",
        fontFamily:'Poppins-SemiBold',
        fontSize:20,
        color: Colors.Black,
        letterSpacing: 1
    },
    visitorName: {
        position: "absolute",
        top: "14%",
        left: "10%",
        fontFamily:'Poppins-SemiBold',
        fontSize:20,
        color: Colors.Black,
        letterSpacing: 1
    },
    leftText:{
        fontFamily:'OpenSans-Regular',
        fontSize:16,
        color: Colors.Darkgrey,
        letterSpacing: 0.3,
        lineHeight: 23,
        position: "absolute",
        top: "29%",
        right: "10%",
    },
    plateText:{
        fontFamily:'OpenSans-Regular',
        fontSize:16,
        color: Colors.Darkgrey,
        letterSpacing: 0.3,
        lineHeight: 23,
        position: "absolute",
        top: "34%",
        left: "10%",
    },
    removeButton:{
        backgroundColor: Colors.Purple,
        borderRadius: 23,
        height: "30%",
        width: "36%",
        justifyContent:'center',
        alignItems:'center',
        position: "absolute",
        bottom: "13%",
        right:"10%"
    },
    extendButton: {
        position: "absolute",
        bottom: "13%",
        left:"10%",
        height: "30%",
        width: "36%",
        backgroundColor: Colors.Lightgrey,
        borderWidth: 2,
        justifyContent:'center',
        alignItems:'center',
        borderColor: Colors.Purple,
        borderRadius: 23,
        
        
    }
    



})

export default styles;

