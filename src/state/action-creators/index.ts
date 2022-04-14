import {ActionType} from '../action-types';
import {Dispatch} from 'redux';
import {
  SectionList,
  Section,
  SectionAction,
  StoriesAction,
  KeywordsList,
  FiltersAction,
} from '../actions/index';
import {getAllArticles, getStoriesBySection} from '../../services/services';

export const setSectionList = (sectionList: SectionList) => {
  return (dispatch: Dispatch<SectionAction>) => {
    dispatch({
      type: ActionType.SET_SECTIONS_LIST,
      payload: sectionList,
    });
  };
};

export const setSection = (section: Section) => {
  return (dispatch: Dispatch<SectionAction>) => {
    dispatch({
      type: ActionType.SET_SECTION,
      payload: section,
    });
  };
};

export const setStories =
  (section: string) => async (dispatch: Dispatch<StoriesAction>) => {
    let storiesList = await getStoriesBySection(section);
    return dispatch({
      type: ActionType.SET_STORIES_LIST,
      payload: storiesList,
    });
  };

export const setKeywords = () => async (dispatch: Dispatch<StoriesAction>) => {
  const allArticles = await getAllArticles();
  const keyWordsArr = allArticles
    .map((item: any) => item.keywords)
    .filter(
      (
        item: {
          major: string;
          name: string;
          subject: string;
          rank: number;
          value: string;
        }[],
      ) => item.length > 0,
    )
    .flat()
    .map(
      (item: {
        major: string;
        name: string;
        subject: string;
        rank: number;
        value: string;
      }) => {
        return item.value;
      },
    )
    .sort(function (a: string, b: string) {
      if (a < b) {
        return -1;
      }
      if (a > b) {
        return 1;
      }
      return 0;
    });
  const uniqueKeywordsArray: string[] = Array.from(new Set(keyWordsArr));
  const uniqueKeywords = uniqueKeywordsArray.map((item: string) => {
    return {label: item, value: item};
  });

  return dispatch({
    type: ActionType.SET_KEYWORDS_LIST,
    payload: uniqueKeywords,
  });
};

export const filterStories = (props: {
  selectedKeyword: string;
  selectedLocation: string;
}) => {
  return (dispatch: Dispatch<StoriesAction>) => {
    dispatch({
      type: ActionType.FILTER_STORIES,
      payload: props,
    });
  };
};

export const setSelectedLocation = (location: string) => {
  return (dispatch: Dispatch<FiltersAction>) => {
    dispatch({
      type: ActionType.SET_SELECTED_LOCATION,
      payload: location,
    });
  };
};

export type SetItem = (
  location: string,
) => (dispatch: Dispatch<FiltersAction>) => void;

export const setSelectedKeyword = (keyword: string) => {
  return (dispatch: Dispatch<FiltersAction>) => {
    dispatch({
      type: ActionType.SET_SELECTED_KEYWORD,
      payload: keyword,
    });
  };
};
