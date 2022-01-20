import React, { useState } from 'react';
import { categoryMock } from 'src/mock/category';
import styled from 'styled-components';
import { MdKeyboardArrowRight } from 'react-icons/md';

const Container = styled.div<{ rootIdx: number | null }>`
  width: ${({ rootIdx }) => (rootIdx === null ? '188px' : '878px')};
  height: 480px;
  padding: 8px 0px;
  background: white;
  border-radius: 4px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  position: absolute;
  left: 0px;
  top: 45px;
  z-index: 5;
  cursor: default;

  display: flex;
`;

const InnerContainer = styled.div`
  width: 188px;
  border-radius: 4px;
`;

const CategoryItem = styled.div<{ isRoot: boolean; isBold?: boolean }>`
  font-size: ${({ isRoot }) => (isRoot ? '15px' : '14px')};
  font-weight: ${({ isBold }) => (isBold ? 'bold' : 'normal')};
  padding: ${({ isRoot }) => (isRoot ? '12px 16px' : '8px 16px')};
  padding-right: 8px;
  line-height: 20px;
  cursor: pointer;

  display: flex;
  justify-content: space-between;

  &:hover {
    background: #f2f3f7;
  }
`;

const NavDropdown = () => {
  const [data, setData] = useState(categoryMock);
  const [rootIdx, setRootIdx] = useState<number | null>(null);
  const [rootHoverIdx, setRootHoverIdx] = useState<number | null>(null);

  return (
    <Container rootIdx={rootIdx}>
      <InnerContainer>
        {data.map((item, idx) => (
          <CategoryItem
            key={item.id}
            isRoot={true}
            isBold={idx === rootIdx && idx !== rootHoverIdx}
            onMouseEnter={() => {
              setRootIdx(idx);
              setRootHoverIdx(idx);
            }}
            onMouseLeave={() => setRootHoverIdx(null)}
          >
            {item.name}
            {idx === rootHoverIdx && <MdKeyboardArrowRight size={20} />}
          </CategoryItem>
        ))}
      </InnerContainer>
      {rootIdx !== null && (
        <InnerContainer>
          {data[rootIdx].children.map(item => (
            <CategoryItem key={item.id} isRoot={false}>
              {item.name}
            </CategoryItem>
          ))}
        </InnerContainer>
      )}
    </Container>
  );
};

export default NavDropdown;