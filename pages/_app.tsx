import React, { Component } from 'react';
import App, { Container } from 'next/app';
import { Grommet, Box } from 'grommet';
import { grommet } from 'grommet/themes';

class Layout extends Component {
  render() {
    const { children } = this.props;
    return (
      <Grommet theme={grommet}>
        <Box align="center" background="neutral-2">
          {children}
        </Box>
      </Grommet>
    );
  }
}

export default class PortfolioApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Container>
    );
  }
}
