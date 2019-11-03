import {StyleSheet} from 'react-native';


var styles = StyleSheet.create({
    Bottom:{
        flex:1,
        alignItems: "center",
        justifyContent: "center",
        //Kathleen: 
        // If you are using flex, you won't need bottom. 
        //bottom: "4%",
    },

    Middle:{
        //Kathleen: I see what you're trying to do here...but this is not going to work if we add more stuff here LOL
        // borderTopWidth: 50,
        // borderColor: "white",

        // Kathleen: I didn't know why you put a flex here lol, I wouldn't so i commented it out
        //flex:2,

        // Kathleen ---
        paddingLeft: 20,
        paddingRight: 20,

    },
    Top: {
        //I'm changing padding top to 60 according to styleguide
        // paddingTop: 40,
        paddingTop: 60,
        paddingLeft: 20,

        //Kathleen --- you forgot padding right
        paddingRight: 20,
        //I'm just adding padding bottom here to separate top and middle
        paddingBottom: 40

        // Kathleen ------ I'm gonna comment this out cause we dont' need top 1%
        //top: "1%",

        // Kathleen: ummmm... I don't think we need border for top
        //borderColor: "white",

        // Kathleen: I'm taking this out too.
        //flex: 1,
    },
    // Kathleen -- I added style for scrollview
    scrollview:{
       
    }
})

export default styles;

