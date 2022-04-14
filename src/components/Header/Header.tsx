import {HeaderContainer, HeaderTitle} from './styles';
import React, {FC} from 'react';

type HeaderProps = {
  title: string;
};

export const Header: FC<HeaderProps> = ({title}) => {
  return (
    <HeaderContainer>
      <HeaderTitle>{title}</HeaderTitle>
    </HeaderContainer>
  );
};
