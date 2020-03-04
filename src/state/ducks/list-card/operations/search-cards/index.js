import { put } from 'redux-saga/effects';
import * as types from '../../types';
import { apiConfig } from 'config-project';
import transformResponse from 'utils/transform-response';
const { apikey } = apiConfig;

function* searchCards({ payload, meta }) {
  yield put({
    type: 'FECTH_API',
    payload: {
      url: 'characters',
      method: 'get',
      session: types.API_SEARCH_CARDS,
      params: { apikey },
      transformResponse
    }
  });
}

export default searchCards;
