import React from 'react';
import styled from 'styled-components';
import LikeButton from './LikeButton';

const Container = styled.div``;

const Header = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Title = styled.div`
  line-height: 30px;
  margin-top: 24px;
  font-size: 20px;
  font-weight: 500;
`;

const Price = styled.div`
  line-height: 27px;
  margin-top: 8px;
  text-align: end;
  font-size: 18px;
  font-weight: 500;
`;

const TitleBox = ({
  title,
  leastPrice,
  isPackage
}: {
  title: string;
  leastPrice: number;
  isPackage: boolean;
}) => {
  return (
    <Container>
      <Header>
        <LikeButton isLike={false} likeCount={30} />
      </Header>
      <Title>{title}드립니다.</Title>
      <Price>
        {leastPrice.toLocaleString('ko-KR')}원{isPackage && '~'}
      </Price>
    </Container>
  );
};

export default TitleBox;
