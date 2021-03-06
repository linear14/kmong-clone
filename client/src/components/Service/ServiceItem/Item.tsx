import React, { useCallback, useMemo } from 'react';
import { Button } from 'src/components/common/Button';
import { ButtonAppearance, ButtonSize } from 'src/enum/style';
import styled, { css } from 'styled-components';
import { IServiceItem } from '.';
import { MdCalendarToday, MdOutlineBuild } from 'react-icons/md';

const Container = styled.div<{ current: number; active: number }>`
  border: ${({ current, active }) =>
    current === active ? '1px solid #999999' : '1px solid #eeeeee'};
  border-bottom: ${({ current, active }) =>
    current === active - 1 ? 'none' : active === 1 && current === 2 && 'none'};
  border-top: ${({ current, active }) =>
    current === active + 1 ? 'none' : active === 3 && current === 2 && 'none'};
  cursor: pointer;
`;

const FixedContainer = styled.div`
  display: flex;
  padding: 20px 24px;
`;

const ExpandedContainer = styled.div<{ isActive: boolean }>`
  max-height: ${({ isActive }) => isActive ? '500px' : '0px'};
  overflow-y: hidden;
  padding: 0px 24px;

  transition: max-height 0.6s;
`;

const Price = styled.div`
  font-size: 18px;
  font-weight: bold;
  line-height: 20px;
`;

const Type = styled.div`
  margin-left: 8px;
  font-size: 16px;
  font-weight: 500;
  color: #bbbbbb;
  line-height: 20px;
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  background: #eeeeee;
`

const Title = styled.div`
  font-weight: bold;
  font-size: 15px;
  margin-top: 16px;
`;

const Description = styled.div`
  margin-top: 8px;
  font-size: 15px;
  line-height: 1.5;
`;

const FlexContainer = styled.div`
  margin-top: 20px;
  display: flex;
  color: #444444;

  svg {
    margin-right: 4px;
  }
`;

const WorkingDay = styled.div`
  display: flex;
  font-size: 15px;
  font-weight: 500;
`;

const EditCnt = styled.div`
  margin-left: 32px;
  display: flex;
  font-size: 15px;
  font-weight: 500;
`;

const Item = ({
  serviceItem,
  activeItem,
  setActiveItem
}: {
  serviceItem: IServiceItem;
  activeItem: number;
  setActiveItem: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const isActive = useMemo(
    () => activeItem === serviceItem.type,
    [activeItem, serviceItem]
  );

  return (
    <Container current={serviceItem.type} active={activeItem}>
      <FixedContainer
        onClick={() => !isActive && setActiveItem(serviceItem.type)}
      >
        <Price>{serviceItem.price.toLocaleString('ko-KR')}???</Price>
        <Type>
          {serviceItem.type === 1
            ? 'STANDARD'
            : serviceItem.type === 2
            ? 'DELUXE'
            : 'PREMIUM'}
        </Type>
      </FixedContainer>
      <ExpandedContainer isActive={isActive}>
        <Line/>
        <Title>{serviceItem.title}</Title>
        <Description>{serviceItem.description}</Description>
        <FlexContainer>
          <WorkingDay>
            <MdCalendarToday />
            ?????????: {serviceItem.workingDay}???
          </WorkingDay>
          <EditCnt>
            <MdOutlineBuild />
            ?????? ??????: {serviceItem.editCnt}???
          </EditCnt>
        </FlexContainer>
        <Button
          style={{ marginTop: 20, marginBottom: 20 }}
          appearance={ButtonAppearance.YELLOW}
          size={ButtonSize.FULL}
        >
          ????????????
        </Button>
      </ExpandedContainer>
    </Container>
  );
};

export default Item;
