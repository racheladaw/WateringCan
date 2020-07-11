/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import Home from './components/Home.js';

const App: () => React$Node = () => {
  return (
    <Home />
  );
};

const styles = StyleSheet.create({
});

export default App;
