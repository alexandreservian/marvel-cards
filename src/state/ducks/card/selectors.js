import { createSelector } from 'reselect';
import getTotalPages from 'utils/get-total-pages';
import modifyStructureCard from './selectors/modify-structure-card';
import modifyStructureCollections from './selectors/modify-structure-collections';
import hasMore from './selectors/has-more';

const card = state => state.card.description.data;
const limit = (state, { limit }) => limit;
const allCollection = (state, { collection }) => state.card[collection].data.results;
const totalCollection = (state, { collection }) => state.card[collection].data.total;
const limitCollection = (state, { collection }) => state.card[collection].data.limit;
const getLoadingCollection = (state, { collection }) => state.card[collection].loading;
const getCard = createSelector([card], modifyStructureCard);
const getAllCollection = createSelector([allCollection], modifyStructureCollections);
const hasMoreCollection = createSelector([totalCollection, limit], hasMore);
const getTotalPagesCollection = createSelector([totalCollection, limitCollection], getTotalPages);

export {
  getCard,
  getLoadingCollection,
  getAllCollection,
  hasMoreCollection,
  getTotalPagesCollection
};
