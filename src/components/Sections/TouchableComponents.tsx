import React from 'react';
import {ButtonContainer, SectionTitle} from './styles';
import {OnPressType, SectionListItem} from '../../state/actions/index';

export const PressableButton = ({
  onPress,
  section,
  selected,
}: {
  onPress: OnPressType;
  section: SectionListItem;
  selected: boolean;
}) => (
  <ButtonContainer onPress={onPress} selected={selected}>
    <SectionTitle selected={selected}>{section.display_name}</SectionTitle>
  </ButtonContainer>
);
