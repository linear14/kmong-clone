import React from 'react';
import { Link } from 'react-router-dom';
import { flexBox } from 'src/util/style';
import styled from 'styled-components';

const EnterpriseLink = styled(Link)`
  font-size: 16px;
  &::after {
    content: '엔터프라이즈';
  }
`;

const Container = styled.div`
  ${flexBox}
  margin-left: 40px;
  height: 100%;
`;

const EnterpriseBox = () => {
  return (
    <Container>
      <EnterpriseLink to='/' />
    </Container>
  );
};

export default EnterpriseBox;
