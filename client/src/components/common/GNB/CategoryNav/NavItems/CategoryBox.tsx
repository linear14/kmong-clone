import React from 'react';
import { flexBox } from 'src/util/style';
import styled from 'styled-components';
import { MdMenu, MdArrowDropDown } from 'react-icons/md';

const Container = styled.div`
  ${flexBox}
  height: 100%;

  font-size: 16px;
  font-weight: bold;
  cursor: pointer;

  span {
    margin-left: 8px;
    margin-right: 4px;
    line-height: 24px;
  }
`;

const CategoryBox = () => {
  return (
    <Container>
      <MdMenu size={24} />
      <span>전체 카테고리</span>
      <MdArrowDropDown size={16} />
    </Container>
  );
};

export default CategoryBox;
