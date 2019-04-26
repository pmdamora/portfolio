import React from 'react';
import styled from 'styled-components';

import { Color } from '@portfolio/styles';
import { Box } from '@portfolio/components/ui/Box';

const Container = styled(Box)`
  background-color: ${Color.RED.withOpacity(0.9)};
  height: 100%;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
`;

export const Overlay = ({ children }) => {
  return <Container>{children}</Container>;
};
