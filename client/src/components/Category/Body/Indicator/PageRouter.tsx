import React from 'react';
import { RouterEllipsisDirection } from 'src/enum/style';
import styled from 'styled-components';
import { RouterBox } from './style';

const Router = styled(RouterBox)<{ isActive?: boolean }>`
  color: ${({ isActive }) => isActive && '#000000'};
  font-weight: ${({ isActive }) => isActive && '500'};
`;

const Ellipsis = styled.div`
  width: 36px;
  height: 36px;
  line-height: 36px;
  text-align: center;
  vertical-align: middle;
  padding: 0px 8px;
  font-size: 14px;
  font-weight: 500;
  color: #9a9ba7;

  &::after {
    content: '…';
  }
`;

const PageRouter = ({
  targetLink,
  pageNum,
  isActive,
  ellipsis
}: {
  targetLink: string;
  pageNum: number;
  isActive?: boolean;
  ellipsis?: RouterEllipsisDirection;
}) => {
  return (
    <>
      {ellipsis === RouterEllipsisDirection.LEFT && <Ellipsis />}
      <Router to={targetLink} isActive={isActive}>
        {pageNum}
      </Router>
      {ellipsis === RouterEllipsisDirection.RIGHT && <Ellipsis />}
    </>
  );
};

export default PageRouter;
