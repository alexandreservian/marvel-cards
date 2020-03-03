import { createAction } from 'redux-actions';
import * as types from './types';

const searchHeroes = createAction('FECTH_API', () => ({
  url: 'characters',
  method: 'get',
  session: types.API_SEARCH_HEROES
}));

export { searchHeroes };
