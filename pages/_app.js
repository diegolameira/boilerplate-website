import App, { Container } from 'next/app';
import Router from 'next/router';
import NextSeo, * as JsonLds from 'next-seo';
import React from 'react';
import { ThemeProvider } from 'styled-components';

import DefaultLayout from 'layouts/Default';
import { pageview } from 'utils/analytic';

import SEO from 'next-seo.config';

const theme = {
  colors: {
    primary: '#0070f3',
  },
};

Router.events.on('routeChangeComplete', url => pageview(url));

export default class extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;
    const { Layout = DefaultLayout, SEO: CompSEO } = Component;
    const { Page: PageSEO, ...JSONLD } = CompSEO || {};
    return (
      <Container>
        <NextSeo config={SEO} />
        {PageSEO ? <NextSeo config={PageSEO} /> : null}
        <JSONLDBuilder {...{ JSONLD }} />
        <ThemeProvider theme={theme}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </Container>
    );
  }
}

const JSONLDBuilder = ({ JSONLD }) => {
  const lds = [];
  for (const key in JSONLD) {
    if (JSONLD.hasOwnProperty(key)) {
      const props = JSONLD[key];
      const Component = JsonLds[key];
      const compiled = <Component key={key} {...props} />;
      lds.push(compiled);
    }
  }
  return <>{lds}</>;
};
