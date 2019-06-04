import { PureComponent } from 'react';
import fetch from 'isomorphic-unfetch';

export const fetchBreakingBadQuotes = async number => {
  let url = `${process.env.BREAKINGBADQUOTES_API}/v1/quotes`;
  if (number) url += `/${number}`;
  const res = await fetch(url);
  const quotes = await res.json();
  return quotes;
};

export default class extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { quotes: props.quotes || [] };
  }

  componentDidMount() {
    if (this.props.autoload) this.load();
  }

  load = async number => {
    const quotes = await fetchBreakingBadQuotes(number);
    this.setState({ quotes });
  };

  render = () => {
    const { children } = this.props;
    return children(this.state.quotes, this.load);
  };
}
