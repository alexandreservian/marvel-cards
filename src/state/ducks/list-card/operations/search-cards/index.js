import { put } from 'redux-saga/effects';
import * as types from '../../types';
import { apiConfig } from 'config-project';
import transformResponseList from 'utils/transform-response-list';
const { apikey } = apiConfig;

function* searchCards({ payload, meta }) {
  yield put({
    type: 'FECTH_API',
    payload: {
      url: 'characters',
      method: 'get',
      session: types.API_SEARCH_CARDS,
      params: { apikey },
      transformResponse: transformResponseList
    }
  });
}

export default searchCards;
