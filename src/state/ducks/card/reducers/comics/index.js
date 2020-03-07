import { handleActions } from 'redux-actions';
import withLoadable from 'state/hor/with-loadable';
import withResetState from 'state/hor/with-reset-state';
import pipe from 'utils/pipe';
import * as types from '../../types';

export const INITIAL_STATE = {
  data: { offset: 0, limit: 0, total: 0, count: 0, results: [] },
  loading: false,
  error: null
};

const success = (state, { payload }) => ({ ...state, data: { ...payload } });

const reducer = handleActions(
  {
    [`${types.API_SEARCH_COMICS}_SUCCESS`]: success
  },
  INITIAL_STATE
);

const loadable = withLoadable(types.API_SEARCH_COMICS);
const reset = withResetState(types.RESET_COMICS, INITIAL_STATE);

export default pipe(loadable, reset)(reducer);
