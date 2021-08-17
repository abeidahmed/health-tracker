import { combineReducers } from 'redux';
import unitReducer from './unitReducer';
import measurementsReducer from './measurementsReducer';
import valueReducer from './values';
// eslint-disable-next-line import/extensions
import dateReducer from './dateReducer';
import filterReducer from './filter';

const rootReducer = combineReducers({
  units: unitReducer,
  measurements: measurementsReducer,
  values: valueReducer,
  date: dateReducer,
  filter: filterReducer,
});

export default rootReducer;
