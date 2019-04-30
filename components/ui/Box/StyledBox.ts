import styled from 'styled-components';

import {
  fillStyle,
  justifyStyle,
  spacingStyle
} from '@portfolio/components/utils';

import { BoxProps } from './Box';

const StyledBox = styled.div<BoxProps>`
  box-sizing: border-box;
  display: flex;
  min-height: 0;
  min-width: 0;
  outline: none;
  ${props => props.boxDirection && `flex-direction: ${props.boxDirection};`}
  ${props => props.boxFill && fillStyle(props.boxFill)}
  ${props => props.boxHeight && `height: ${props.boxHeight};`}
  ${props => props.boxWidth && `width: ${props.boxWidth};`}
  ${props => props.justify && justifyStyle(props.justify)}
  ${props => props.margin && spacingStyle('margin', props.margin)}
  ${props => props.padding && spacingStyle('padding', props.padding)}
  ${props => props.textAlign && `text-align: ${props.textAlign};`}
`;

export { StyledBox };
