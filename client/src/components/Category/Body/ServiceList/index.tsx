import React from 'react';
import ServiceCard from 'src/components/common/ServiceCard';
import styled from 'styled-components';

const Container = styled.div`
  margin: 0px -12px;

  display: flex;
  flex-wrap: wrap;
`;

const ServiceList = () => {
  return (
    <Container>
      <ServiceCard service={{}} />
      <ServiceCard service={{}} />
      <ServiceCard service={{}} />
      <ServiceCard service={{}} />
      <ServiceCard service={{}} />
      <ServiceCard service={{}} />
      <ServiceCard service={{}} />
      <ServiceCard service={{}} />
      <ServiceCard service={{}} />
    </Container>
  );
};

export default ServiceList;
