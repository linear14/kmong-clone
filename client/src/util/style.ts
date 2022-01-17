import { css } from 'styled-components';
import { FlexDirection } from 'src/enum/style';
import { IFlexBox } from 'src/types/style';

function checkCenter(optionValue: boolean | undefined): boolean {
  return optionValue === true || optionValue === undefined;
}

export const flexBox = (option: IFlexBox) => css`
  display: flex;
  flex-direction: ${option.direction || FlexDirection.ROW};
  justify-content: ${checkCenter(option.isAxisCenter)
    ? 'center'
    : 'flex-start'};
  align-items: ${checkCenter(option.isPerpendicularAxisCenter)
    ? 'center'
    : 'stretch'};
`;
