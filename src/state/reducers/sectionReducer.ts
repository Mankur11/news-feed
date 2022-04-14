import {ActionType} from '../action-types';
import {SectionState, SectionAction} from '../actions/index';

const initialState = {
  sectionList: [],
  selectedSection: null,
};

const reducer = (state: SectionState = initialState, action: SectionAction) => {
  switch (action.type) {
    case ActionType.SET_SECTIONS_LIST:
      return {...state, sectionList: action.payload};
    case ActionType.SET_SECTION:
      return {...state, selectedSection: action.payload};
    default:
      return state;
  }
};

export default reducer;
