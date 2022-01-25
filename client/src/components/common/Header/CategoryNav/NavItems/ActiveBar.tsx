import React from 'react';
import styled from 'styled-components';

const ActiveBar = styled.div<{ isActive: boolean }>`
  width: 100%;
  height: 4px;
  background: ${({ isActive }) => (isActive ? '#fcd200' : 'transparent')};
`;

export default ActiveBar;
