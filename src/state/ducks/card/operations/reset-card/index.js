import { put } from 'redux-saga/effects';
import * as actions from '../../actions';

function* resetCard() {
  yield put(actions.resetDescription());
  yield put(actions.resetComics());
  yield put(actions.resetEvents());
  yield put(actions.resetSeries());
}

export default resetCard;
