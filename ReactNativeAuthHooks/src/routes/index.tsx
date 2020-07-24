import React, {useContext} from 'react';
import {AppRoutes} from './app.routes';
import {AuthRoutes} from './auth.routes';
import {AuthContext} from '../context/auth';
import {View, ActivityIndicator} from 'react-native';

export const Routes: React.FC = () => {
  const {singed, loading} = useContext(AuthContext);

  if (loading) {
    return (
      // eslint-disable-next-line react-native/no-inline-styles
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" color="#999" />
      </View>
    );
  }

  return singed ? <AppRoutes /> : <AuthRoutes />;
};
