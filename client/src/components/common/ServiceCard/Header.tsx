import React from 'react';
import serviceDefaultThumbnail from 'src/assets/images/service_default.png';
import styled, { css } from 'styled-components';

const Container = styled.div`
  position: relative;
  overflow: hidden;
`;

const ThumbnailImage = styled.img<{ isHover: boolean }>`
  width: 100%;
  aspect-ratio: 4 / 3;
  border-radius: 4px;
  object-fit: cover;

  ${({ isHover }) =>
    isHover &&
    css`
      transform: scale(1.15);
    `}

  transition: 0.25s;
`;

const Header = ({
  thumbnailUrl,
  isHover
}: {
  thumbnailUrl?: string;
  isHover: boolean;
}) => {
  return (
    <Container>
      <ThumbnailImage src={thumbnailUrl} isHover={isHover} />
    </Container>
  );
};

ThumbnailImage.defaultProps = {
  src: serviceDefaultThumbnail
};

export default Header;
