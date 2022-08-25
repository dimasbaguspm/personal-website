import { themeConfig } from 'constants/theme';
import styled from 'styled-components';

export const HorizontalLine = styled.hr`
  margin: 0;
  height: 1px;
  background-color: ${themeConfig.colors.primary?.main};
  border: none;
`;
