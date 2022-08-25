import { themeConfig } from 'constants/theme';
import styled from 'styled-components';

export const ImageWrapper = styled.img`
  height: 35px;
  width: 35px;
  object-fit: contain;
  object-position: center;

  background-color: ${themeConfig.colors.secondary?.subMain};
  border-radius: 15px;
`;
