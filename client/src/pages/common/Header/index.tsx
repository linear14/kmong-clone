import React from 'react';
import styled from 'styled-components';
import { flexBox } from 'src/util/style';
import { GNB } from 'src/components/common';

const HeaderContainer = styled.header`
  ${flexBox};

  width: 100%;
  min-width: 1170px;
  height: 120px;
  position: relative;
  border-bottom: 1px solid #e4e5ed;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <GNB />
    </HeaderContainer>
  );
};

export default Header;
