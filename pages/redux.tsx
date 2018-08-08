import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { namespaceConfig } from 'fast-redux';

import { reduxPage } from 'redux/store';
import Page from 'components/page';

const DEFAULT_STATE = { count: 1 };
const { action, getState: getHomepageState } = namespaceConfig(
  'homepage',
  DEFAULT_STATE
);

const increment = action('INCREMENT', (state, increment = 1) => {
  return { ...state, count: state.count + increment };
});

const decrement = action('DECREMENT', (state, decrement = 1) => {
  return { ...state, count: state.count - decrement };
});

const Comp = ({ count, decrement, increment }) => (
  <Page>
    <h1>Redux Example</h1>
    <h2>
      counter <br />
      {count}
    </h2>
    <button onClick={() => decrement()}>-</button>
    <button onClick={() => increment()}>+</button>
  </Page>
);

function mapStateToProps(state) {
  return getHomepageState(state);
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ increment, decrement }, dispatch);
}

const ReduxPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(Comp);

export default reduxPage(ReduxPage);
