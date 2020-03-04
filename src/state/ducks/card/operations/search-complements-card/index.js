import { put } from 'redux-saga/effects';
import { apiConfig } from 'config-project';
import transformResponseList from 'utils/transform-response-list';
const { apikey } = apiConfig;

function* searchComplementsCard({ meta }) {
  const { type, id, offset, limit, endpoint } = meta;
  yield put({
    type: 'FECTH_API',
    payload: {
      url: `characters/${id}/${endpoint}`,
      method: 'get',
      session: type,
      params: { apikey, offset, limit },
      transformResponse: transformResponseList
    }
  });
}

export default searchComplementsCard;
