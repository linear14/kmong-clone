import { ButtonAppearance, ButtonSize } from 'src/enum/style';
import { IButtonProps } from 'src/types/style';
import styled, { css } from 'styled-components';

const buttonAppearance = {
  [ButtonAppearance.TRANSPARENT]: css`
    --button-font-color: black;
    --button-bg-color: white;
    --button-hover-bg-color: #eeeeee;
  `,
  [ButtonAppearance.BLUE]: css`
    --button-font-color: white;
    --button-bg-color: #116ad4;
    --button-hover-bg-color: #0751ab;
  `
};

const buttonSize = {
  [ButtonSize.SMALL]: css`
    --button-height: 1.5rem;
    --button-padding: 0.25rem 20px;
  `,
  [ButtonSize.NORMAL]: css`
    --button-height: 2.2rem;
    --button-padding: 0.6rem 22px;
  `,
  [ButtonSize.LARGE]: css`
    --button-height: 2.5rem;
    --button-padding: 0.75rem 24px;
  `
};

const Button = styled.div<IButtonProps>`
  ${({ appearance = ButtonAppearance.TRANSPARENT }) =>
    buttonAppearance[appearance]};
  ${({ size = ButtonSize.NORMAL }) => buttonSize[size]};

  height: var(--button-height);
  padding: var(--button-padding);
  border-radius: 4px;
  color: var(--button-font-color);
  background: var(--button-bg-color);
  cursor: pointer;

  transition: 0.25s;

  &:hover {
    background: var(--button-hover-bg-color);
  }
`;

export { Button };
