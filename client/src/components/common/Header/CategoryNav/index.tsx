import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import NavItems from './NavItems';

const CategoryNavContainer = styled.div`
  width: 100%;
  height: 100%;
  flex: 1;
  justify-content: space-between;
  position: relative;

  display: flex;
  align-items: center;
`;

const RequestLink = styled(Link)`
  font-size: 14px;

  &:hover,
  &:active {
    text-decoration: underline;
  }
`;

const CategoryNav = () => {
  return (
    <CategoryNavContainer>
      <NavItems />
      <RequestLink to={'/'}>
        원하는 서비스를 못 찾겠다면, <b>프로젝트 의뢰</b>하세요! &gt;
      </RequestLink>
    </CategoryNavContainer>
  );
};

export default CategoryNav;
