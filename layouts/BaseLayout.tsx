import React, { FunctionComponent } from 'react';
import { Box } from '@portfolio/components/Box';

const BaseLayout: FunctionComponent<{}> = ({ children }) => {
  return <Box>{children}</Box>;
};

export { BaseLayout };
