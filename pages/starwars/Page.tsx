import React, { Component } from 'react';
import Page from 'components/page';

import { Card } from './Card';

interface Props {
  title: string;
  items: any[];
  loadPeople: () => void;
}

export default class extends Component<Props> {
  render() {
    const { title, items, loadPeople } = this.props;
    return (
      <Page>
        <button onClick={() => loadPeople()}>reload</button>
        <h1>{title}</h1>
        <React.Fragment>
          {(items || []).map(item => <Card key={item.url} {...item} />)}
        </React.Fragment>
      </Page>
    );
  }
}
