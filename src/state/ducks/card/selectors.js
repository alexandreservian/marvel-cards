import { createSelector } from 'reselect';
import modifyStructureCard from './selectors/modify-structure-card';

const card = state => state.card.description.data;
const getCard = createSelector([card], modifyStructureCard);

export { getCard };
