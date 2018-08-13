import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  compose,
  setDisplayName,
  lifecycle,
  withProps,
  mapProps,
  pure
} from 'recompose';

import { reduxPage } from 'redux/store';

import { people } from './service';
import initialState, { loadPeople } from './actions';
import Page from './Page';

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ loadPeople }, dispatch);
}

const Container = compose(
  setDisplayName('StarWarsPage'),
  withProps({
    title: 'Star Wars Page'
  }),
  mapProps(({ title, people }) => ({
    title,
    items: people || []
  })),
  connect(
    initialState,
    mapDispatchToProps
  ),
  lifecycle({
    componentDidMount() {
      // NOTE: server is sending items, if any then load
      if (this.props.items && !this.props.items.length) this.props.loadPeople();
    }
  }),
  pure
)(Page);

Container.getInitialProps = async ({ store, isServer }) => {
  // TODO: better to use actions/redux
  const promise = await people().then(response => ({
    people: response.results
  }));
  return promise;
};

export default reduxPage(Container);
