/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import {TabNavigator} from 'react-navigation'

import Locales from './Locales'
import Damas from './Damas'

var MainScreenNavigation = TabNavigator({
  Tab1 : {screen: Locales},
  Tab2 : {screen: Damas}
},{
  tabBarPosition: 'top',
  swipeEnable : true,
  animationEnabled: true,
  tabBarOptions:{
    activeTintColor: 'white',
    activeBackgroundColor: 'darkgreen',
    inactiveTintColor : 'black',
    inactiveBackgroundColor: 'green',
    pressColor: 'red',
    labelStyle:{
      fontSize:12,
      padding:5
    }, 
    style: {
      backgroundColor: '#ec4642',
    },
  }
});

MainScreenNavigation.navigationOptions={
  tittle : "Tab example"
};

export default MainScreenNavigation;
