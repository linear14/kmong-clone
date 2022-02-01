import React, { useCallback } from 'react';
import ServiceCard from 'src/components/common/ServiceCard';
import ServiceCardSkeleton from 'src/components/common/ServiceCard/Skeleton';
import { IServiceCard } from 'src/types/service';
import styled from 'styled-components';

const Container = styled.div`
  margin: 24px -12px 0px;

  display: flex;
  flex-wrap: wrap;
`;

const ServiceList = ({
  isLoading,
  serviceList
}: {
  isLoading: boolean;
  serviceList: IServiceCard[];
}) => {
  return (
    <Container>
      {isLoading
        ? Array.from({ length: 8 }).map((_, idx) => (
            <ServiceCardSkeleton key={idx} />
          ))
        : serviceList.map(item => (
            <ServiceCard key={item.serviceIdx} service={item} />
          ))}
    </Container>
  );
};

export default ServiceList;
