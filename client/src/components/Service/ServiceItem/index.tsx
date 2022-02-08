import React, { useState } from 'react';
import styled from 'styled-components';
import Item from './Item';

export interface IServiceItem {
  serviceItemIdx: number;
  serviceIdx: number;
  title: string;
  description: string;
  price: number;
  workingDay: number;
  editCnt: number;
  type: number;
}

const Container = styled.div`
  width: 100%;
  margin-top: 20px;
`;

const ServiceItem = ({ itemList }: { itemList: IServiceItem[] }) => {
  const [activeItem, setActiveItem] = useState<number>(
    itemList.length === 1 ? 1 : 2
  );

  return (
    <Container>
      {itemList.map(item => (
        <Item
          key={item.serviceItemIdx}
          serviceItem={item}
          activeItem={activeItem}
          setActiveItem={setActiveItem}
        />
      ))}
    </Container>
  );
};

export default ServiceItem;
