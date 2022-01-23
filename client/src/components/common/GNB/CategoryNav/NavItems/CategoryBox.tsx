import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategories } from 'src/states/category/action';
import styled from 'styled-components';
import { MdMenu, MdArrowDropDown } from 'react-icons/md';
import ActiveBar from './ActiveBar';
import NavDropdown from './NavDropdown';
import { RootState } from 'src/states';

const Container = styled.div`
  height: 100%;
  cursor: pointer;
  position: relative;

  display: flex;
  flex-direction: column;
`;

const InnerContainer = styled.div`
  flex: 1;
  font-size: 16px;
  font-weight: bold;

  display: flex;
  align-items: center;

  span {
    margin-left: 8px;
    margin-right: 4px;
    line-height: 24px;
  }
`;

const CategoryBox = () => {
  const [isActive, setActive] = useState(false);
  const categoryList = useSelector(
    (state: RootState) => state.categoryList.categories
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCategories());
  }, [dispatch]);

  return (
    <Container
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
    >
      <InnerContainer>
        <MdMenu size={24} />
        <span>전체 카테고리</span>
        <MdArrowDropDown size={16} />
      </InnerContainer>
      <ActiveBar isActive={isActive} />
      {isActive && categoryList.length > 0 && (
        <NavDropdown categoryList={categoryList} />
      )}
    </Container>
  );
};

export default CategoryBox;
