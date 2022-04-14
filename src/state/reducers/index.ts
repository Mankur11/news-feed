import {combineReducers} from 'redux';
import sectionReducer from './sectionReducer';
import storiesReducer from './storiesReducer';
import filtersReducer from './filtersReducer';

const reducers = combineReducers({
  section: sectionReducer,
  stories: storiesReducer,
  filters: filtersReducer,
});

export default reducers;

export type State = ReturnType<typeof reducers>;
