import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

import { Box } from '@portfolio/components/shared/Box';
import { Menu } from '@portfolio/components/ui/Header/Nav';
import { MQ } from '@portfolio/styles';

const Wrapper = styled(Box)`
  ${MQ.small} {
    display: none;
  }
`;

const HorizontalNav: FunctionComponent = () => {
  return (
    <Wrapper>
      <Menu />
    </Wrapper>
  );
};

export { HorizontalNav };
