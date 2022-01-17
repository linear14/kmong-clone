import React from 'react';
import styled from 'styled-components';
import { FlexDirection } from 'src/enum/style';
import { flexBox } from 'src/util/style';
import CategoryNav from './CategoryNav';
import MainNav from './MainNav';

const GNBContainer = styled.div`
  ${flexBox({
    direction: FlexDirection.COLUMN,
    isAxisCenter: false
  })};

  width: 1170px;
  min-width: 1170px;
  height: 100%;
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
