import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useSearchParams } from 'react-router-dom';
import { Body, SideNav } from 'src/components/Category';
import { useRootCategoryState } from 'src/hooks';
import { RootState } from 'src/states';
import {
  getServicesByCategoryIdx,
  getTotalServiceCount,
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
  const [searchParams] = useSearchParams();

  const [rootCategory, getHistoryFromRoot] = useRootCategoryState(
    Number(categoryIdx)
  );
  const serviceList = useSelector((state: RootState) => state.serviceCardList);
  const totalServiceCount = useSelector(
    (state: RootState) => state.totalServiceCount
  );

  useEffect(() => {
    dispatch(
      getServicesByCategoryIdx(
        Number(categoryIdx),
        Number(searchParams.get('page')) || 1
      )
    );
    dispatch(getTotalServiceCount(Number(categoryIdx)));

    return () => {
      dispatch(initSerivces());
    };
  }, [categoryIdx, dispatch, searchParams]);

  return (
    <Container>
      <SideNav rootCategory={rootCategory} />
      <Body
        isLoading={serviceList.state.loading || totalServiceCount.state.loading}
        serviceList={serviceList.serviceCardList}
        totalServiceCount={totalServiceCount.count}
        history={getHistoryFromRoot(rootCategory)}
      />
    </Container>
  );
};

export default CategoryPage;
