import { handleActions } from 'redux-actions';
import withLoadable from 'state/hor/with-loadable';
import * as types from '../../types';

export const INITIAL_STATE = {
  data: { id: '', name: '', description: '', urls: [], thumbnail: { path: '', extension: '' } },
  loading: false,
  error: null
};

const success = (state, { payload }) => ({ ...state, data: { ...payload } });

const reducer = handleActions(
  {
    [`${types.API_SEARCH_CARD}_SUCCESS`]: success
  },
  INITIAL_STATE
);

export default withLoadable(types.API_SEARCH_CARD)(reducer);
