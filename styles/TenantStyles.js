import {StyleSheet} from 'react-native';

var styles = StyleSheet.create({
    container:{
        flex:1,
        width:"100%"
    },
    tabbar:{
        position:'absolute',
        bottom: 0,
        left: 0,
        height: 70,
        width: '100%',
        flexDirection: 'row',
        justifyContent:'space-around',
        alignItems:'center',
        backgroundColor: 'white',
        // drop shadow
        shadowColor:'#863ae8',
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.13,
        shadowRadius: 13
    },
    tabcont:{
        flex:1,
        flexDirection: 'column',
        justifyContent:'center',
        alignItems:'center'
    },
    tabimg:{
        width: 32,
        height: 40
    },
    tabtext:{

    }
});

export default styles;