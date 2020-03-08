import { handleActions } from 'redux-actions';
import withLoadable from 'state/hor/with-loadable';
import withResetState from 'state/hor/with-reset-state';
import pipe from 'utils/pipe';
import * as types from '../../types';

export const INITIAL_STATE = {
  data: { id: '', name: '', description: '', urls: [], thumbnail: { path: '', extension: '' } },
  loading: false,
  error: null
};

const success = (state, { payload }) => ({ ...state, data: { ...payload } });
const update = (state, { payload }) => ({ ...state, data: { ...state.data, ...payload } });

const reducer = handleActions(
  {
    [`${types.API_SEARCH_CARD}_SUCCESS`]: success,
    [types.UPDATE_DESCRIPTION]: update
  },
  INITIAL_STATE
);

const loadable = withLoadable(types.API_SEARCH_CARD);
const reset = withResetState(types.RESET_DESCRIPTION, INITIAL_STATE);

export default pipe(loadable, reset)(reducer);
