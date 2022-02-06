import React from 'react';
import styled from 'styled-components';
import serviceDefaultThumbnail from 'src/assets/images/service_default.png';

const ThumbnailImage = styled.img`
  width: 100%;
  min-height: 488px;
  margin-top: 24px;
  border: 1px solid #eeeeee;
`;

ThumbnailImage.defaultProps = {
  src: serviceDefaultThumbnail
};

const Thumbnail = ({ url }: { url?: string }) => {
  return <ThumbnailImage src={url} />;
};

export default Thumbnail;
