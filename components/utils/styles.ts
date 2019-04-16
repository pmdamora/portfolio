import { css } from 'styled-components';

export const spacingStyle = (
  kind: 'margin' | 'padding',
  data: any,
  theme: any
) => {
  if (typeof data === 'string') {
    return css`
      ${kind}: ${theme.spacing[data] || data};
    `;
  }
  const result = [];
  if (data.horizontal) {
    result.push(css`
      ${kind}-left: ${theme.spacing[data.horizontal] || data.horizontal};
      ${kind}-right: ${theme.spacing[data.horizontal] || data.horizontal};
    `);
  }
  if (data.vertical) {
    result.push(css`
      ${kind}-top: ${theme.spacing[data.vertical] || data.vertical};
      ${kind}-bottom: ${theme.spacing[data.vertical] || data.vertical};
    `);
  }
  if (data.top) {
    result.push(css`
      ${kind}-top: ${theme.spacing[data.top] || data.top};
    `);
  }
  if (data.bottom) {
    result.push(css`
      ${kind}-bottom: ${theme.spacing[data.bottom] || data.bottom};
    `);
  }
  if (data.left) {
    result.push(css`
      ${kind}-left: ${theme.spacing[data.left] || data.left};
    `);
  }
  if (data.right) {
    result.push(css`
      ${kind}-right: ${theme.spacing[data.right] || data.right};
    `);
  }
  return result;
};
