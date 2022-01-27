import React from 'react';
import styled from 'styled-components';
import ServiceList from './ServiceList';

const Container = styled.div`
  flex: 1;
  margin-left: 24px;
`;

const Body = () => {
  return (
    <Container>
      <ServiceList />
    </Container>
  );
};

export default Body;
