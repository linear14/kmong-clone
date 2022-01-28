import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 8px;

  div {
    font-size: 12px;
    color: #71727a;
  }

  div:nth-child(2) {
    margin: 0px 4px;
  }
`;

const Rate = ({ rate, rateCnt }: { rate: number; rateCnt: number }) => {
  return (
    <Container>
      <div>{rate}</div>
      <div>|</div>
      <div>{rateCnt}개의 평가</div>
    </Container>
  );
};

export default Rate;
