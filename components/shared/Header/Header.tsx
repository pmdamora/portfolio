import React, { Component } from 'react';

import { Box } from '@portfolio/components/ui/Box';
import { Nav } from './Nav';

import BrandLink from './BrandLink';

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
