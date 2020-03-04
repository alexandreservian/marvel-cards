import { put } from 'redux-saga/effects';
import * as types from '../../types';
import * as actions from '../../actions';

function* searchCardSuccess({ meta }) {
  const { id } = meta;
  yield put(actions.searchComplementsCard(types.API_SEARCH_COMICS, 'comics')({ id }));
  yield put(actions.searchComplementsCard(types.API_SEARCH_EVENTS, 'events')({ id }));
  yield put(actions.searchComplementsCard(types.API_SEARCH_SERIES, 'series')({ id }));
  yield put(actions.searchComplementsCard(types.API_SEARCH_STORIES, 'stories')({ id }));
}

export default searchCardSuccess;
