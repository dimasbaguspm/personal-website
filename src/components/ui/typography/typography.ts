import { MIN_SCREEN_RESOLUTION } from 'constants/screen-config';
import styled, { ThemeConfig, ThemeConfigTypography } from 'styled-components';
import { getFontSize, getFontWeight, getIntentColor, getTextAlignment } from '../../../utils/theming';

export interface ITypography {
  intent?: keyof ThemeConfig['colors'];
  intentPrimary?: boolean;
  fontWeight?: keyof ThemeConfigTypography['weight'];
  fontSize?: keyof ThemeConfigTypography['size'];

  isMobile?: boolean;
  alignment?: 'left' | 'center' | 'right';
}

export const Title = styled.h1<ITypography>`
  font-size: ${(props) => getFontSize(props.fontSize ?? 'huge')};
  font-weight: ${(props) => getFontWeight(props.fontWeight ?? 'bold')};
  color: ${(props) => getIntentColor(props.intent, props.intentPrimary)};
  text-align: ${(props) => getTextAlignment(props.alignment)};

  @media screen and (max-width: ${MIN_SCREEN_RESOLUTION.tab}px) {
    font-size: ${(props) => getFontSize(props.fontSize ?? 'huge', true)};
    font-weight: ${(props) => getFontWeight(props.fontWeight ?? 'bold', true)};
  }
`;

export const SubTitle = styled.h3<ITypography>`
  font-size: ${(props) => getFontSize(props.fontSize ?? 'big')};
  font-weight: ${(props) => getFontWeight(props.fontWeight ?? 'bold')};
  color: ${(props) => getIntentColor(props.intent, props.intentPrimary)};
  text-align: ${(props) => getTextAlignment(props.alignment)};

  @media screen and (max-width: ${MIN_SCREEN_RESOLUTION.tab}px) {
    font-size: ${(props) => getFontSize(props.fontSize ?? 'big', true)};
    font-weight: ${(props) => getFontWeight(props.fontWeight ?? 'bold', true)};
  }
`;

export const BodyText = styled.p<ITypography>`
  font-size: ${(props) => getFontSize(props.fontSize ?? 'normal')};
  font-weight: ${(props) => getFontWeight(props.fontWeight ?? 'normal')};
  color: ${(props) => getIntentColor(props.intent, props.intentPrimary)};
  text-align: ${(props) => getTextAlignment(props.alignment)};

  @media screen and (max-width: ${MIN_SCREEN_RESOLUTION.tab}px) {
    font-size: ${(props) => getFontSize(props.fontSize ?? 'normal', true)};
    font-weight: ${(props) => getFontWeight(props.fontWeight ?? 'normal', true)};
  }
`;

export const NormalText = styled.p<ITypography>`
  font-size: ${(props) => getFontSize(props.fontSize ?? 'thin')};
  font-weight: ${(props) => getFontWeight(props.fontWeight ?? 'normal')};
  color: ${(props) => getIntentColor(props.intent, props.intentPrimary)};
  text-align: ${(props) => getTextAlignment(props.alignment)};

  @media screen and (max-width: ${MIN_SCREEN_RESOLUTION.tab}px) {
    font-size: ${(props) => getFontSize(props.fontSize ?? 'thin', true)};
    font-weight: ${(props) => getFontWeight(props.fontWeight ?? 'normal', true)};
  }
`;
