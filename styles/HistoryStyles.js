import {StyleSheet} from 'react-native';
import {Colors} from './Colors';

var styles = StyleSheet.create({
    container:{
        paddingTop: 60,
        paddingLeft: 20,
        paddingRight: 20,
        width:"100%"

    },
    headerText:{
        fontFamily:'Poppins-SemiBold',
        fontSize:40,
        color: Colors.Black,
        letterSpacing: 1.5
    },
    description:{
        fontFamily:'OpenSans-Regular',
        fontSize:16,
        color: Colors.Black,
        letterSpacing: 1.5,
        lineHeight: 23
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
        margin: 10
    },
    ImageStyle: {
        paddingRight: 30,
        margin: 9,
        height: 25,
        width: 25,
        //resizeMode : 'stretch',
        alignSelf: 'flex-end'
    },
    searchBar:{
        flex:1,
        alignItems: 'flex-start',
        paddingLeft: 20

    }


});

export default styles;