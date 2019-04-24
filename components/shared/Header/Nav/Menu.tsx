import React, { Fragment } from 'react';

import { NavItem } from './NavItem';

export const Menu = () => {
  return (
    <Fragment>
      <NavItem href="/writings">Writings</NavItem>
      <NavItem href="/projects">Projects</NavItem>
      <NavItem href="/hiking">Hiking</NavItem>
      <NavItem href="#">Résumé</NavItem>
    </Fragment>
  );
};
