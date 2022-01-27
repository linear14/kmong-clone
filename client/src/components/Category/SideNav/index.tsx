import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useRootCategoryState } from 'src/hooks';
import { Link } from 'react-router-dom';

const Container = styled.div`
  width: 200px;
  position: relative;
`;

const RootTitle = styled.div`
  width: 100%;
  padding-bottom: 16px;
  margin-bottom: 16px;
  font-size: 22px;
  font-weight: 500;
  border-bottom: 2px solid #fcd200;
`;

const Category = styled(Link)<{ $isActive: boolean }>`
  width: 100%;
  height: 32px;
  line-height: 32px;
  display: block;
  font-size: 14px;
  font-weight: ${({ $isActive }) => ($isActive ? 'bold' : 500)};
  color: ${({ $isActive }) => ($isActive ? 'black' : '#555969')};
  cursor: pointer;

  &:hover {
    color: #212224;
    font-weight: bold;
  }
`;

const SideNav = () => {
  const { categoryIdx } = useParams();
  const [rootCategory, setRootCategory] = useRootCategoryState(
    Number(categoryIdx)
  );

  return (
    <Container>
      {rootCategory && (
        <>
          <RootTitle>{rootCategory.name}</RootTitle>
          {rootCategory.children?.map(item => (
            <Category
              key={item.id}
              $isActive={item.id === Number(categoryIdx)}
              to={`/category/${item.id}`}
            >
              {item.name}
            </Category>
          ))}
        </>
      )}
    </Container>
  );
};

export default SideNav;
