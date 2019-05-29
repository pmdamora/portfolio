import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

import { Color, FontSize, FontFamily, Spacing } from '@portfolio/styles';

import { Box } from '@portfolio/components/shared/Box';

const Wrapper = styled(Box)<Props>`
  align-items: center;
  border-top: ${props =>
    props.withHr ? `1px solid ${Color.GRAY_1}` : '0 none'};
  margin-top: ${Spacing.large};
  padding-top: ${Spacing.small};
`;

const CopyrightText = styled.p`
  color: ${Color.GRAY_4};
  flex: 1;
  font-family: ${FontFamily.HEADING};
  font-size: ${FontSize.XSMALL};
  text-align: center;
`;

interface Props {
  withHr: boolean;
}

const Footer: FunctionComponent<Props> = ({ withHr }) => {
  return (
    <Wrapper justify="center" withHr={withHr}>
      <CopyrightText>
        &copy; All rights reserved Paul D&apos;Amora.
      </CopyrightText>
    </Wrapper>
  );
};

Footer.defaultProps = {
  withHr: true
};

export { Footer };
