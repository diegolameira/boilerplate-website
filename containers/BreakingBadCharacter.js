import { PureComponent } from 'react';
import fetch from 'isomorphic-unfetch';

export const fetchBreakingBadCharacterByName = async (name = '') => {
  let url = `${process.env.BREAKINGBAD_API}/characters?name=${name.replace(
    new RegExp(' ', 'g'),
    '+'
  )}`;
  const res = await fetch(url);
  const character = await res.json();
  return character;
};

export default class extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.load(this.props.name);
  }

  componentDidUpdate(prevProps) {
    if (this.props.name !== prevProps.name) {
      const { name } = this.props;
      this.load(name);
    }
  }

  load = (name = this.props.name) => {
    const updateState = character => this.setState(character[0]);
    fetchBreakingBadCharacterByName(name).then(updateState);
  };

  render = () => {
    return this.props.children(this.state);
  };
}
