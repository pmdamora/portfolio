import React, { FunctionComponent } from 'react';

interface Props {
  handleHamburgerClick: () => void;
}

const Hamburger: FunctionComponent<Props> = ({ handleHamburgerClick }) => {
  return <button onClick={handleHamburgerClick}>click</button>;
};

export { Hamburger };
