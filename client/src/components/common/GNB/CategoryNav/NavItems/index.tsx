import React from 'react';
import styled from 'styled-components';
import CategoryBox from './CategoryBox';
import EnterpriseBox from './EnterpriseBox';

const Container = styled.div`
  height: 100%;

  display: flex;
  align-items: center;
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
