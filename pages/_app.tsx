import React from 'react';
import App, { Container } from 'next/app';

import { BaseLayout } from '@portfolio/layouts';

export default class PortfolioApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps, router } = this.props;
    return (
      <Container>
        <BaseLayout>
          <Component {...pageProps} router={router} />
        </BaseLayout>
      </Container>
    );
  }
}
