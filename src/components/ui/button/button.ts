import styled, { ThemeConfig } from 'styled-components';

import { getButtonColorBasedIntent, getIntentColor } from 'utils/theming';

export interface IButtonProps {
  intent?: keyof ThemeConfig['colors'];
  intentPrimary?: boolean;
}

export const Button = styled.button<IButtonProps>`
  background-color: ${(props) => getIntentColor(props.intent, props.intentPrimary)};
  padding: 5px 10px;
  border-radius: 5px;

  color: ${(props) => getButtonColorBasedIntent(props.intent)};
  outline: none;
  border: none;
  cursor: pointer;
`;
