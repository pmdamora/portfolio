import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

import { MQ } from '@portfolio/styles';

const StyledButton = styled.button`
  display: none;
  ${MQ.small} {
    display: inline-block;
  }
`;

interface Props {
  handleHamburgerClick: () => void;
}

const Hamburger: FunctionComponent<Props> = ({ handleHamburgerClick }) => {
  return <StyledButton onClick={handleHamburgerClick}>click</StyledButton>;
};

export { Hamburger };
