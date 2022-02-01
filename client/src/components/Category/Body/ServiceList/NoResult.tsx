import React from 'react';
import styled from 'styled-components';
import character from 'src/assets/images/character.png';

const Container = styled.div`
  width: 100%;
  padding-top: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  div {
    font-size: 20px;
    font-weight: 500;
    color: #94959e;
    margin-top: 24px;
  }
`;

const NoResult = () => {
  return (
    <Container>
      <img src={character} />
      <div>조건에 맞는 서비스가 없습니다</div>
    </Container>
  );
};

export default NoResult;
