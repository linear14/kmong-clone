import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  width: 25%;
  height: 302px;
  padding: 0px 12px;
  margin-bottom: 48px;
  cursor: pointer;

  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  width: 100%;
  aspect-ratio: 4 / 3;
  border-radius: 4px;
  background-color: #f2f2f8;
`;

const BodyContainer = styled.div`
  flex: 1;
  padding-top: 16px;
  display: flex;
  flex-direction: column;

  & > div:first-child {
    margin-bottom: 12px;
  }

  & > div:nth-child(2) {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
`;

const Box = styled.div<{ width?: string; height?: string }>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  background-color: #f2f2f8;
  border-radius: 4px;

  margin-top: 4px;
`;

Box.defaultProps = {
  width: '100%',
  height: '16px'
};

const Skeleton = () => {
  return (
    <Container>
      <Header />
      <BodyContainer>
        <div>
          <Box width={'60px'} height={'12px'} />
          <Box />
          <Box width={'100px'} />
        </div>
        <div>
          <Box width={'140px'} height={'20px'} />
          <Box width={'80px'} height={'14px'} />
        </div>
      </BodyContainer>
    </Container>
  );
};

export default Skeleton;
