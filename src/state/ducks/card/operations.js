import { takeEvery } from 'redux-saga/effects';
import searchCard from './operations/search-card';
import searchComplementsCard from './operations/search-complements-card';
import searchCardSuccess from './operations/search-card-success';
import resetCard from './operations/reset-card';
import * as types from './types';

const takeSagas = [
  takeEvery(types.SEARCH_CARD, searchCard),
  takeEvery(types.SEARCH_COMPLEMENTS_CARD, searchComplementsCard),
  takeEvery(`${types.API_SEARCH_CARD}_SUCCESS`, searchCardSuccess),
  takeEvery(types.RESET_CARD, resetCard)
];

export { takeSagas };
