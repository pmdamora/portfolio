import React, { Component } from 'react';

import { Box } from '@portfolio/components/ui/Box';

import { Menu } from './Menu';
import { Overlay } from './Overlay';

interface Props {}

interface State {
  overlayVisible: boolean;
}

class Nav extends Component<Props, State> {
  state: State = {
    overlayVisible: false
  };

  handleHamburgerClick = () => {
    this.setState({
      overlayVisible: !this.state.overlayVisible
    });
  };

  render() {
    const { ...other } = this.props;

    if (this.state.overlayVisible) {
      return (
        <Overlay>
          <Menu />
        </Overlay>
      );
    }
    return (
      <Box
        boxDirection="row"
        textAlign="center"
        boxWidth="100%"
        justify="center"
        {...other}
      >
        <button onClick={this.handleHamburgerClick}>click me</button>
        <Menu />
      </Box>
    );
  }
}

export { Nav };
