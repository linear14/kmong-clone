import React, { useCallback } from 'react';
import styled from 'styled-components';
import starFilled from 'src/assets/images/star_filled.png';
import starHalf from 'src/assets/images/star_half.png';
import starEmpty from 'src/assets/images/star_empty.png';

const Container = styled.div`
  display: flex;
  align-items: center;

  img:not(:first-child) {
    margin-left: 2px;
  }
`;

const Star = styled.img`
  width: 18px;
  height: 18px;
`;

const Stars = ({ rate }: { rate: number }) => {
  const getImageList = useCallback(() => {
    const array: string[] = [];
    for (let i = 1; i <= 5; i++) {
      if (rate >= i - 0.2) {
        array.push(starFilled);
      } else if (rate >= i - 0.8 && rate < i - 0.2) {
        array.push(starHalf);
      } else {
        array.push(starEmpty);
      }
    }
    return array;
  }, [rate]);

  return (
    <Container>
      {getImageList().map((starImg, idx) => (
        <Star key={idx} src={starImg} />
      ))}
    </Container>
  );
};

export default Stars;
