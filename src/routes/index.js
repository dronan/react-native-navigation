import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Tab from './Tab';

export default () => (
  <SafeAreaView style={{flex: 1}}>
    <NavigationContainer>
      <Tab />
    </NavigationContainer>
  </SafeAreaView>
);
