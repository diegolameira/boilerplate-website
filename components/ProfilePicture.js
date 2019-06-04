import styled from 'styled-components';

const Wrapper = styled.picture.attrs(({ size }) => ({
  size: size || 90
}))`
  background: #000;
  display: block;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  border-radius: 100%;
  overflow: hidden;
  position: relative;

  img {
    width: 100%;
  }
`;

export default ({ src, title, size = 90 }) => (
  <Wrapper size={size}>
    <img src={src} alt={title} />
  </Wrapper>
);
