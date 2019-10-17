/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
} from 'react-native';

import styles from './styles/AppStyles';
import Main from './comps/Main';

function App(){
  return(
    <View style={styles.container}>
        <Main/>
    </View>
  )
}

export default App;
