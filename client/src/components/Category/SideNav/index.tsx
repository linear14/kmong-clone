import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 200px;
  background: #eeeeee;
`;

const SideNav = () => {
  return (
    <Container>
      <div>카테고리 제목</div>
      <div>소분류</div>
      <div>소분류</div>
      <div>소분류</div>
      <div>소분류</div>
      <div>소분류</div>
      <div>소분류</div>
      <div>소분류</div>
      <div>소분류</div>
    </Container>
  );
};

export default SideNav;
