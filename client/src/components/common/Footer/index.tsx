import React from 'react';
import styled from 'styled-components';
import Content from './Content';

const Container = styled.footer`
  width: 100%;
  position: relative;
  border-top: 1px solid #979797;
`;

const Footer = () => {
  return (
    <Container>
      <Content />
    </Container>
  );
};

export default Footer;
