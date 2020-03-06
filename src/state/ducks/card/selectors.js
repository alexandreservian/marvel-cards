import { createSelector } from 'reselect';
import modifyStructureCard from './selectors/modify-structure-card';
import modifyStructureCollections from './selectors/modify-structure-collections';

const card = state => state.card.description.data;
const allComics = state => state.card.comics.data.results;
const allEvents = state => state.card.events.data.results;
const allSeries = state => state.card.series.data.results;
const getCard = createSelector([card], modifyStructureCard);
const getLoadingDescription = state => state.card.description.loading;
const getAllComics = createSelector([allComics], modifyStructureCollections);
const getAllEvents = createSelector([allEvents], modifyStructureCollections);
const getAllSeries = createSelector([allSeries], modifyStructureCollections);

export { getCard, getLoadingDescription, getAllComics, getAllEvents, getAllSeries };
