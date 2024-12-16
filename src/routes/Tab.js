import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TelaA from '../views/TelaA';
import TelaB from '../views/TelaB';
import TelaC from '../views/TelaC';
import Icon from '@react-native-vector-icons/fontawesome6';

const Tab = createBottomTabNavigator();

export default () => (
  <Tab.Navigator
    screenOptions={({route}) => ({
      tabBarIcon: ({focused, color, size}) => {
        let iconName;
        switch (route.name) {
          case 'TelaA':
            iconName = focused ? 'comments' : 'comments';
            break;
          case 'TelaB':
            iconName = focused ? 'user' : 'user';
            break;
          case 'TelaC':
            iconName = focused ? 'paste' : 'paste';
            break;
        }
        return <Icon name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: 'red',
      tabBarInactiveTintColor: 'gray',
    })}
    initialRouteName="TelaB">
    <Tab.Screen name="TelaA" component={TelaA} options={{title: 'Inicial'}} />
    <Tab.Screen name="TelaB" component={TelaB} options={{title: 'Meio'}} />
    <Tab.Screen name="TelaC" component={TelaC} options={{title: 'Final'}} />
  </Tab.Navigator>
);
