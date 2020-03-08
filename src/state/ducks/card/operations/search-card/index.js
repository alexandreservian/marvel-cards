import { put, call } from 'redux-saga/effects';
import * as types from '../../types';
import { apiConfig } from 'config-project';
import transformResponseItem from 'utils/transform-response-item';
const { apikey } = apiConfig;

function* searchCard({ meta }) {
  const { id } = meta;
  const description = yield call([localStorage, 'getItem'], `${id}`);
  const hasDescriptionSave = !!description;
  const changes = hasDescriptionSave ? { description } : {};
  yield put({
    type: 'FECTH_API',
    payload: {
      url: `characters/${id}`,
      method: 'get',
      session: types.API_SEARCH_CARD,
      params: { apikey },
      transformResponse: transformResponseItem(changes)
    },
    meta: { ...meta }
  });
}

export default searchCard;
