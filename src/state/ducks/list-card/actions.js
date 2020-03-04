import { createAction } from 'redux-actions';
import * as types from './types';

const searchCards = createAction(
  types.SEARCH_CARDS,
  () => {},
  ({ offset = 0, limit = 20, name = '' }) => ({
    offset,
    limit,
    name
  })
);

export { searchCards };
