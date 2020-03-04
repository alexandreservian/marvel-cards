import { all } from 'redux-saga/effects';
import fetchApiSaga from './fetch-api';
import { operations as operationsListCard } from 'state/ducks/list-card';
import { operations as operationsCard } from 'state/ducks/card';

export default function* root() {
  yield all([fetchApiSaga, ...operationsListCard.takeSagas, ...operationsCard.takeSagas]);
}
