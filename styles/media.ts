const customMediaQuery = (maxWidth: number) =>
  `@media (max-width: ${maxWidth}px)`;

// TODO: Investigate using https://github.com/d6u/react-container-query
export const media = {
  custom: customMediaQuery,
  desktop: customMediaQuery(922),
  phone: customMediaQuery(576),
  tablet: customMediaQuery(768)
};
