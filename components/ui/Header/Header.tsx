import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

import { MQ } from '@portfolio/styles';
import { Box } from '@portfolio/components/shared/Box';
import {
  HorizontalNav,
  OverlayNav
} from '@portfolio/components/ui/Header/Nav';
import { Hamburger, BrandLink } from '@portfolio/components/ui/Header';

const Wrapper = styled(Box)`
  ${MQ.small} {
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
  }
`;

interface Props {}

interface State {
  showMobileMenu: boolean;
}

class Header extends Component<Props, State> {
  state: State = {
    showMobileMenu: false
  };

  handleHamburgerClick = () => {
    this.setState({
      showMobileMenu: !this.state.showMobileMenu
    });
  };

  render() {
    return (
      <Fragment>
        <Wrapper boxDirection="column" textAlign="center">
          <BrandLink />
          <HorizontalNav />
          <Hamburger handleHamburgerClick={this.handleHamburgerClick} />
        </Wrapper>
        <OverlayNav showMobileMenu={this.state.showMobileMenu} />
      </Fragment>
    );
  }
}

export { Header };
