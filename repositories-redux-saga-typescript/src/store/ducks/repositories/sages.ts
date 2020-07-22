import { call, put } from 'redux-saga/effects';
import { api } from '../../../services/api';

import { loadSucces, loadFailure } from '../repositories/actions';

export function* load() {
  try {
    const response = yield call(api.get, 'users/devleandrodias/repos');
    yield put(loadSucces(response.data));
  } catch (err) {
    yield put(loadFailure());
  }
}
