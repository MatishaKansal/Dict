import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
// import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import HomeScreen from './screens/homeScreen.js';

export default class App extends React.Component{
  render(){
    return(
      <View>
       <ScreenContainer/>
       {/* < HomeScreen /> */}
      </View>
    )
  }
}

const switchNavigator = createSwitchNavigator({
  homeScreen: HomeScreen
})
const ScreenContainer = createAppContainer(switchNavigator);