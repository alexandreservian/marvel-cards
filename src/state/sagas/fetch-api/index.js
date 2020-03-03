import { call, put, takeEvery } from 'redux-saga/effects';
import api from 'utils/api';

function* fecthSuccess(session, dataResponse, meta, message = '') {
  yield put({ type: `${session}_SUCCESS`, payload: dataResponse, meta });
}

function* fecthError(session, error, meta, message = 'Ocorreu algum erro na aplicação') {
  yield put({ type: `${session}_FAILURE`, error, meta });
}

function* fecthApi({ payload, meta = '' }) {
  const { url, method, data, session, transformResponse = data => data } = payload;
  try {
    yield put({ type: `${session}_REQUEST`, meta });
    const response = yield call(api, {
      url,
      method,
      data,
      transformResponse,
      responseType: 'json',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const { data: dataResponse } = response;
    const { ExecutadoComSucesso, Mensagem } = dataResponse;

    return ExecutadoComSucesso || ExecutadoComSucesso === undefined
      ? yield fecthSuccess(session, dataResponse, meta, Mensagem)
      : yield fecthError(session, { message: Mensagem }, meta, Mensagem);
  } catch (error) {
    yield put({ type: `${session}_FAILURE`, error, meta });
    yield fecthError(session, error, meta);
  }
}

export default takeEvery('FECTH_API', fecthApi);
