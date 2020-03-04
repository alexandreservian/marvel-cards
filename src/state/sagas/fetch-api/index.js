import { call, put, takeEvery } from 'redux-saga/effects';
import api from 'utils/api';

function* fecthSuccess(session, data, meta) {
  yield put({ type: `${session}_SUCCESS`, payload: data, meta });
}

function* fecthError(session, error, meta) {
  yield put({ type: `${session}_FAILURE`, error, meta });
}

function* fecthApi({ payload, meta = '' }) {
  const { url, method, data, session, transformResponse = data => data, params } = payload;
  try {
    yield put({ type: `${session}_REQUEST`, meta });
    const response = yield call(api, {
      url,
      method,
      data,
      params,
      transformResponse,
      responseType: 'json',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const { data: dataResponse } = response;
    yield fecthSuccess(session, dataResponse, meta);
  } catch (error) {
    const {
      response: { data: dataError, status }
    } = error;
    const statusError = { data: dataError, status };
    yield fecthError(session, statusError, meta);
  }
}

export default takeEvery('FECTH_API', fecthApi);
