import React from 'react';
import styled from 'styled-components';

const BodyContainer = styled.div`
  width: 100%;
  min-width: 1170px;
  position: relative;

  display: flex;
  justify-content: center;
`;

const Body = ({ children }: { children: React.ReactNode }) => {
  return <BodyContainer>{children}</BodyContainer>;
};

export default Body;
