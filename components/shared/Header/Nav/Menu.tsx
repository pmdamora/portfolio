import React, { FunctionComponent } from 'react';

import { Box } from '@portfolio/components/ui/Box';
import { NavItem } from './NavItem';

interface Props {
  showHome?: boolean;
  menuDirection?: 'row' | 'column';
}

const Menu: FunctionComponent<Props> = ({ showHome, menuDirection }) => {
  return (
    <Box boxDirection={menuDirection} justify="center" boxWidth="100%">
      {showHome && <NavItem href="/">Home</NavItem>}
      <NavItem href="/writings">Writings</NavItem>
      <NavItem href="/projects">Projects</NavItem>
      <NavItem href="/hiking">Hiking</NavItem>
      <NavItem href="#">Résumé</NavItem>
    </Box>
  );
};

Menu.defaultProps = {
  showHome: false,
  menuDirection: 'row'
};

export { Menu };
