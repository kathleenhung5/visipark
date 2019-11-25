/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React,{useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
} from 'react-native';

import styles from './styles/PagesStyles/AppStyles';
import Main from './Pages/Main';
import {Colors} from './styles/Colors';

function App(){
  const [safebg, setSafebg] = useState('#863AE8');
  return(
        <Main safebg={safebg} setSafebg={setSafebg}/>
  )
}

export default App;

