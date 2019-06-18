import Quote from '../components/Quote';
import BreakingBadQuote, {
  fetchBreakingBadQuotes
} from '../containers/BreakingBadQuote';
import BreakingBadCharacter, {
  fetchBreakingBadCharacterByName
} from '../containers/BreakingBadCharacter';
import ProfilePicture from '../components/ProfilePicture';

import Button from 'components/Button';

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
          <Button onClick={() => load()}>Reload</Button>
        </>
      )}
    </BreakingBadQuote>
    <h1>ClientSide</h1>
    <BreakingBadQuote autoload>
      {(quotes, load) => (
        <>
          {quotes.map(QuoteWithPicture)}
          <Button onClick={() => load()}>Reload</Button>
        </>
      )}
    </BreakingBadQuote>
  </>
);

// Index.Layout = Layout;
/*
Index.SEO = {
  Page: {
    title: 'Page Meta Title',
    description: 'This will be the page meta description',
    canonical: 'https://www.canonicalurl.ie/',
    openGraph: {
      url: 'https://www.canonicalurl.ie/',
      title: 'Open Graph Title',
      description: 'Open Graph Description',
      images: [
        {
          url: 'https://www.example.ie/og-image-01.jpg',
          width: 800,
          height: 600,
          alt: 'Og Image Alt'
        },
        {
          url: 'https://www.example.ie/og-image-02.jpg',
          width: 900,
          height: 800,
          alt: 'Og Image Alt Second'
        },
        { url: 'https://www.example.ie/og-image-03.jpg' },
        { url: 'https://www.example.ie/og-image-04.jpg' }
      ]
    }
  },
  ArticleJsonLd: {
    url: "https://example.com/article",
    title: "Article headline",
    images: [
      'https://example.com/photos/1x1/photo.jpg',
      'https://example.com/photos/4x3/photo.jpg',
      'https://example.com/photos/16x9/photo.jpg',
    ],
    datePublished: "2015-02-05T08:00:00+08:00",
    dateModified: "2015-02-05T09:00:00+08:00",
    authorName: "Jane Blogs",
    publisherName: "Gary Meehan",
    publisherLogo: "https://www.example.com/photos/logo.jpg",
    description: "This is a mighty good description of this article.",
  }
}
/**/

Index.getInitialProps = async () => {
  const quotes = await fetchBreakingBadQuotes();
  return {
    quotes
  };
};

export default Index;
