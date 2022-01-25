import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ActiveBar from './ActiveBar';

const Container = styled.div`
  margin-left: 40px;
  height: 100%;
  cursor: pointer;

  display: flex;
  flex-direction: column;
`;

const InnerContainer = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`;

const EnterpriseLink = styled(Link)<{ $isActive: boolean }>`
  font-size: 16px;
  font-weight: ${({ $isActive }) => ($isActive ? 'bold' : 'normal')};

  &::after {
    content: '엔터프라이즈';
  }
`;

const EnterpriseBox = () => {
  const [isActive, setActive] = useState<boolean>(false);

  return (
    <Container
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
    >
      <InnerContainer>
        <EnterpriseLink to='/' $isActive={isActive} />
      </InnerContainer>
      <ActiveBar isActive={isActive} />
    </Container>
  );
};

export default EnterpriseBox;
