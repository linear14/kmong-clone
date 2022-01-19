import React from 'react';
import { flexBox } from 'src/util/style';
import styled from 'styled-components';
import CategoryBox from './CategoryBox';
import EnterpriseBox from './EnterpriseBox';

const Container = styled.div`
  ${flexBox({ isAxisCenter: false })};
  height: 100%;
`;

const NavItems = () => {
  return (
    <Container>
      <CategoryBox />
      <EnterpriseBox />
    </Container>
  );
};

export default NavItems;
