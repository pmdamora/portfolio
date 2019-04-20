export interface BaseTheme {
  colors: {
    text: {
      hover: string;
      link: string;
      primary: string;
      dark: string;
    };
  };
  fonts: {
    sansSerif: string;
    serif: string;
  };
  spacing: {
    none: string;
    xsmall: string;
    small: string;
    medium: string;
    large: string;
    xlarge: string;
    xxlarge: string;
  };
}

export const theme: BaseTheme = {
  colors: {
    text: {
      hover: '#000000',
      link: '#ed3426',
      primary: '#232a38',
      dark: '#5e5e5e'
    }
  },
  fonts: {
    sansSerif: '"Quattrocento", Helvetica, Arial, sans-serif',
    serif: '"Quattrocento Sans", Helvetica, sans-serif'
  },
  spacing: {
    none: '0',
    xsmall: '4px',
    small: '8px',
    medium: '16px',
    large: '24px',
    xlarge: '48px',
    xxlarge: '64px'
  }
};
