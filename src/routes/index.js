import React from 'react';
import {SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Stack from './Stack';

export default () => (
  <SafeAreaView style={{flex: 1}}>
    <NavigationContainer>
      {/* Stack Navigator */}
      <Stack />
    </NavigationContainer>
  </SafeAreaView>
);
