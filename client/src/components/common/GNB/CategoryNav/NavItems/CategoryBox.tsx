import React, { useState } from 'react';
import { flexBox } from 'src/util/style';
import styled from 'styled-components';
import { MdMenu, MdArrowDropDown } from 'react-icons/md';
import { FlexDirection } from 'src/enum/style';
import ActiveBar from './ActiveBar';

const Container = styled.div`
  ${flexBox({ direction: FlexDirection.COLUMN })};
  height: 100%;
  cursor: pointer;
`;

const InnerContainer = styled.div`
  ${flexBox}
  flex: 1;
  font-size: 16px;
  font-weight: bold;

  span {
    margin-left: 8px;
    margin-right: 4px;
    line-height: 24px;
  }
`;

const CategoryBox = () => {
  const [isActive, setActive] = useState(false);

  return (
    <Container>
      <InnerContainer>
        <MdMenu size={24} />
        <span>전체 카테고리</span>
        <MdArrowDropDown size={16} />
      </InnerContainer>
      <ActiveBar isActive={isActive} />
    </Container>
  );
};

export default CategoryBox;
