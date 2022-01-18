import { ButtonAppearance, ButtonSize, FlexDirection } from 'src/enum/style';

export interface IFlexBox {
  direction?: FlexDirection;
  isAxisCenter?: boolean;
  isPerpendicularAxisCenter?: boolean;
}

export interface IButtonProps {
  appearance?: ButtonAppearance;
  size?: ButtonSize;
}
