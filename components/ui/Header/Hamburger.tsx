import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

import { MQ, Color } from '@portfolio/styles';

interface BurgerProps {
  isOpen: boolean;
}

// TODO: Add z-index constants and use them
const BurgerButton = styled.div<BurgerProps>`
  display: none;
  ${MQ.small} {
    cursor: pointer;
    display: inline-block;
    height: 18px;
    position: relative;
    width: 30px;

    &:hover {
      opacity: 0.7;
    }

    ${props => props.isOpen && `z-index: 1000;`}
  }
`;

const Lines = styled.div<BurgerProps>`
  display: block;
  margin-top: -1.5px;
  top: 1.5px;

  &,
  &:after,
  &:before {
    background-color: ${Color.RED};
    border-radius: 3px;
    height: 3px;
    position: absolute;
    transition: 0.15s transform ease;
    width: 30px;
  }

  &:before,
  &:after {
    content: '';
    display: block;
  }

  &:before {
    top: 7.5px;
    transition: 0.15s transform, opacity ease;
  }

  &:after {
    bottom: -7.5px;
    top: 16px;
  }

  ${props =>
    props.isOpen &&
    `& {
        background-color: ${Color.WHITE};
        transform: translate3d(0, 7.5px, 0) rotate(45deg);
      }
      &:before {
        transform: rotate(-45deg) translate3d(-4.2857175px, -4.5px, 0);
        opacity: 0;
      }
      &:after {
        background-color: ${Color.WHITE};
        transform: translate3d(0, -16px, 0) rotate(-90deg);
      }`}
`;

interface Props {
  handleHamburgerClick: () => void;
  isOpen: boolean;
}

const Hamburger: FunctionComponent<Props> = ({
  handleHamburgerClick,
  isOpen
}) => {
  return (
    <BurgerButton isOpen={isOpen} onClick={handleHamburgerClick}>
      <Lines isOpen={isOpen} />
    </BurgerButton>
  );
};

Hamburger.defaultProps = {
  isOpen: false
};

export { Hamburger };
