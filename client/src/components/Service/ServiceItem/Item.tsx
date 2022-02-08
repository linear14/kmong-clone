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
  padding: 24px;
`;

const ExpandedContainer = styled.div<{ isActive: boolean }>`
  height: ${({ isActive }) => !isActive && '0px'};
  overflow-y: hidden;
  padding: ${({ isActive }) => (isActive ? '16px 24px' : '0px')};
  border-top: ${({ isActive }) => isActive && '1px solid #eeeeee'};
`;

const Price = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

const Type = styled.div`
  margin-left: 8px;
  font-size: 16px;
  font-weight: 500;
  color: #bbbbbb;
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 15px;
`;

const Description = styled.div`
  margin-top: 8px;
  font-size: 15px;
  line-height: 1.5;
`;

const FlexContainer = styled.div`
  margin-top: 16px;
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
        <Price>{serviceItem.price.toLocaleString('ko-KR')}원</Price>
        <Type>
          {serviceItem.type === 1
            ? 'STANDARD'
            : serviceItem.type === 2
            ? 'DELUXE'
            : 'PREMIUM'}
        </Type>
      </FixedContainer>
      <ExpandedContainer isActive={isActive}>
        <Title>{serviceItem.title}</Title>
        <Description>{serviceItem.description}</Description>
        <FlexContainer>
          <WorkingDay>
            <MdCalendarToday />
            작업일: {serviceItem.workingDay}일
          </WorkingDay>
          <EditCnt>
            <MdOutlineBuild />
            수정 횟수: {serviceItem.editCnt}회
          </EditCnt>
        </FlexContainer>
        <Button
          style={{ marginTop: 16 }}
          appearance={ButtonAppearance.YELLOW}
          size={ButtonSize.FULL}
        >
          구매하기
        </Button>
      </ExpandedContainer>
    </Container>
  );
};

export default Item;
