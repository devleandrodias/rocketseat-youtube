import React, {createContext, useState, useEffect, useContext} from 'react';
import AsyncStorage from '@react-native-community/async-storage';

import {api} from '../services/api';
import {singIn as authSingIn} from '../services/auth';

interface User {
  name: string;
  email: string;
}

interface AuthContextData {
  singed: boolean;
  user: User | null;
  loading: boolean;
  singIn(): Promise<void>;
  singOut(): void;
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData,
);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider: React.FC = ({children}) => {
  const [userState, setUserState] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadStorageData();
    setLoading(false);
  }, []);

  const loadStorageData = async () => {
    const storagedUser = await AsyncStorage.getItem('@RNAuth:user');
    const storagedToken = await AsyncStorage.getItem('@RNAuth:token');

    if (storagedUser && storagedToken) {
      api.defaults.headers.Authorization = `Bearer ${storagedToken}`;

      setUserState(JSON.parse(storagedUser));
    }
  };

  const singIn = async (): Promise<void> => {
    const {user, token} = await authSingIn();

    setUserState(user);

    api.defaults.headers.Authorization = `Bearer ${token}`;

    await AsyncStorage.setItem('@RNAuth:user', JSON.stringify(user));
    await AsyncStorage.setItem('@RNAuth:token', token);
  };

  const singOut = (): void => {
    AsyncStorage.clear().then(() => {
      setUserState(null);
    });
  };

  return (
    <AuthContext.Provider
      value={{singed: !!userState, user: userState, singIn, singOut, loading}}>
      {children}
    </AuthContext.Provider>
  );
};
