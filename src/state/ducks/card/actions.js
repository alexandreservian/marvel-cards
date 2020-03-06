import { createAction } from 'redux-actions';
import * as types from './types';

const searchCard = createAction(
  types.SEARCH_CARD,
  () => {},
  (id = 0) => ({ id })
);

const searchComplementsCard = ({ type = '', endpoint = '', limit = 20 } = {}) =>
  createAction(
    types.SEARCH_COMPLEMENTS_CARD,
    () => {},
    ({ id = 0, offset = 0 } = {}) => ({
      type,
      id,
      offset,
      limit,
      endpoint
    })
  );

export { searchCard, searchComplementsCard };
