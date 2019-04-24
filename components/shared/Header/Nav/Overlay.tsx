import React from 'react';
import styled from 'styled-components';

import { Box } from '@portfolio/components/ui/Box';

const Container = styled(Box)`
  background-color: ${props => props.theme.colors.red};
  height: 100%;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
`;

export const Overlay = ({ children }) => {
  return <Container>{children}</Container>;
};
