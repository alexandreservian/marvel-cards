import { createSelector } from 'reselect';
import modifyStructureCards from './selectors/modify-structure-cards';
import getTotalCards from './selectors/get-total-cards';

const allCards = state => state.listCard.data.results;
const total = state => state.listCard.data.total;
const limit = state => state.listCard.data.limit;
const getLoading = state => state.listCard.loading;
const getAllListCards = createSelector([allCards], modifyStructureCards);
const getTotalPages = createSelector([total, limit], getTotalCards);

export { getAllListCards, getTotalPages, getLoading };
