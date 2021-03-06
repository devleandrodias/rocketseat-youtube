import { RepositoriesState, RepositoriesTypes } from './types';
import { Reducer } from 'redux';

const INITIAL_STATE: RepositoriesState = {
  data: [{ id: 1, name: 'Flutter UI Coffee Store' }],
  error: false,
  loading: false,
};

export const reducerRepository: Reducer<RepositoriesState> = (
  state = INITIAL_STATE,
  action
) => {
  switch (action.type) {
    case RepositoriesTypes.LOAD_REQUEST:
      return { ...state, loading: true };
    case RepositoriesTypes.LOAD_SUCCES:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload.data,
      };
    case RepositoriesTypes.LOAD_FAILURE:
      return { ...state, loading: false, error: true, data: [] };
    default:
      return state;
  }
};
