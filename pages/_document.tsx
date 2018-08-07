import Document, { Head, Main, NextScript } from 'next/document';
import flush from 'styled-jsx/server';
import Manifest from 'next-manifest/manifest';
import ServiceWorker from 'next-workbox/service-worker';
import { ServerStyleSheet } from 'styled-components';

export default class extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    );
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags, styles: flush() };
  }

  render() {
    return (
      <html lang="en">
        <Head>
          <link rel="icon" href="/static/favicon.ico" />
          <title>HNPWA with Next.js</title>
          {this.props.styleTags}
          <Manifest themeColor="#000" />
          <ServiceWorker
            src={`/static/workbox/sw.js`}
            scope={`../../`}
            unregister={process.env.NODE_ENV !== 'production'}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
