import styled from 'styled-components';
import { spacingStyle } from '@portfolio/components/utils';

import { BoxProps } from '@portfolio/components/Box';

const fillStyle = (boxFill: BoxProps['boxFill']) => {
  if (boxFill === 'horizontal') {
    return 'width: 100%;';
  }
  if (boxFill === 'vertical') {
    return 'height: 100%;';
  }
  if (boxFill) {
    return `
      width: 100%;
      height: 100%;
    `;
  }
  return undefined;
};

const StyledBox = styled.div<BoxProps>`
  box-sizing: border-box;
  display: flex;
  min-height: 0;
  min-width: 0;
  outline: none;
  ${props => props.boxDirection && `flex-direction: ${props.boxDirection}`}
  ${props => props.boxHeight && `height: ${props.boxHeight};`}
  ${props => props.boxWidth && `width: ${props.boxWidth};`}
  ${props => props.margin && spacingStyle('margin', props.margin, props.theme)}
  ${props =>
    props.padding && spacingStyle('padding', props.padding, props.theme)}
  ${props => props.boxFill && fillStyle(props.boxFill)}
`;

export { StyledBox };
