import React, { Component } from 'react';

import { Box } from '@portfolio/components/Box';
import NavItem from './NavItem';

class Nav extends Component {
  render() {
    return (
      <Box
        boxDirection="row"
        textAlign="center"
        boxWidth="100%"
        justify="center"
      >
        <NavItem href="/writings">Writings</NavItem>
        <NavItem href="/projects">Projects</NavItem>
        <NavItem href="/hiking">Hiking</NavItem>
        <NavItem href="#">Résumé</NavItem>
      </Box>
    );
  }
}

export default Nav;
