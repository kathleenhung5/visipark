import {StyleSheet} from 'react-native';


var styles = StyleSheet.create({
    Bottom:{
        flex:1,
        alignItems: "center",
        justifyContent: "center",
        borderBottomWidth: 1,


    },

    Middle:{
        borderTopWidth: 50,
        borderColor: "white",
        flex:2,

    },
    Top: {
        paddingTop: 40,
        paddingLeft: 20,
        borderTopWidth: 40,
        borderColor: "white",
        flex: 1,
    }
})

export default styles;

