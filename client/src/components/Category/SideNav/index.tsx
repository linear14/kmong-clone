import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useCategoryRelationState } from 'src/hooks';

const Container = styled.div`
  width: 200px;
  background: #eeeeee;
`;

const SideNav = () => {
  const { categoryIdx } = useParams();
  const [parentCategory, setParentCategory] = useCategoryRelationState(
    Number(categoryIdx)
  );

  return (
    <Container>
      {parentCategory && (
        <>
          <div>{parentCategory.name}</div>
          {parentCategory.children?.map(item => (
            <div>{item.name}</div>
          ))}
        </>
      )}
    </Container>
  );
};

export default SideNav;
