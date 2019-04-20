import React from 'react';
import App, { Container } from 'next/app';

import { BaseLayout } from '@portfolio/layouts';

export default class PortfolioApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <BaseLayout>
          <Component {...pageProps} />
        </BaseLayout>
      </Container>
    );
  }
}
