import styled, { css } from 'styled-components';
import { BoxProps } from '@portfolio/components/Box';

const directionStyle = (direction: BoxProps['direction']) => {
  return [
    css`
      flex-direction: ${direction};
      min-height: 0;
      min-width: 0;
    `
  ];
};

const StyledBox = styled.div`
  box-sizing: border-box;
  display: flex;
  outline: none;
  ${({ direction }: BoxProps) => direction && directionStyle(direction)}
`;

export { StyledBox };
