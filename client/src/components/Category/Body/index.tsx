import React from 'react';
import styled from 'styled-components';
import ServiceList from './ServiceList';
import { IServiceCard } from 'src/types/service';
import { ICategoryWithUrl } from 'src/types/category';
import { Link } from 'react-router-dom';

const Container = styled.div`
  flex: 1;
  margin-left: 24px;
`;

const Body = ({
  serviceList,
  history
}: {
  serviceList: IServiceCard[];
  history: ICategoryWithUrl[];
}) => {
  return (
    <Container>
      {history.map((item, idx) => (
        <>
          <Link to={item.url}>{item.name}</Link>
          {idx !== history.length - 1 && '>'}
        </>
      ))}
      <ServiceList serviceList={serviceList} />
    </Container>
  );
};

export default Body;
