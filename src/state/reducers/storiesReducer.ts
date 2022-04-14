import {ActionType} from '../action-types';
import {StoriesState, StoriesAction, Story} from '../actions/index';

const initialState = {
  storiesList: [],
  locations: [],
  keywords: [],
  allStoriesList: [],
};

const reducer = (state: StoriesState = initialState, action: StoriesAction) => {
  switch (action.type) {
    case ActionType.SET_STORIES_LIST:
      let locationsArrays = action.payload
        .map((item: Story) => item.geo_facet)
        .filter((item: string[]) => item.length > 0)
        .flat()
        .sort(function (a: string, b: string) {
          if (a < b) {
            return -1;
          }
          if (a > b) {
            return 1;
          }
          return 0;
        });

      let uniqueLocations = Array.from(new Set(locationsArrays)).map(
        (item: string) => {
          return {label: item, value: item};
        },
      );

      return {
        ...state,
        storiesList: action.payload,
        allStoriesList: action.payload,
        locations: uniqueLocations,
      };
    case ActionType.SET_KEYWORDS_LIST:
      return {...state, keywords: action.payload};
    case ActionType.FILTER_STORIES:
      let filteredStoriesList = [...state.allStoriesList];

      if (
        filteredStoriesList.length > 0 &&
        action.payload.selectedKeyword.length > 0
      ) {
        filteredStoriesList = filteredStoriesList.filter((story: Story) => {
          return (
            story.des_facet.includes(action.payload.selectedKeyword) &&
            story.title
          );
        });
      }

      if (
        filteredStoriesList.length > 0 &&
        action.payload.selectedLocation.length > 0
      ) {
        filteredStoriesList = filteredStoriesList.filter((story: Story) => {
          return (
            story.geo_facet.includes(action.payload.selectedLocation) &&
            story.title
          );
        });
      }

      if (!action.payload.selectedKeyword && !action.payload.selectedLocation) {
        filteredStoriesList = state.allStoriesList;
      }

      return {...state, storiesList: filteredStoriesList};
    default:
      return state;
  }
};

export default reducer;
