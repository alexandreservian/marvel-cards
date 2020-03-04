import { takeEvery } from 'redux-saga/effects';
import searchCards from './operations/search-cards';
import * as types from './types';

const takeSagas = [takeEvery(types.SEARCH_CARDS, searchCards)];

export { takeSagas };
