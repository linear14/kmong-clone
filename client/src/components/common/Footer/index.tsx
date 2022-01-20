import React from 'react';
import styled from 'styled-components';
import BottomContent from './BottomContent';
import TopContent from './TopContent';

const Container = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  background: #e4e5ed;
`;

const Footer = () => {
  return (
    <Container>
      <TopContent />
      <Line />
      <BottomContent />
    </Container>
  );
};

export default Footer;
