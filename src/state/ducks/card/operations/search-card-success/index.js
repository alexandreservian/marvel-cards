import { put } from 'redux-saga/effects';
import * as types from '../../types';
import * as actions from '../../actions';

function* searchCardSuccess({ meta }) {
  const { id } = meta;
  const limit = 6;
  yield put(
    actions.searchComplementsCard({ type: types.API_SEARCH_COMICS, endpoint: 'comics', limit })({
      id
    })
  );
  yield put(
    actions.searchComplementsCard({ type: types.API_SEARCH_EVENTS, endpoint: 'events', limit })({
      id
    })
  );
  yield put(
    actions.searchComplementsCard({ type: types.API_SEARCH_SERIES, endpoint: 'series', limit })({
      id
    })
  );
  yield put(
    actions.searchComplementsCard({ type: types.API_SEARCH_STORIES, endpoint: 'stories', limit })({
      id
    })
  );
}

export default searchCardSuccess;
