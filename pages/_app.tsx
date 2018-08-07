import App from 'next/app';
import Raven from 'raven-js';

const PACKAGE = require('../package.json');

const SENTRY_PUBLIC_DSN = process.env.SENTRY_PUBLIC_DSN;
const NODE_ENV = process.env.NODE_ENV;

export default class extends App {
  constructor(props) {
    super(props);

    Raven.config(SENTRY_PUBLIC_DSN, {
      release: PACKAGE.version,
      environment: NODE_ENV
    }).install();
  }

  componentDidCatch(error, errorInfo) {
    debugger;
    Raven.captureException(error, { extra: errorInfo });

    // This is needed to render errors correctly in development / production
    super.componentDidCatch(error, errorInfo);
  }
}
