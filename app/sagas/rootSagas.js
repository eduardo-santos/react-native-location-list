import { all } from 'redux-saga/effects';

import { apiSagas } from './apiSagas';

export default function* rootSaga() {
  yield all([...apiSagas]);
}
