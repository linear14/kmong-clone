import React from 'react';
import styled from 'styled-components';
import logo from 'src/assets/images/logo.png';
import NavItems from './NavItems';
import { Link } from 'react-router-dom';

const MainNavContainer = styled.div`
  width: 100%;
  height: 74px;
  justify-content: space-between;
  align-items: center;

  display: flex;
`;

const Logo = styled(Link)`
  width: 80px;
  height: 34px;
  cursor: pointer;

  background: url('${logo}');
  background-size: 80px 34px;
`;

const MainNav = () => {
  return (
    <MainNavContainer>
      <Logo to={'/'} />
      <NavItems />
    </MainNavContainer>
  );
};

export default MainNav;
