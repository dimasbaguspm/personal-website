import styled from 'styled-components';
import { themeConfig } from '../../../constants/theme';

export const Items = styled.div`
  background-color: ${themeConfig.colors.secondary?.subMain};
  color: ${themeConfig.colors.secondary?.main};
  padding: 5px 10px;
  border-radius: 5px;
  margin: 0.2rem;
`;
