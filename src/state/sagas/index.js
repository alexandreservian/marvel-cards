import { all } from 'redux-saga/effects';

import fetchApiSaga from './fetch-api';

export default function* root() {
  yield all([fetchApiSaga]);
}
