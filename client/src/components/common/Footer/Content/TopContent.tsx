import React from 'react';
import { ButtonAppearance, ButtonSize } from 'src/enum/style';
import styled from 'styled-components';
import { Button } from 'src/components/common/Button';

const Container = styled.div`
  width: 1170px;
  min-width: 1170px;
  margin-top: 32px;
  margin-bottom: 24px;

  display: flex;
  justify-content: space-between;
`;

const FlexStart = styled.div`
  width: 388px;
`;

const FlexEnd = styled.div`
  display: flex;
`;

const Text = styled.div<{
  fontSize?: number;
  fontColor?: string;
  isBold?: boolean;
}>`
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}px` : '14px')};
  color: ${({ fontColor }) => fontColor || '#666666'};
  font-weight: ${({ isBold }) => (isBold ? 'bold' : 'normal')};

  & + & {
    margin-top: 12px;
  }
`;

const ContactButton = styled(Button).attrs({
  appearance: ButtonAppearance.OUTLINE
})`
  display: inline-block;
  margin-top: 24px;
  &::after {
    content: '이메일 문의';
  }
`;

const LinkBox = styled.div`
  width: 140px;

  & + & {
    margin-left: 30px;
  }

  div:first-child {
    font-size: 15px;
    color: '#333';
    font-weight: bold;
  }

  div:not(:first-child) {
    cursor: pointer;
  }
`;

// prettier-ignore
const TopContent = () => {
  return (
    <Container>
      <FlexStart>
        <Text fontSize={18} fontColor={'#333'} isBold>연락처 010-8636-5526</Text>
        <Text>10:00~01:00 (점심시간 12:00~13:00)</Text>
        <Text>연중무휴</Text>
        <ContactButton />
      </FlexStart>
      <FlexEnd>
        <LinkBox>
          <Text>디몽</Text>
          <Text>디몽 메인</Text>
          <Text>엔터프라이즈</Text>
        </LinkBox>
        <LinkBox>
          <Text>작업자 정보</Text>
          <Text>Github</Text>
          <Text>이력서</Text>
          <Text>포트폴리오</Text>
          <Text>Blog</Text>
          <Text>YouTube</Text>
        </LinkBox>
        <LinkBox>
          <Text>관련 사이트</Text>
          <Text>Repository</Text>
          <Text>Dmong 작업기록</Text>
        </LinkBox>
      </FlexEnd>
    </Container>
  );
};

export default TopContent;
