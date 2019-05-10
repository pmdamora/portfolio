import React, { Fragment } from 'react';
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  NextDocumentContext
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';

import { GlobalStyle } from '@portfolio/styles';
import { Fonts } from '@portfolio/components/ui/Header';

export default class PorfolioDocument extends Document {
  static async getInitialProps(ctx: NextDocumentContext) {
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
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#fff" />
          <link rel="manifest" href="./static/manifest.json" />
          <Fonts />
        </Head>
        <GlobalStyle />
        <Main />
        <NextScript />
      </Html>
    );
  }
}
