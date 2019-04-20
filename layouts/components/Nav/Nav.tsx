import React, { Component } from 'react';
import { Box } from '@portfolio/components/Box';

import BrandLink from './BrandLink';

class Nav extends Component {
  render() {
    return (
      <Box boxDirection="column" textAlign="center">
        <BrandLink />
      </Box>
    );
  }
}

export { Nav };
