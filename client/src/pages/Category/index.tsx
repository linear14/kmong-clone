import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Body, SideNav } from 'src/components/Category';
import { useRootCategoryState } from 'src/hooks';
import { RootState } from 'src/states';
import {
  getServicesByCategoryIdx,
  initSerivces
} from 'src/states/service/action';
import styled from 'styled-components';

const Container = styled.div`
  width: 1170px;
  min-width: 1170px;
  height: 100%;
  margin: 40px 0px;

  display: flex;
`;

const CategoryPage = () => {
  const dispatch = useDispatch();
  const { categoryIdx } = useParams();
  const [rootCategory, getHistoryFromRoot] = useRootCategoryState(
    Number(categoryIdx)
  );
  const serviceList = useSelector((state: RootState) => state.serviceCardList);

  useEffect(() => {
    dispatch(getServicesByCategoryIdx(Number(categoryIdx)));

    return () => {
      dispatch(initSerivces());
    };
  }, [categoryIdx, dispatch]);

  return (
    <Container>
      <SideNav rootCategory={rootCategory} />
      <Body
        isLoading={serviceList.state.loading}
        serviceList={serviceList.serviceCardList}
        history={getHistoryFromRoot(rootCategory)}
      />
    </Container>
  );
};

export default CategoryPage;
