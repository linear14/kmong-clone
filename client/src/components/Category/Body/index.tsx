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

const HistoryContainer = styled.div`
  display: flex;
  font-size: 13px;
  color: #71727a;
`;

const HistoryLink = styled(Link)`
  font-size: 13px;
  color: #71727a;
  margin: 0px 4px;

  &:hover,
  &:active {
    color: #71727a;
    text-decoration: underline;
  }
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
      <HistoryContainer>
        {history.map((item, idx) => (
          <div key={idx}>
            <HistoryLink to={item.url}>{item.name}</HistoryLink>
            {idx !== history.length - 1 && '>'}
          </div>
        ))}
      </HistoryContainer>
      <ServiceList serviceList={serviceList} />
    </Container>
  );
};

export default Body;
