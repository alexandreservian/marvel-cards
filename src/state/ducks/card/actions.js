import { createAction } from 'redux-actions';
import * as types from './types';

const searchCard = createAction(
  types.SEARCH_CARD,
  () => {},
  (id = 0) => ({ id })
);

export { searchCard };
