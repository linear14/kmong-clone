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
  `,
  [ButtonAppearance.OUTLINE]: css`
    --button-font-color: #666;
    --button-bg-color: white;
    --button-hover-bg-color: #f2f3f7;
    --button-active-bg-color: #e4e5ed;
    --button-border: 1px solid #555969;
  `,
  [ButtonAppearance.YELLOW]: css`
    --button-font-color: black;
    --button-bg-color: #ffd400;
    --button-hover-bg-color: #f5c126;
    --button-active-bg-color: #b88a03;
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
  `,
  [ButtonSize.FULL]: css`
    --button-width: 100%;
    --button-height: 3rem;
    --button-padding: 1rem 0px;
  `
};

const Button = styled.div<IButtonProps>`
  ${({ appearance = ButtonAppearance.TRANSPARENT }) =>
    buttonAppearance[appearance]};
  ${({ size = ButtonSize.NORMAL }) => buttonSize[size]};

  width: var(--button-width);
  height: var(--button-height);
  padding: var(--button-padding);
  border-radius: 4px;
  border: var(--button-border);
  color: var(--button-font-color);
  background: var(--button-bg-color);
  font-size: 15px;
  font-weight: 500;
  text-align: center;
  cursor: pointer;

  transition: 0.25s;

  &:hover {
    background: var(--button-hover-bg-color);
  }

  &:active {
    background: var(--button-active-bg-color);
  }
`;

export { Button };
