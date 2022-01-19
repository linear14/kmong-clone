import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FlexDirection } from 'src/enum/style';
import { flexBox } from 'src/util/style';
import styled from 'styled-components';

const Container = styled.div`
  ${flexBox({ direction: FlexDirection.COLUMN })};
  margin-left: 40px;
  height: 100%;
  cursor: pointer;
`;

const InnerContainer = styled.div`
  ${flexBox}
  flex: 1;
`;

const EnterpriseLink = styled(Link)`
  font-size: 16px;

  &::after {
    content: '엔터프라이즈';
  }
`;

const EnterpriseBox = () => {

  return (
    <Container>
      <InnerContainer>
        <EnterpriseLink to='/' />
      </InnerContainer>
    </Container>
  );
};

export default EnterpriseBox;
