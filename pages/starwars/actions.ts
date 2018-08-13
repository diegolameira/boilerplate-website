import { namespaceConfig } from 'fast-redux';

const DEFAULT_STATE = {
  people: [],
  planets: [],
  starships: []
};

const { action, getState: getStarWarsPageState } = namespaceConfig(
  'StarWarsPage',
  DEFAULT_STATE
);

export const loadPeople = action('LOAD_PEOPLE', state => state);

export const loadPeopleSuccess = action(
  'LOAD_PEOPLE_SUCCESS',
  (state, { results }) => {
    return { ...state, items: results };
  }
);

export default getStarWarsPageState;
