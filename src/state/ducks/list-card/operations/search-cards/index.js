import { put } from 'redux-saga/effects';
import * as types from '../../types';
import { apiConfig } from 'config-project';
import transformResponseList from 'utils/transform-response-list';
const { apikey } = apiConfig;

function* searchCards({ meta }) {
  const { limit, nameStartsWith, currentPage } = meta;
  const offset = limit * currentPage;
  const params = { apikey, offset, limit };
  const paramsVarieble = nameStartsWith ? { ...params, nameStartsWith } : { ...params };
  yield put({
    type: 'FECTH_API',
    payload: {
      url: 'characters',
      method: 'get',
      session: types.API_SEARCH_CARDS,
      params: { ...paramsVarieble },
      transformResponse: transformResponseList
    }
  });
}

export default searchCards;
