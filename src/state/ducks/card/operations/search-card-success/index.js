import { put } from 'redux-saga/effects';
import * as actions from '../../actions';

function* searchCardSuccess({ meta }) {
  const { id } = meta;
  const limit = 6;
  yield put(
    actions.searchComics({ limit })({
      id
    })
  );
  yield put(
    actions.searchEvents({ limit })({
      id
    })
  );
  yield put(
    actions.searchSeries({ limit })({
      id
    })
  );
}

export default searchCardSuccess;
