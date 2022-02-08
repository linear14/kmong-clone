import React, { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { History, RateBox, Thumbnail, TitleBox } from 'src/components/Service';
import ServiceItem from 'src/components/Service/ServiceItem';
import { serviceMock } from 'src/__mock__/service';
import { serviceItemMock } from 'src/__mock__/serviceItem';
import { userMock } from 'src/__mock__/user';
import styled from 'styled-components';

const Container = styled.div`
  width: 1170px;
  min-width: 1170px;
  padding: 24px 0px 48px;
  display: flex;
  position: relative;
`;

const BodyLeft = styled.div`
  flex: 1;
  position: relative;
`;

const BodyRight = styled.div`
  width: 436px;
  margin-left: 48px;
  position: relative;
`;

const Service = () => {
  const { serviceIdx } = useParams();
  const { user, service, serviceItem } = useMemo(() => {
    const service = serviceMock[Number(serviceIdx) - 1];
    return {
      user: userMock[service.userIdx],
      service,
      serviceItem: serviceItemMock[Number(serviceIdx) - 1]
    };
  }, [serviceIdx]);

  return (
    <Container>
      <BodyLeft>
        <History categoryIdx={service.categoryIdx} />
        <Thumbnail url={service.thumbnailUrl || undefined} />
        <RateBox rate={4.7} rateCnt={3} />
      </BodyLeft>
      <BodyRight>
        <TitleBox
          title={service.title}
          leastPrice={service.leastPrice}
          isPackage={!!service.isPackage}
        />
        <ServiceItem itemList={serviceItem} />
      </BodyRight>
    </Container>
  );
};

export default Service;
