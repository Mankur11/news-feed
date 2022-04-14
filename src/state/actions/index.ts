import {GestureResponderEvent} from 'react-native';
import {ActionType} from '../action-types';

export type SectionList = {display_name: string; section: string}[] | [];
export type SectionListItem = {display_name: string; section: string};
export type Section = string | null;

export type SectionState = {
  sectionList: SectionList;
  selectedSection: Section;
};

interface SetSectionsAction {
  type: ActionType.SET_SECTIONS_LIST;
  payload: {display_name: string; section: string}[];
}

interface SetSectionAction {
  type: ActionType.SET_SECTION;
  payload: string | null;
}

export type SectionAction = SetSectionAction | SetSectionsAction;

export type Story = {
  abstract: string;
  byline: string;
  created_date: Date;
  des_facet: string[];
  geo_facet: string[];
  item_type: string;
  kicker: string;
  material_type_facet: string;
  multimedia: {
    caption: string;
    copyright: string;
    format: string;
    height: number;
    subtype: string;
    type: string;
    url: string;
    width: number;
  }[];

  org_facet: [];
  per_facet: [];
  published_date: Date;
  section: string;
  short_url: string;
  subsection: string;
  title: string;
  updated_date: Date;
  uri: string;
  url: string;
};

export type StoriesList = Story[] | [];

export type LocationsList = {label: string; value: string}[] | [];
export type KeywordsList = {label: string; value: string}[] | [];

export type StoriesState = {
  storiesList: StoriesList;
  locations: LocationsList;
  keywords: KeywordsList;
  allStoriesList: StoriesList;
};

interface SetStoriesAction {
  type: ActionType.SET_STORIES_LIST;
  payload: StoriesList;
}

interface SetKeywordsAction {
  type: ActionType.SET_KEYWORDS_LIST;
  payload: KeywordsList;
}

interface FilterStories {
  type: ActionType.FILTER_STORIES;
  payload: StoryFilter;
}
export type StoriesAction =
  | SetStoriesAction
  | SetKeywordsAction
  | FilterStories;

export type Location = string;
export type Keyword = string;
export type StoryFilter = {selectedLocation: string; selectedKeyword: string};

export type FiltersState = {
  selectedLocation: Location;
  selectedKeyword: Keyword;
};

interface SetSelectedLocation {
  type: ActionType.SET_SELECTED_LOCATION;
  payload: Location;
}

interface SetSelectedKeyword {
  type: ActionType.SET_SELECTED_KEYWORD;
  payload: Keyword;
}

export type FiltersAction = SetSelectedLocation | SetSelectedKeyword;

export type OnPressType = (event: GestureResponderEvent) => void;
