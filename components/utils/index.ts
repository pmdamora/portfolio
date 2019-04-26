import { css } from 'styled-components';
import { Spacing } from '@portfolio/styles';

export const fillStyle = (fill: 'horizontal' | 'vertical' | boolean) => {
  if (fill === 'horizontal') {
    return 'width: 100%;';
  }
  if (fill === 'vertical') {
    return 'height: 100%;';
  }
  if (fill) {
    return `
      width: 100%;
      height: 100%;
    `;
  }
  return undefined;
};

const JUSTIFY_MAP = {
  around: 'space-around',
  between: 'space-between',
  center: 'center',
  end: 'flex-end',
  evenly: 'space-evenly',
  start: 'flex-start'
};

export const justifyStyle = (justify: string) => {
  return css`
    justify-content: ${JUSTIFY_MAP[justify]};
  `;
};

export const spacingStyle = (kind: 'margin' | 'padding', data: any) => {
  if (typeof data === 'string') {
    return css`
      ${kind}: ${Spacing[data] || data};
    `;
  }
  const result = [];
  if (data.horizontal) {
    result.push(css`
      ${kind}-left: ${Spacing[data.horizontal] || data.horizontal};
      ${kind}-right: ${Spacing[data.horizontal] || data.horizontal};
    `);
  }
  if (data.vertical) {
    result.push(css`
      ${kind}-top: ${Spacing[data.vertical] || data.vertical};
      ${kind}-bottom: ${Spacing[data.vertical] || data.vertical};
    `);
  }
  if (data.top) {
    result.push(css`
      ${kind}-top: ${Spacing[data.top] || data.top};
    `);
  }
  if (data.bottom) {
    result.push(css`
      ${kind}-bottom: ${Spacing[data.bottom] || data.bottom};
    `);
  }
  if (data.left) {
    result.push(css`
      ${kind}-left: ${Spacing[data.left] || data.left};
    `);
  }
  if (data.right) {
    result.push(css`
      ${kind}-right: ${Spacing[data.right] || data.right};
    `);
  }
  return result;
};
