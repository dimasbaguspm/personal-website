import { ThemeConfig } from 'styled-components';

export const themeConfig: ThemeConfig = {
  colors: {
    primary: {
      main: '#112A41',
      subMain: 'rgba(40, 74, 92, 0.72)',
    },
    secondary: {
      main: '#284A5C',
      subMain: '#DDEBFF',
    },
    low: {
      main: '#E5E5E5',
      subMain: '#FFFFFF',
    },
  },

  typography: {
    normal: {
      size: {
        thin: '0.75rem',
        small: '0.85rem',
        normal: '1rem',
        big: '1.5rem',
        huge: '2rem',
      },
      weight: {
        thin: 400,
        normal: 500,
        bold: 700,
      },
    },
    mobile: {
      size: {
        thin: '9px',
        small: '10px',
        normal: '14px',
        big: '18px',
        huge: '24px',
      },
      weight: {
        thin: 400,
        normal: 500,
        bold: 700,
      },
    },
  },
};
