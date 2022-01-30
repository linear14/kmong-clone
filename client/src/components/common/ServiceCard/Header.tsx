import React from 'react';
import serviceDefaultThumbnail from 'src/assets/images/service_default.png';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
`;

const ThumbnailImage = styled.img`
  width: 100%;
  aspect-ratio: 4 / 3;
  border-radius: 4px;
  object-fit: cover;
`;

const Header = ({ thumbnailUrl }: { thumbnailUrl?: string }) => {
  return (
    <Container>
      <ThumbnailImage src={thumbnailUrl} />
    </Container>
  );
};

ThumbnailImage.defaultProps = {
  src: serviceDefaultThumbnail
};

export default Header;
