import {StyleSheet} from 'react-native';


var styles = StyleSheet.create({
    Box:{
        marginTop:"5%",
        alignItems: "center",
        justifyContent: "center",
        // Kathleen: I would just use 100% here since there's already padding on the view wrapping this component
        width: "100%",
        //width: "90%",
        height: "55%",
        // Kathleen: I believe the borderRaidus should be 23px? 
        borderRadius: 23,
        //borderRadius: 30,
        //Kathleen: Do we have bg color for this?
        backgroundColor: "#fafafa",
        borderStyle: "dashed",
        borderColor: "#CAB2E8",
        borderWidth: 3.1,
    },

    //Kathleen: Box 1 is applied to 
    Box1:{
        alignItems: "center",
        justifyContent: "center",
        width: "90%",
        height: "75%",
        borderRadius: 30,
        backgroundColor: "#fafafa",
        borderStyle: "dashed",
        borderColor: "#CAB2E8",
        borderWidth: 3.1,
        position: "absolute",
        bottom: "1%"
    },
    Img:{
        width: "25%",
        height: "40%",
        justifyContent: "center",
        alignItems: "center"
        
    }
})

export default styles;
