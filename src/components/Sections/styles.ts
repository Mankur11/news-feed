import styled from 'styled-components/native';
import {SIZES} from '../../constants';

export const SectionsWrapper = styled.View`
  height: ${SIZES.height * 0.182}px;
  padding-vertical: ${SIZES.height * 0.019}px;
  background-color: #edf0f6;
`;

export const SectionsTitle = styled.Text`
  font-size: ${SIZES.height * 0.018}px;
  font-weight: 600;
  color: #565756;
  padding-left: ${SIZES.width * 0.04}px;
`;

export const Sections = styled.ScrollView.attrs(() => ({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
    paddingLeft: SIZES.width * 0.04,
    flexWrap: 'wrap',
    flexDirection: 'column',
  },
}))``;

export const ButtonContainer = styled.TouchableOpacity`
  height: ${SIZES.height * 0.038}px;
  width: ${SIZES.width * 0.293}px;
  justify-content: center;
  margin-top: ${SIZES.height * 0.015}px;
  margin-right: ${SIZES.width * 0.059}px;
  border-width: 1.1px;
  border-radius: 8px;
  border-color: ${(props: {selected: boolean}) =>
    props.selected ? '#817CFF' : '#6b7b80'};
  background-color: #FFFFF;
`;

export const SectionTitle = styled.Text`
  font-size: ${SIZES.height * 0.016}px;
  font-weight: 500;
  color: ${(props: {selected: boolean}) =>
    props.selected ? '#453DFF' : '#7b898d'};
  text-align: center;
`;
