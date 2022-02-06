import React from 'react';
import styled from 'styled-components';
import Stars from './Stars';

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 24px 0px;

  line-height: 20px;
  vertical-align: center;
`;

const Rate = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-left: 8px;
`;

const RateCnt = styled.div`
  font-size: 14px;
  color: #999999;
  font-weight: 500;
  margin-left: 8px;
`;

const RateBox = ({ rate, rateCnt }: { rate: number; rateCnt: number }) => {
  return (
    <Container>
      <Stars rate={rate} />
      <Rate>{rate.toFixed(1)}</Rate>
      <RateCnt>({rateCnt}개의 평가)</RateCnt>
    </Container>
  );
};

export default RateBox;
