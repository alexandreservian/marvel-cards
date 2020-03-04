import { createSelector } from 'reselect';
import modifyStructureCards from './selectors/modify-structure-cards';

const allCards = state => state.listCard.data.results;
const getAllListCards = createSelector([allCards], modifyStructureCards);

export { getAllListCards };
