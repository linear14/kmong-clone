import React from 'react';
import styled from 'styled-components';
import { Button } from 'src/components/common/Button';
import heartFilled from 'src/assets/images/heart_filled.png';
import heartEmpty from 'src/assets/images/heart_empty.png';

const Container = styled(Button)`
  display: flex;

  div {
    margin-left: 8px;
    font-size: 14px;
  }
`;

const Heart = styled.img`
  width: 14px;
  height: 14px;
`;

const LikeButton = ({
  isLike,
  likeCount
}: {
  isLike: boolean;
  likeCount: number;
}) => {
  return (
    <Container>
      <Heart src={isLike ? heartFilled : heartEmpty} />
      <div>찜하기 | {likeCount || 0}</div>
    </Container>
  );
};

export default LikeButton;
