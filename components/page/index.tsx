import styled from 'styled-components';
import Link from 'next/link';

const StyledLink = styled.span`
  padding: 6px 4px;

  a {
    color: #fff;
    text-decoration: none;
    font-size: 16px;
  }
`;

const Menu = ({ href, label }) => (
  <StyledLink>
    <Link href={href}>
      <a>{label}</a>
    </Link>
  </StyledLink>
);

export default ({ children }) => (
  <main>
    <nav>
      <Menu href={'/'} label={'HOMEZEE'} />
      {['news', 'newest', 'ask', 'jobs'].map(m => (
        <Menu key={m} href={`/${m}`} label={m.toUpperCase()} />
      ))}
      |
      <StyledLink
        onClick={() => {
          console.error('another error on console');
          throw new Error('Houston, we have a problem');
        }}
        children={'ERROR DISPATCHER'}
      />
    </nav>
    <div>{children}</div>
    <style global jsx>{`
      body {
        font-family: Helvetica, sans-serif;
      }
      nav {
        text-align: left;
        background-color: #000;
        color: #fff;
        padding: 12px;
        position: fixed;
        z-index: 1000;
        top: 0;
        left: 0;
        right: 0;
      }
      a {
        color: #0e0e0e;
        text-decoration: none;
      }
    `}</style>
    <style jsx>{`
      div {
        width: 100%;
        color: #333;
        padding-top: 40px;
      }
    `}</style>
  </main>
);
