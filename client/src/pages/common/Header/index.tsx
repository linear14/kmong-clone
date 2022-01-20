import React from 'react';
import styled from 'styled-components';
import { GNB } from 'src/components/common';

const HeaderContainer = styled.header`
  width: 100%;
  min-width: 1170px;
  height: 120px;
  position: relative;
  border-bottom: 1px solid #e4e5ed;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <GNB />
    </HeaderContainer>
  );
};

export default Header;
