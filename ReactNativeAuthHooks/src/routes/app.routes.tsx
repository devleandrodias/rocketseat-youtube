import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Dashboard} from '../pages/dashboard';

const AppStack = createStackNavigator();

export const AppRoutes: React.FC = () => (
  <AppStack.Navigator>
    <AppStack.Screen name="Dashboard" component={Dashboard} />
  </AppStack.Navigator>
);
