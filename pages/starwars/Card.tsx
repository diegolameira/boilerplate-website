import styled from 'styled-components';

export const Card = ({ name, height, birth_year, gender }) => (
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
