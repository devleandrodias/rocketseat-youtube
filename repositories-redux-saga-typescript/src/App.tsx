import React from 'react';
import { Provider } from 'react-redux';
import store from './store';

import RepositoryList from './components/repository-list';
export const App = () => {
  return (
    <Provider store={store}>
      <RepositoryList />
    </Provider>
  );
};
