import styled from 'styled-components/native';
import {SIZES} from './constants';

export const Container = styled.View`
  flex: 1;
  background-color: #75d0e3;
`;

export const PickersContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  padding-vertical: ${SIZES.height * 0.024}px;
  background-color: #75c0e3;
  z-index: 1;
`;

export const PickerElementWrapper = styled.View`
  width: ${SIZES.width * 0.44}px;
`;

export const StoriesContainer = styled.ScrollView.attrs(() => ({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    justifyContent: 'space-around',
    paddingTop: SIZES.height * 0.006,
  },
}))``;

export const StoryContainer = styled.View`
  flex-direction: row;
  padding: ${SIZES.width * 0.04}px;
  margin: ${SIZES.width * 0.03}px;
  border-radius: 8px;
  background-color: white;
`;

export const StoryImage = styled.Image`
  height: ${SIZES.height * 0.123}px;
  width: ${SIZES.width * 0.27}px;
`;

export const StoryMetaContainer = styled.View`
  margin-left: ${SIZES.width * 0.064}px;
  flex: 1;
  justify-content: space-between;
`;

export const StoryTitle = styled.Text`
  flex-wrap: wrap;
  line-height: ${SIZES.height * 0.025}px;
  font-size: ${SIZES.height * 0.019}px;
`;

export const StoryAuthor = styled.Text`
  flex-wrap: wrap;
  line-height: ${SIZES.height * 0.014}px;
  font-size: ${SIZES.height * 0.014}px;
`;

export const StoryAge = styled.Text`
  font-size: ${SIZES.height * 0.014}px;
`;
