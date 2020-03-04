import { all } from 'redux-saga/effects';
import fetchApiSaga from './fetch-api';
import { operations as operationsListCard } from 'state/ducks/list-card';

export default function* root() {
  yield all([fetchApiSaga, ...operationsListCard.takeSagas]);
}
