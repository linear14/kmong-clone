import React from 'react';
import styled, { css } from 'styled-components';

const Container = styled.div`
  display: flex;
`;

const LevelBox = styled.div<{ level: number }>``;
const NicknameText = styled.div<{ nickname: string }>`
  font-size: 12px;
  color: #71727a;

  &::after {
    ${({ nickname }) =>
      nickname &&
      css`
        content: '${nickname}';
      `}
  }
`;

const UserInfo = ({ level, nickname }: { level: number; nickname: string }) => {
  return (
    <Container>
      <LevelBox level={level} />
      <NicknameText nickname={nickname} />
    </Container>
  );
};

export default UserInfo;
