import React from 'react';
import App, { Container } from 'next/app';

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
        <Component {...pageProps} router={router} />
      </Container>
    );
  }
}
