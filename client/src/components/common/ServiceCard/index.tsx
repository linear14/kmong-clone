import React from 'react';
import styled from 'styled-components';

interface IServiceCard {}

const Container = styled.div`
  position: relative;
  width: 25%;
  height: 302px;
  padding: 0px 12px;
  margin-bottom: 40px;
`;

const InnerContainer = styled.div`
  width: 100%;
  height: 100%;
  background: #eeeeee;
`;

const ServiceCard = ({ service }: { service: IServiceCard }) => {
  return (
    <Container>
      <InnerContainer />
    </Container>
  );
};

export default ServiceCard;
