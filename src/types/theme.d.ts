import 'styled-components';

declare module 'styled-components' {
  export interface ThemeConfig {
    colors: {
      primary?: ColorSubConfig;
      secondary?: ColorSubConfig;
      success?: ColorSubConfig;
      warning?: ColorSubConfig;
      danger?: ColorSubConfig;
      low?: ColorSubConfig;
      black?: ColorSubConfig;
    };

    typography: {
      normal: ThemeConfigTypography;
      mobile: ThemeConfigTypography;
    };
  }

  export interface ThemeConfigTypography {
    size: {
      [V in 'thin' | 'small' | 'normal' | 'big' | 'huge']: string;
    };
    weight: {
      [V in 'thin' | 'normal' | 'bold']: number;
    };
  }

  export type ColorSubConfig = {
    [V in 'main' | 'subMain']: string;
  };
}
