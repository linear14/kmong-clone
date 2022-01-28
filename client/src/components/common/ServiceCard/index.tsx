import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import { IServiceCard } from 'src/types/service';
import Body from './Body';

const Container = styled.div`
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
    nickname,
    level,
    title,
    thumbnailUrl,
    isLike,
    price,
    itemCnt,
    rate,
    rateCnt
  } = service;

  return (
    <Container>
      <Header thumbnailUrl={thumbnailUrl} isLike={isLike} />
      <Body
        serviceBody={{ nickname, level, title, price, itemCnt, rate, rateCnt }}
      />
    </Container>
  );
};

export default ServiceCard;
