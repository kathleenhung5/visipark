import {StyleSheet} from 'react-native';


var styles = StyleSheet.create({
    Bottom:{
        flex:1,
        alignItems: "center",
        justifyContent: "center",
        bottom: "5%"
    },

    Middle:{
        borderTopWidth: 50,
        borderColor: "white",
        flex:2,


    },
    Top: {
        paddingTop: 40,
        paddingLeft: 20,
        top: "1%",
        borderColor: "white",
        flex: 1,
    }
})

export default styles;

