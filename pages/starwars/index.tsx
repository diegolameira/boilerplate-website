import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { reduxPage } from 'redux/store';
import Page from 'components/page';

import mapStateToProps, { loadPeople } from './actions';
import { render } from 'react-dom';

interface Props {
  loadPeople: () => void;
  people: any[];
}

class Comp extends Component<Props> {
  componentDidMount() {
    this.props.loadPeople();
  }
  render() {
    const { people } = this.props;
    return (
      <Page>
        <h1>Start wars characters</h1>
        <React.Fragment>
          {people.map(person => <Card key={person.url} {...person} />)}
        </React.Fragment>
      </Page>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ loadPeople }, dispatch);
}

const StarWarsPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(Comp);

export default reduxPage(StarWarsPage);

const Card = ({ name, height, birth_year, gender }) => (
  <CardWrapper>
    <h1>{name}</h1>
    <ul>
      {Object.entries({
        height,
        birth_year,
        gender
      }).map((item, key) => (
        <li key={key}>
          <strong>{item[0]}</strong>
          <span>{item[1]}</span>
        </li>
      ))}
    </ul>
  </CardWrapper>
);

const CardWrapper = styled.div`
  margin: 10px;
  padding: 20px;
  box-shadow: 5px 2px 10px rgba(0, 0, 0, 0.6);
  border-radius: 6px;
`;
