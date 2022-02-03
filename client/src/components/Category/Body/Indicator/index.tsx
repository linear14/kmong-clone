import React, { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const InnerContainer = styled.div`
  display: flex;
`;

const RouterBox = styled.div`
  min-width: 36px;
  height: 36px;
  padding: 0px 8px;
  border-radius: 4px;
  text-align: center;
  vertical-align: middle;
  line-height: 36px;
  font-size: 14px;
  font-weight: 500;
  color: #71727a;

  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: #f3f3f3;
  }
`;

const ArrowRouter = styled(RouterBox)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
`;

const Page = styled(RouterBox)``;

const Ellipsis = styled.div`
  width: 36px;
  height: 36px;
  line-height: 36px;
  text-align: center;
  vertical-align: middle;
  padding: 0px 8px;
  font-size: 14px;
  font-weight: 500;
  color: #9a9ba7;

  &::after {
    content: '…';
  }
`;

const getNearPages = (currentPage: number | undefined, lastPage: number) => {
  const pages = [];
  if (currentPage && currentPage <= lastPage) {
    if (currentPage < 3) {
      for (let i = 1; i <= 5; i++) {
        if (i <= lastPage) {
          pages.push(i);
        }
      }
    } else if (currentPage > lastPage - 2) {
      for (let i = lastPage - 4; i <= lastPage; i++) {
        if (i > 0) {
          pages.push(i);
        }
      }
    } else {
      for (let i = currentPage - 2; i <= currentPage + 2; i++) {
        if (i > 0 && i <= lastPage) {
          pages.push(i);
        }
      }
    }
  }
  if (pages[0] === 2) {
    pages.unshift(1);
  }
  if (pages[pages.length - 1] === lastPage - 1) {
    pages.push(lastPage);
  }
  return pages;
};

const Indicator = ({ totalCount }: { totalCount: number }) => {
  const [searchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState<number>();
  const lastPage = useMemo(
    () => Math.floor((totalCount - 1) / 20) + 1,
    [totalCount]
  );
  const nearPages = useMemo(
    () => getNearPages(currentPage, lastPage),
    [lastPage, currentPage]
  );

  useEffect(() => {
    const pageNum = searchParams.get('page');
    setCurrentPage(Number(pageNum) || 1);
  }, [searchParams]);

  return (
    <Container>
      <InnerContainer>
        <ArrowRouter>
          <MdChevronLeft />
        </ArrowRouter>
        {nearPages[0] !== 1 && (
          <>
            <Page>{1}</Page>
            <Ellipsis />
          </>
        )}
        {nearPages.map(pageNum => (
          <Page>{pageNum}</Page>
        ))}
        {nearPages[nearPages.length - 1] !== lastPage && (
          <>
            <Ellipsis />
            <Page>{lastPage}</Page>
          </>
        )}
        <ArrowRouter>
          <MdChevronRight />
        </ArrowRouter>
      </InnerContainer>
    </Container>
  );
};

export default Indicator;
