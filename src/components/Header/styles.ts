import styled from 'styled-components/native';
import {SIZES} from '../../constants';

export const HeaderContainer = styled.View`
  padding-top: ${SIZES.height * 0.04}px;
  height: ${SIZES.height * 0.105}px;
  justify-content: center;
  padding-horizontal: ${SIZES.width * 0.032}px;
  background-color: #5983ff;
`;

export const HeaderTitle = styled.Text`
  color: white;
  font-weight: 600;
  font-size: ${SIZES.height * 0.023}px;
`;
