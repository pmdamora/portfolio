import React, { Component } from 'react';
import { StyledBox } from '@portfolio/components/Box';

export interface Props {
  direction?:
    | 'row'
    | 'column'
    | 'row-responsive'
    | 'row-reverse'
    | 'column-reverse';
}

class Box extends Component<Props> {
  static defaultProps: Props = {
    direction: 'row'
  };

  render() {
    const { children, direction } = this.props;

    return <StyledBox direction={direction}>{children}</StyledBox>;
  }
}

export { Box };
