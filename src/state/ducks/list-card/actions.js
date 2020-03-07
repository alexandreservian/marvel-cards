import { createAction } from 'redux-actions';
import * as types from './types';

const searchCards = ({ limit = 20 } = {}) =>
  createAction(
    types.SEARCH_CARDS,
    () => {},
    ({ nameStartsWith = '', currentPage = 0 } = {}) => ({
      limit,
      nameStartsWith,
      currentPage
    })
  );

const resetCards = createAction(types.RESET_CARDS);

export { searchCards, resetCards };
