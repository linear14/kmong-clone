import React from 'react';
import { Link } from 'react-router-dom';
import { useRootCategoryState } from 'src/hooks';
import styled from 'styled-components';

const Container = styled.div`
  font-size: 15px;
  font-weight: 500;
  color: #333333;
  display: flex;
`;

const HistoryLink = styled(Link)`
  margin: 0px 4px;
  color: #333333;

  &:hover,
  &:active {
    color: #333333;
    text-decoration: underline;
  }
`;

const History = ({ categoryIdx }: { categoryIdx: number }) => {
  const [rootCategory, getHistoryFromRoot] = useRootCategoryState(categoryIdx);

  return (
    <Container>
      {getHistoryFromRoot(rootCategory).map((item, idx, array) => {
        return (
          idx !== 0 && (
            <div key={idx}>
              <HistoryLink to={item.url}>{item.name}</HistoryLink>
              {idx !== array.length - 1 && '>'}
            </div>
          )
        );
      })}
    </Container>
  );
};

export default History;
