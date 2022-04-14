import {ActionType} from '../action-types';
import {FiltersState, FiltersAction} from '../actions/index';

const initialState = {
  selectedLocation: '',
  selectedKeyword: '',
};

const reducer = (state: FiltersState = initialState, action: FiltersAction) => {
  switch (action.type) {
    case ActionType.SET_SELECTED_LOCATION:
      return {...state, selectedLocation: action.payload};
    case ActionType.SET_SELECTED_KEYWORD:
      return {...state, selectedKeyword: action.payload};
    default:
      return state;
  }
};

export default reducer;
