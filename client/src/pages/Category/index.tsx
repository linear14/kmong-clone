import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Body, SideNav } from 'src/components/Category';
import { useRootCategoryState } from 'src/hooks';
import { RootState } from 'src/states';
import { getServicesByCategoryIdx } from 'src/states/service/action';
import styled from 'styled-components';

const Container = styled.div`
  width: 1170px;
  min-width: 1170px;
  height: 100%;
  margin: 40px 0px;

  display: flex;
`;

const CategoryPage = () => {
  const { categoryIdx } = useParams();

  const [rootCategory, setRootCategory] = useRootCategoryState(
    Number(categoryIdx)
  );
  const serviceList = useSelector(
    (state: RootState) => state.serviceCardList.serviceCardList
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getServicesByCategoryIdx(Number(categoryIdx)));
  }, [categoryIdx, dispatch]);

  return (
    <Container>
      <SideNav rootCategory={rootCategory} />
      <Body serviceList={serviceList} />
    </Container>
  );
};

export default CategoryPage;
