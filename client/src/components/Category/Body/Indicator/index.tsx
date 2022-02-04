import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import { getNearPages } from './util';
import ArrowRouter from './ArrowRouter';
import PageRouter from './PageRouter';
import { RouterDirection, RouterEllipsisDirection } from 'src/enum/style';

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 16px 0px;
`;

const InnerContainer = styled.div`
  display: flex;
`;

const Indicator = ({ totalCount }: { totalCount: number }) => {
  const { categoryIdx } = useParams();
  const [searchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const lastPage = useMemo(
    () => Math.floor((totalCount - 1) / 20) + 1,
    [totalCount]
  );
  const nearPages = useMemo(
    () => getNearPages(currentPage, lastPage),
    [lastPage, currentPage]
  );

  const getLink = useCallback(
    (targetPage: number) => {
      return `/category/${categoryIdx}?page=${targetPage}`;
    },
    [categoryIdx]
  );

  useEffect(() => {
    const pageNum = searchParams.get('page');
    setCurrentPage(Number(pageNum) || 1);
  }, [searchParams]);

  return (
    <Container>
      <InnerContainer>
        <ArrowRouter
          dir={RouterDirection.PREVIOUS}
          targetLink={getLink(currentPage - 1)}
          isActive={currentPage > 1}
        />
        {nearPages[0] !== 1 && (
          <PageRouter
            targetLink={getLink(1)}
            pageNum={1}
            ellipsis={RouterEllipsisDirection.RIGHT}
          />
        )}
        {nearPages.map(pageNum => (
          <PageRouter
            targetLink={getLink(pageNum)}
            pageNum={pageNum}
            isActive={pageNum === currentPage}
          />
        ))}
        {nearPages[nearPages.length - 1] !== lastPage && (
          <PageRouter
            targetLink={getLink(lastPage)}
            pageNum={lastPage}
            ellipsis={RouterEllipsisDirection.LEFT}
          />
        )}
        <ArrowRouter
          dir={RouterDirection.NEXT}
          targetLink={getLink(currentPage + 1)}
          isActive={currentPage < lastPage}
        />
      </InnerContainer>
    </Container>
  );
};

export default Indicator;
