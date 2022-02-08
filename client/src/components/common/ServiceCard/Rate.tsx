import React from 'react';
import styled from 'styled-components';
import starFilled from 'src/assets/images/star_filled.png';

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 8px;

  img {
    width: 13px;
    height: 13px;
  }

  div {
    font-size: 12px;
    color: #71727a;

    &:nth-child(2) {
      margin-left: 4px;
    }

    &:nth-child(3) {
      margin: 0px 4px;
    }
  }
`;

const Rate = ({ rate, rateCnt }: { rate: number; rateCnt: number }) => {
  return (
    <Container>
      <img src={starFilled} />
      <div>{rate.toFixed(1)}</div>
      <div>|</div>
      <div>{rateCnt}개의 평가</div>
    </Container>
  );
};

export default Rate;
