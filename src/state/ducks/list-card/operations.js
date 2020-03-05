import { debounce } from 'redux-saga/effects';
import searchCards from './operations/search-cards';
import * as types from './types';

const takeSagas = [debounce(300, types.SEARCH_CARDS, searchCards)];

export { takeSagas };
