import React from 'react';
import { Body, SideNav } from 'src/components/Category';
import styled from 'styled-components';

const Container = styled.div`
  width: 1170px;
  min-width: 1170px;
  height: 100%;
  margin: 40px 0px;

  display: flex;
`;

const CategoryPage = () => {
  return (
    <Container>
      <SideNav />
      <Body />
    </Container>
  );
};

export default CategoryPage;
