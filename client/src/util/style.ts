import { css } from 'styled-components';
import { FlexDirection } from 'src/enum/style';
import { IFlexBox } from 'src/types/style';

export const flexBox = (option: IFlexBox) => css`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: ${option.direction ?? FlexDirection.ROW};
`;
