import { handleActions } from 'redux-actions';
import withLoadable from 'state/hor/with-loadable';
import * as types from './types';

export const INITIAL_STATE = { data: [], loading: false, error: null };

const success = (state, { payload }) => ({ ...state, data: [...payload] });

const reducer = handleActions(
  {
    [`${types.API_SEARCH_HEROES}:SUCCESS`]: success
  },
  INITIAL_STATE
);

export default withLoadable(types.API_SEARCH_HEROES)(reducer);
