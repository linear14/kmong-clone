import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useRootCategoryState } from 'src/hooks';

const Container = styled.div`
  width: 200px;
  background: #eeeeee;
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
          <div>{rootCategory.name}</div>
          {rootCategory.children?.map(item => (
            <div>{item.name}</div>
          ))}
        </>
      )}
    </Container>
  );
};

export default SideNav;
