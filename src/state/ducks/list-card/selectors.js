import { createSelector } from 'reselect';
import modifyStructureCards from './selectors/modify-structure-cards';
import getTotalPages from 'utils/get-total-pages';

const allCards = state => state.listCard.data.results;
const total = state => state.listCard.data.total;
const limit = state => state.listCard.data.limit;
const getLoading = state => state.listCard.loading;
const getAllListCards = createSelector([allCards], modifyStructureCards);
const getTotalPagesCard = createSelector([total, limit], getTotalPages);

export { getAllListCards, getTotalPagesCard, getLoading };
