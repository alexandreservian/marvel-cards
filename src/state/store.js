import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'state/middlewares/logger';
import * as reducers from './ducks';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  combineReducers({
    ...reducers
  }),
  compose(applyMiddleware(sagaMiddleware), logger())
);

sagaMiddleware.run(rootSaga);

export default store;
