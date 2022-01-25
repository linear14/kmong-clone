import React from 'react';
import { Button } from 'src/components/common/Button';
import { ButtonAppearance, ButtonSize } from 'src/enum/style';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginButton = styled(Button)`
  margin-right: 16px;

  &::after {
    content: '로그인';
  }
`;

const SignUpButton = styled(Button).attrs({
  appearance: ButtonAppearance.BLUE,
  size: ButtonSize.LARGE
})`
  &::after {
    content: '무료 회원가입';
  }
`;

const NavItems = () => {
  return (
    <Container>
      <LoginButton />
      <SignUpButton />
    </Container>
  );
};

export default NavItems;
