import React from 'react';
import styled from 'styled-components';
import CategoryNav from './CategoryNav';
import MainNav from './MainNav';

const Container = styled.header`
  width: 100%;
  min-width: 1170px;
  height: 120px;
  position: relative;
  border-bottom: 1px solid #e4e5ed;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const GNBContainer = styled.div`
  width: 1170px;
  min-width: 1170px;
  height: 100%;

  display: flex;
  flex-direction: column;
`;

const Header = () => {
  return (
    <Container>
      <GNBContainer>
        <MainNav />
        <CategoryNav />
      </GNBContainer>
    </Container>
  );
};

export default Header;
