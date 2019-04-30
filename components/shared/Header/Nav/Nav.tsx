import React, { Component } from 'react';
// import { CSSTransition } from 'react-transition-group';

import { Box } from '@portfolio/components/ui/Box';

import { Menu } from './Menu';
// import { Overlay } from './Overlay';

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

    // TODO: Finish menu for mobile
    // return (
    //   <div>
    //     <button onClick={this.handleHamburgerClick}>click me</button>
    //     <CSSTransition
    //       in={this.state.overlayVisible}
    //       timeout={400}
    //       classNames="fade"
    //       unmountOnExit
    //     >
    //       <Overlay>
    //         <Menu menuDirection="column" showHome />
    //       </Overlay>
    //     </CSSTransition>
    //   </div>
    // );
    return (
      <Box
        boxDirection="row"
        textAlign="center"
        boxWidth="100%"
        justify="center"
        {...other}
      >
        <Menu />
      </Box>
    );
  }
}

export { Nav };
