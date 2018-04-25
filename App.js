import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import RootScreen from './src/root';
import LoginScreen from './src/login';
import SignupScreen from './src/signup';

const styles = StyleSheet.create({
});

const App = StackNavigator(
  {
    Root: {
      screen: RootScreen,
    },
    Login: {
      screen: LoginScreen,
    },
    Signup: {
      screen: SignupScreen,
    },
    initialRouteName: 'Root'
  }
);

export default App;
