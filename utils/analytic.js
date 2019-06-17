import * as gtag from './gtag';

export { gtag };

export const pageview = url => {
  if (gtag.GA_ENABLED) gtag.pageview(url);
};

export const event = ({ action, category, label, value }) => {
  if (gtag.GA_ENABLED) gtag.event({ action, category, label, value });
};
