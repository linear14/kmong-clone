import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 1170px;
  min-width: 1170px;
  margin: 24px 0px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & + & {
    margin-top: 24px;
  }
`;

const Text = styled.div<{
  fontSize?: number;
  fontColor?: string;
  fontWeight?: number;
}>`
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}px` : '14px')};
  color: ${({ fontColor }) => fontColor || '#666666'};
  font-weight: ${({ fontWeight }) => fontWeight || 400};

  & + & {
    margin-top: 12px;
  }
`;

const BottomContent = () => {
  return (
    <Container>
      <TextBox>
        <Text fontWeight={500}>
          (주)디몽 | 경기도 수원시 팔달구 | 개발담당자 : 이동현 | 생년월일 :
          95.01.14
        </Text>
        <Text fontWeight={500}>
          프로젝트 시작일 : 2021.12.22 | 문의 : linear14@naver.com
        </Text>
      </TextBox>
      <TextBox>
        <Text fontSize={12}>
          (주)디몽은 크몽(www.kmong.com) 웹 페이지 클론 프로젝트입니다.
        </Text>
        <Text fontSize={12}>
          외부 강의의 도움을 받아 구현한 것이 아님을 밝힙니다. 또한, 금전적인
          이익 역시 없습니다. 멋진 사이트 만들어 준 크몽팀에게 감사의 말씀
          전합니다!
        </Text>
        <Text fontColor='#333' fontWeight={500}>
          Copyright 2022 크몽의 저작권 정책에 따릅니다.
        </Text>
      </TextBox>
    </Container>
  );
};

export default BottomContent;
