import React, { useState } from 'react';
import styled from 'styled-components';
import Header from './Header';
import { IServiceCard } from 'src/types/service';
import Body from './Body';
import { Link } from 'react-router-dom';

const Container = styled(Link)`
  position: relative;
  width: 25%;
  height: 302px;
  padding: 0px 12px;
  margin-bottom: 48px;
  cursor: pointer;

  display: flex;
  flex-direction: column;
`;

const ServiceCard = ({ service }: { service: IServiceCard }) => {
  const {
    serviceIdx,
    userIdx,
    nickname,
    level,
    title,
    thumbnailUrl,
    leastPrice,
    isPackage,
    rate,
    rateCnt
  } = service;

  const [isHover, setHover] = useState(false);

  return (
    <Container
      to={`/service/${serviceIdx}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Header thumbnailUrl={thumbnailUrl || undefined} isHover={isHover} />
      <Body
        serviceBody={{
          nickname,
          level,
          title,
          leastPrice,
          isPackage,
          rate,
          rateCnt
        }}
      />
    </Container>
  );
};

export default ServiceCard;
