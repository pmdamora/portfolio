import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

import { MQ } from '@portfolio/styles';
import { Box } from '@portfolio/components/ui/Box';
import { HorizontalNav } from '@portfolio/components/shared/Header/Nav';
import { Hamburger, BrandLink } from '@portfolio/components/shared/Header';

const Wrapper = styled(Box)`
  ${MQ.small} {
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
  }
`;

interface Props {}

interface State {}

class Header extends Component<Props, State> {
  render() {
    return (
      <Fragment>
        <Wrapper boxDirection="column" textAlign="center">
          <BrandLink />
          <HorizontalNav />
          <Hamburger />
        </Wrapper>
      </Fragment>
    );
  }
}

export { Header };
