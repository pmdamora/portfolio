import React, { Component } from 'react';

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

export class Box extends Component<BoxProps> {
  static defaultProps: BoxProps = {
    boxDirection: 'row',
    margin: 'none',
    padding: 'none'
  };

  render() {
    const { a11yTitle, children, ...other } = this.props;

    return (
      <StyledBox aria-label={a11yTitle} {...other}>
        {children}
      </StyledBox>
    );
  }
}
