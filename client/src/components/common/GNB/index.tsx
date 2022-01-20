import React from 'react';
import styled from 'styled-components';
import CategoryNav from './CategoryNav';
import MainNav from './MainNav';

const GNBContainer = styled.div`
  width: 1170px;
  min-width: 1170px;
  height: 100%;

  display: flex;
  flex-direction: column;
`;

const GNB = () => {
  return (
    <GNBContainer>
      <MainNav />
      <CategoryNav />
    </GNBContainer>
  );
};

export default GNB;
