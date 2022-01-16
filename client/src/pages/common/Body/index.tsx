import React from 'react';
import styled from 'styled-components';

const BodyContainer = styled.div`
  width: 100%;
  position: relative;
`;

const Body = ({ children }: { children: React.ReactNode }) => {
  return <BodyContainer>{children}</BodyContainer>;
};

export default Body;
