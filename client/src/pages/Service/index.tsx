import React from 'react';
import { useParams } from 'react-router-dom';
import { History } from 'src/components/Service';
import styled from 'styled-components';

const Container = styled.div`
  width: 1170px;
  min-width: 1170px;
  padding: 24px 0px 48px;
  display: flex;
  position: relative;
`;

const BodyLeft = styled.div`
  flex: 1;
  position: relative;
`;

const BodyRight = styled.div`
  width: 436px;
  margin-left: 48px;
  position: relative;
`;

const Service = () => {
  const { serviceIdx } = useParams();

  return (
    <Container>
      <BodyLeft>
        <History categoryIdx={101} />
      </BodyLeft>
      <BodyRight />
    </Container>
  );
};

export default Service;
