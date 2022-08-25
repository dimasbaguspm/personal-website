import { ITypography } from 'components/ui/typography';
import { ThemeConfig, ThemeConfigTypography } from 'styled-components';

import { themeConfig } from '../constants/theme';

export const getIntentColor = (val?: keyof ThemeConfig['colors'], isPrimary: boolean = true): string | undefined => {
  if (!val) {
    return themeConfig['colors']['primary']!['main'];
  }

  if (isPrimary) {
    return themeConfig['colors'][val]?.['main'] ?? undefined;
  }

  return themeConfig['colors'][val]?.subMain ?? undefined;
};

export const getFontWeight = (
  val?: keyof ThemeConfigTypography['weight'],
  isMobile: boolean = false
): number | undefined => {
  if (isMobile && !val) return themeConfig['typography']['mobile']['weight']['normal'];
  if (!val) return themeConfig['typography']['normal']['weight']['normal'];

  if (isMobile) return themeConfig['typography']['mobile']['weight'][val];

  return themeConfig['typography']['normal']['weight'][val];
};

export const getFontSize = (val?: keyof ThemeConfigTypography['size'], isMobile: boolean = false): string => {
  if (isMobile && !val) return themeConfig['typography']['mobile']['size']['normal'];
  if (!val) return themeConfig['typography']['normal']['size']['normal'];
  if (isMobile) return themeConfig['typography']['mobile']['size'][val];
  return themeConfig['typography']['normal']['size'][val];
};

export const getButtonColorBasedIntent = (val?: keyof ThemeConfig['colors']): string | undefined => {
  if (!val) {
    return themeConfig['colors']['low']!['subMain'];
  }

  switch (val) {
    case 'secondary':
      return themeConfig['colors']['primary']?.main;
    default:
      return themeConfig['colors']['low']?.main;
  }
};

export const getTextAlignment = (val?: ITypography['alignment']): string => {
  if (!val) {
    return 'left';
  }
  return val;
};
