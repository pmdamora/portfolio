import React, { Component } from 'react';
import { StyledBox } from '@portfolio/components/Box';

export interface Props {
  a11yTitle?: string;
  boxDirection?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  boxHeight?: string;
  boxWidth?: string;
  boxFill?: 'horizontal' | 'vertical' | boolean;
  margin?: string;
  padding?: string;
}

export class Box extends Component<Props> {
  static defaultProps: Props = {
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
