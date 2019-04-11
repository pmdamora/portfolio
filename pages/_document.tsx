import Document, { Head, Main, NextScript } from 'next/document';

export default class PortfolioDocument extends Document {
  render() {
    return (
      <html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
