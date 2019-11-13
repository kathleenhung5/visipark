import React, {Component} from 'react';
import {View, Text, TextInput, Image, TouchableOpacity,FlatList, StyleSheet, ActivityIndicator, ScrollView } from 'react-native';
import {Colors} from '../../styles/Colors';
import Texts from '../../styles/Texts';
import styles from '../../styles/CompsStyles/HistoryStyles';



const data = [
  {name:"Dora", plate:"Wowho"},
  {name:"Kathleen", plate:"Haha"},
  {name:"Elias", plate:"Yoyo"},
  {name:"Nicole", plate:"Diedie"},
  {name:"Loki", plate:"Meow"}
];


export default class History extends React.Component{
  constructor(props){
    super(props);
    
    this.state = {
      //isLoading: false, 
      searchKey:'',
      showPin: true
    };
    this.handleToggleClick = this.handleToggleClick.bind(this);

  }

  handleEvent = () => {
    this.props.showPop('AddVisitor');
       
  }
  handleToggleClick() {
    this.setState(state => ({
      showPin: !state.showPin
    }));
  }
  
  render(){
        {/*  Searchfunction */}
    const filteredData = data.filter((item)=>{
        return item.name.indexOf(this.state.searchKey) >= 0 ||
        item.plate.indexOf(this.state.searchKey) >= 0
    })

    return( 
    <View style={styles.container}> 
      {/*  Header */}
      <View>
        <Text style={Texts.SecHead}>History</Text>
        <Text style={Texts.Body}>
              Your recent visitors. You can pin a visitor to keep the profile on the top.
        </Text>

       {/*  SearchBar */}
        <View style={styles.SectionStyle}>
          <TextInput 
            placeholder="search"
            style={[styles.searchBar,Texts.FormText]}
            onChangeText={(value)=>this.setState({searchKey : value})}
            
          />
          <Image 
          source={require('../../img/search-grey.png')}
          resizeMode = "contain"
          style={styles.ImageStyle}
          />  
        </View>       
      </View>
         

         {/* history Cards */}
      
      <ScrollView>
      {filteredData.map((item, index)=>{
        return (
       
        <View style={styles.card}>
        <TouchableOpacity onPress={this.handleToggleClick}>
          
          <Image
            source={this.state.showPin ? require('../../img/pin-grey.png') : require('../../img/pin-purp.png')}            style={styles.pinImg}
            />   
        </TouchableOpacity>

        <View style={styles.List}>
           <Text style={[Texts.BodyBold, styles.name]}>{item.name}</Text>
           <Text style={Texts.BodyLight}>{item.plate}</Text>
        </View>
        

        <TouchableOpacity 
        style={styles.visiBtn}
         onPress={()=>{
          // props.setVisiName(data[index].name);
          // props.setVisiPlate(data[index].plate);
          //  props.showPop('AddVisitor')
          this.handleEvent();
          this.props.setName1(item.name)
         
        }}
        >
          <Text style={[Texts.BodyBold,{color: Colors.Purple}]}>Revisit</Text>
        </TouchableOpacity>
        

        </View>

      
        )
     
      })}
    </ScrollView>  

    </View>
    );
  }
}



// var pinimg = require('../../img/pin-grey.png');
//   if (showPin === true){
//     pinimg = require('../../img/pin-purp.png');
//   }
  
//   return(
//     <View style={styles.container}>

//       {/*  Header */}
//       <View>
//         <Text style={Texts.SecHead}>History</Text>
//         <Text style={Texts.Body}>
//               Your recent visitors. You can pin a visitor to keep the profile on the top.
//         </Text>

//        {/*  SearchBar */}
//         <View style={styles.SectionStyle}>
//           <TextInput 
//             placeholder="search"
//             style={styles.searchBar}
//             onChangeText={(text)=>{setName(text);}}
//           />
//           <Image 
//           source={require('../../img/search-grey.png')}
//           style={styles.ImageStyle}
//           />  
//         </View>       
//       </View>

//       {/*  Middle Part */}
//       <View >
//         <ScrollView>
//           {/* guests */}
//           <View style={styles.card}>
//             <TouchableOpacity
//               onPress={()=>{setPin(!showPin)}}
//             >
//               <Image
//                 source={pinimg}
//                 style={styles.pinImg}
//               />
//             </TouchableOpacity>
//             <View>
//             <Text style={Texts.BodyBold}>{name}</Text>
//             <Text style={Texts.BodyLight}>abc1122</Text>
//             </View>
            

//             <TouchableOpacity style={styles.visiBtn}>
//               <Text style={Texts.Link}>Revisit</Text>
//             </TouchableOpacity>
            

//             </View>

    


//         </ScrollView>
        

        
        


//       </View>
        
//     </View>
//   )
// }




