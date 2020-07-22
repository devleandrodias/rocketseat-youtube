import { combineReducers } from 'redux';

import { reducerRepository } from './repositories/reducer';

export const rootReducer = combineReducers({
  reducerRepository,
});
