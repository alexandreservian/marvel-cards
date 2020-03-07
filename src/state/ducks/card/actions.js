import { createAction } from 'redux-actions';
import * as types from './types';

const searchCard = createAction(
  types.SEARCH_CARD,
  () => {},
  (id = 0) => ({ id })
);

const searchComplementsCard = ({ type = '', endpoint = '' } = {}) => ({ limit = 20 } = {}) =>
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

const searchComics = searchComplementsCard({ type: types.API_SEARCH_COMICS, endpoint: 'comics' });
const searchEvents = searchComplementsCard({ type: types.API_SEARCH_EVENTS, endpoint: 'events' });
const searchSeries = searchComplementsCard({ type: types.API_SEARCH_SERIES, endpoint: 'series' });
const resetCard = createAction(types.RESET_CARD);
const resetDescription = createAction(types.RESET_DESCRIPTION);
const resetComics = createAction(types.RESET_COMICS);
const resetEvents = createAction(types.RESET_EVENTS);
const resetSeries = createAction(types.RESET_SERIES);

export {
  searchCard,
  searchComics,
  searchEvents,
  searchSeries,
  resetCard,
  resetDescription,
  resetComics,
  resetEvents,
  resetSeries
};
