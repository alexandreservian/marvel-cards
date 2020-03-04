import { takeEvery } from 'redux-saga/effects';
import searchCard from './operations/search-card';
import * as types from './types';

const takeSagas = [takeEvery(types.SEARCH_CARD, searchCard)];

export { takeSagas };
