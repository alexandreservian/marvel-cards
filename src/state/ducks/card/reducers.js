import { combineReducers } from 'redux';
import description from './reducers/description';
import comics from './reducers/comics';
import events from './reducers/events';
import series from './reducers/series';
import stories from './reducers/stories';

export default combineReducers({ description, comics, events, series, stories });
