import React from 'react';
import styled from 'styled-components';
import { RouterBox } from './style';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { RouterDirection } from 'src/enum/style';

const Container = styled(RouterBox)<{ isActive?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;

  pointer-events: ${({ isActive }) => !isActive && 'none'};
  color: ${({ isActive }) => !isActive && '#dddddd'};
`;

const ArrowRouter = ({
  dir,
  targetLink,
  isActive
}: {
  dir: RouterDirection;
  targetLink: string;
  isActive?: boolean;
}) => {
  return (
    <Container to={targetLink} isActive={isActive}>
      {dir === RouterDirection.PREVIOUS ? (
        <MdChevronLeft />
      ) : (
        <MdChevronRight />
      )}
    </Container>
  );
};

export default ArrowRouter;
