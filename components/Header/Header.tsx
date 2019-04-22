import React, { Component } from 'react';
import { Box } from '@portfolio/components/Box';

import BrandLink from './BrandLink';
import Nav from './Nav';

class Header extends Component {
  render() {
    return (
      <Box boxDirection="column" textAlign="center">
        <BrandLink />
        <Nav />
      </Box>
    );
  }
}

export { Header };
