const colors = {
  red: '#ed3426',
  white: '#ffffff',
  black: '#000000',

  gray0: '#f3f4f8',
  gray1: '#e1e5eb',
  gray2: '#c2c6cc',
  gray3: '#9ea2a8',
  gray4: '#5e5e5e', // text-muted
  gray5: '#232a38'
};

const fontSizes = {
  small: '14px',
  medium: '16px',
  large: '18px',
  xlarge: '32px',
  xxlarge: '48px'
};

const fontWeights = {
  normal: 'normal',
  bold: '700'
};

const fontFamilies = {
  body: '"Quattrocento", Helvetica, Arial, sans-serif',
  heading: '"Quattrocento Sans", Helvetica, sans-serif'
};

const spacing = {
  none: '0',
  xsmall: '4px',
  small: '8px',
  medium: '16px',
  large: '24px',
  xlarge: '48px',
  xxlarge: '64px'
};

export interface BaseTheme {
  colors: { [key in keyof typeof colors]: string };
  fontSizes: { [key in keyof typeof fontSizes]: string };
  fontWeights: { [key in keyof typeof fontWeights]: string };
  fontFamilies: { [key in keyof typeof fontFamilies]: string };
  spacing: { [key in keyof typeof spacing]: string };
}

export const theme: BaseTheme = {
  colors,
  fontSizes,
  fontWeights,
  fontFamilies,
  spacing
};
