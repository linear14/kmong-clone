import React from 'react';
import styled from 'styled-components';
import ServiceList from './ServiceList';
import { IServiceCard } from 'src/types/service';

const Container = styled.div`
  flex: 1;
  margin-left: 24px;
`;

const Body = ({ serviceList }: { serviceList: IServiceCard[] }) => {
  return (
    <Container>
      <ServiceList serviceList={serviceList} />
    </Container>
  );
};

export default Body;
