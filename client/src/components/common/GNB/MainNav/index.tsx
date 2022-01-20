import React from 'react';
import styled from 'styled-components';
import logo from 'src/assets/images/logo.png';
import NavItems from './NavItems';

const MainNavContainer = styled.div`
  width: 100%;
  height: 74px;
  justify-content: space-between;
  align-items: center;

  display: flex;
`;

const Logo = styled.img.attrs({
  src: logo
})`
  width: 80px;
  height: 34px;
`;

const MainNav = () => {
  return (
    <MainNavContainer>
      <Logo />
      <NavItems />
    </MainNavContainer>
  );
};

export default MainNav;
