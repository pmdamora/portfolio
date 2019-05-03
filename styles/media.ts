const customMediaQuery = (maxWidth: number) =>
  `@media (max-width: ${maxWidth}px)`;

// TODO: Investigate using https://github.com/d6u/react-container-query
export const media = {
  custom: customMediaQuery,
  xsmall: customMediaQuery(0),
  small: customMediaQuery(576),
  medium: customMediaQuery(768),
  large: customMediaQuery(992),
  xlarge: customMediaQuery(1200)
};
