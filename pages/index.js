import Quote from '../components/Quote';
import BreakingBadQuote, {
  fetchBreakingBadQuotes
} from '../containers/BreakingBadQuote';
import BreakingBadCharacter, {
  fetchBreakingBadCharacterByName
} from '../containers/BreakingBadCharacter';
import ProfilePicture from '../components/ProfilePicture';

const QuoteWithPicture = quote => (
  <BreakingBadCharacter key={quote.quote} name={quote.author}>
    {props => (
      <>
        <ProfilePicture src={props.img} title={quote.author} />
        <Quote {...quote} />
      </>
    )}
  </BreakingBadCharacter>
);

const Index = ({ quotes }) => (
  <>
    <h1>ServerSide</h1>
    <BreakingBadQuote>
      {(_quotes, load) => (
        <>
          {(_quotes.length ? _quotes : quotes).map(QuoteWithPicture)}
          <button onClick={() => load()}>Reload</button>
        </>
      )}
    </BreakingBadQuote>
    <h1>ClientSide</h1>
    <BreakingBadQuote autoload>
      {(quotes, load) => (
        <>
          {quotes.map(QuoteWithPicture)}
          <button onClick={() => load()}>Reload</button>
        </>
      )}
    </BreakingBadQuote>
  </>
);

Index.getInitialProps = async () => {
  const quotes = await fetchBreakingBadQuotes();
  return {
    quotes
  };
};

export default Index;
