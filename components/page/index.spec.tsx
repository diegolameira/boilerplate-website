import React from 'react';
import ReactDOM from 'react-dom';

import Page from './';

describe('Page', () => {
  it('renders as expected', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Page />, div);
  });
});
