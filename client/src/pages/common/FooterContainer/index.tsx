import React from 'react';
import styled from 'styled-components';
import { Footer } from 'src/components/common';

const Container = styled.footer`
  width: 100%;
  position: relative;
  border-top: 1px solid #979797;
`;

const FooterContainer = () => {
  return (
    <Container>
      <Footer />
    </Container>
  );
};

export default FooterContainer;
