import Document, { Head, Main, NextScript } from 'next/document';
import flush from 'styled-jsx/server';
import Manifest from 'next-manifest/manifest';
import ServiceWorker from 'next-workbox/service-worker';
export default class extends Document {
  static getInitialProps({ renderPage }) {
    return {
      ...renderPage(),
      styles: flush()
    };
  }

  render() {
    return (
      <html lang="en">
        <Head>
          <link rel="icon" href="/static/favicon.ico" />
          <title>HNPWA with Next.js</title>
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
