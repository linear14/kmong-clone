import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getServicesByCategoryIdx } from 'src/states/service/action';
import { RootState } from 'src/states';
import styled from 'styled-components';
import ServiceList from './ServiceList';

const Container = styled.div`
  flex: 1;
  margin-left: 24px;
`;

const Body = () => {
  const { categoryIdx } = useParams();
  const serviceList = useSelector(
    (state: RootState) => state.serviceCardList.serviceCardList
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getServicesByCategoryIdx(Number(categoryIdx)));
  }, [categoryIdx, dispatch]);

  return (
    <Container>
      <ServiceList serviceList={serviceList} />
    </Container>
  );
};

export default Body;
