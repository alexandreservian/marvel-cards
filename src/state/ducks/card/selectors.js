import { createSelector } from 'reselect';
import modifyStructureCard from './selectors/modify-structure-card';
import modifyStructureCollections from './selectors/modify-structure-collections';
import hasMore from './selectors/has-more';

const card = state => state.card.description.data;
const limit = (state, limit) => limit;
const allComics = state => state.card.comics.data.results;
const allEvents = state => state.card.events.data.results;
const allSeries = state => state.card.series.data.results;
const totalComics = state => state.card.comics.data.total;
const totalEvents = state => state.card.events.data.total;
const totalSeries = state => state.card.series.data.total;
const getCard = createSelector([card], modifyStructureCard);
const getLoadingDescription = state => state.card.description.loading;
const getAllComics = createSelector([allComics], modifyStructureCollections);
const getAllEvents = createSelector([allEvents], modifyStructureCollections);
const getAllSeries = createSelector([allSeries], modifyStructureCollections);
const hasMoreComics = createSelector([totalComics, limit], hasMore);
const hasMoreEvents = createSelector([totalEvents, limit], hasMore);
const hasMoreSeries = createSelector([totalSeries, limit], hasMore);

export {
  getCard,
  getLoadingDescription,
  getAllComics,
  getAllEvents,
  getAllSeries,
  hasMoreComics,
  hasMoreEvents,
  hasMoreSeries
};
