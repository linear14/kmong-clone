import React from 'react';
import ServiceCard from 'src/components/common/ServiceCard';
import { IServiceCard } from 'src/types/service';
import styled from 'styled-components';

const Container = styled.div`
  margin: 24px -12px 0px;

  display: flex;
  flex-wrap: wrap;
`;

const ServiceList = ({ serviceList }: { serviceList: IServiceCard[] }) => {
  return (
    <Container>
      {serviceList.map(item => (
        <ServiceCard key={item.serviceIdx} service={item} />
      ))}
    </Container>
  );
};

export default ServiceList;
