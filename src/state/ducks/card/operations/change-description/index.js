import { put, call } from 'redux-saga/effects';
import * as actions from '../../actions';

function* changeDescription({ meta }) {
  const { id, description } = meta;
  yield call([localStorage, 'setItem'], id, description);
  yield put(actions.updateDescription(description));
}

export default changeDescription;
