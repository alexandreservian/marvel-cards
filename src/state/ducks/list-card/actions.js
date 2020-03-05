import { createAction } from 'redux-actions';
import * as types from './types';

const searchCards = ({ limit = 20 } = {}) =>
  createAction(
    types.SEARCH_CARDS,
    () => {},
    ({ name = '', currentPage = 0 } = {}) => ({
      limit,
      name,
      currentPage
    })
  );

export { searchCards };
