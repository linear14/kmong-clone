import React from 'react';
import { IServiceCard } from 'src/types/service';
import styled, { css } from 'styled-components';
import UserInfo from './UserInfo';
import Rate from './Rate';

const BodyContainer = styled.div`
  flex: 1;
  padding-top: 16px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  height: 36px;
  line-height: 18px;
  margin-top: 8px;
  margin-bottom: 16px;
  font-size: 14px;
  font-weight: 500;
  color: #0a0b0e;
  word-break: break-all;
  white-space: normal;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const Price = styled.div<{ isPackage: boolean }>`
  text-align: end;
  font-size: 17px;
  font-weight: bold;
  line-height: 1.25;
  color: #0f0f0f;

  &::after {
    ${({ isPackage }) =>
      isPackage &&
      css`
        content: '~';
      `}
  }
`;

const Body = ({
  serviceBody
}: {
  serviceBody: Omit<IServiceCard, 'serviceIdx' | 'userIdx' | 'thumbnailUrl'>;
}) => {
  const { nickname, level, title, leastPrice, isPackage, rate, rateCnt } =
    serviceBody;

  return (
    <BodyContainer>
      <div>
        <UserInfo level={level} nickname={nickname} />
        <Title>{title}드립니다.</Title>
      </div>
      <div>
        <Price isPackage={isPackage}>
          {leastPrice.toLocaleString('ko-KR')}원
        </Price>
        <Rate rate={Number(rate)} rateCnt={rateCnt} />
      </div>
    </BodyContainer>
  );
};

export default Body;
