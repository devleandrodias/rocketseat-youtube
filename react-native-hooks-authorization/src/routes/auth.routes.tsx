import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {SingIn} from '../pages/sing-in';

const AuthStack = createStackNavigator();

export const AuthRoutes: React.FC = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen name="SingIn" component={SingIn} />
  </AuthStack.Navigator>
);
