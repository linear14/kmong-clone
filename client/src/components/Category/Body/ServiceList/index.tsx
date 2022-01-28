import React from 'react';
import ServiceCard from 'src/components/common/ServiceCard';
import styled from 'styled-components';

const Container = styled.div`
  margin: 0px -12px;

  display: flex;
  flex-wrap: wrap;
`;

const ServiceList = () => {
  const sampleService = {
    serviceIdx: 1,
    nickname: '동현',
    level: 2,
    title: '비전공 프론트엔드 개발자의 공부 방법을 공유해 드립니다.',
    isLike: true,
    price: 30000,
    itemCnt: 2,
    rate: 4.8,
    rateCnt: 15
  };

  return (
    <Container>
      <ServiceCard service={sampleService} />
      <ServiceCard service={sampleService} />
      <ServiceCard service={sampleService} />
      <ServiceCard service={sampleService} />
      <ServiceCard service={sampleService} />
    </Container>
  );
};

export default ServiceList;
