import React, { FunctionComponent } from 'react';

import { Spacing } from '@portfolio/types/Spacing';
import { StyledBox } from './StyledBox';

export interface BoxProps {
  a11yTitle?: string;
  boxDirection?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  boxFill?: 'horizontal' | 'vertical' | boolean;
  boxHeight?: string;
  boxWidth?: string;
  justify?: 'start' | 'center' | 'between' | 'around' | 'evenly' | 'end';
  margin?: Spacing;
  padding?: Spacing;
  textAlign?: string;
}

const Box: FunctionComponent<BoxProps> = ({
  a11yTitle,
  children,
  ...other
}) => (
  <StyledBox aria-label={a11yTitle} {...other}>
    {children}
  </StyledBox>
);

Box.defaultProps = {
  boxDirection: 'row',
  margin: 'none',
  padding: 'none'
};

export { Box };
