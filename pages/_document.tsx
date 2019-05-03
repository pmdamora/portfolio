import React, { Fragment } from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class PorfolioDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <Fragment>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </Fragment>
        )
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="description"
            content="Personal showcase and blog of Paul D'Amora."
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#fff" />
          <link rel="manifest" href="./static/manifest.json" />
        </Head>
        <Main />
        <NextScript />
      </Html>
    );
  }
}
