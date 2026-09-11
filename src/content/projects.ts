export interface Project {
  name: string;
  summary: string;
  detail: string;
  stack: string[];
  href?: string;
  event?: { name: string; href: string };
}

export const projectData: Project[] = [
  {
    name: 'Financial Report RAG',
    summary: 'An AI chatbot that answers a question about my own transactions.',
    detail:
      'The chatbot generates a table, a graph, and an insight about my transactions, which means the category, the merchant, and the card use. It reads Plaid data from Lunch Money and answers with RAG over a FAISS index and WordLlama embeddings. Llama 3 writes the answer, so the transaction data never leaves the machine.',
    stack: ['Python', 'Llama 3', 'RAG', 'FAISS', 'Plaid'],
  },
  {
    name: 'Creaticles DApp',
    summary: 'Contract work on a Web3 voting platform.',
    detail:
      'A creator posts a contest and the holders vote on the entries. The front end is Next.js with MongoDB. The smart contracts are Solidity, built and tested with Hardhat and called with Ethers. The DApp runs on Vercel and the contract runs on the Ropsten Ethereum test network.',
    stack: ['Next.js', 'Solidity', 'Hardhat', 'Ethers', 'MongoDB'],
  },
  {
    name: 'Website IT Chatbot',
    summary: 'An IT support chatbot that embeds in a web page.',
    detail:
      'The chatbot answers a common IT question in the page itself, so the visitor does not open a ticket for a known problem.',
    stack: ['Python', 'JavaScript', 'NLP'],
  },
  {
    name: 'NLP Stock Predictor',
    summary: 'Sentiment analysis over scraped MarketWatch articles.',
    detail:
      'A scraper collects the MarketWatch articles for a ticker. A sentiment model scores each article. The score becomes a signal for the price direction.',
    stack: ['Python', 'Beautiful Soup', 'NLP', 'Pandas'],
  },
  {
    name: 'Hololive Audio Redirect',
    summary: 'Redirects an MP3 to the microphone input with the WebRTC API.',
    detail:
      'The page captures an audio file and routes it to the microphone stream, so any call application plays the file as if it were the microphone.',
    stack: ['JavaScript', 'WebRTC', 'React'],
    href: 'https://borghese-gladiator.github.io/hololive-audio/#/',
  },
  {
    name: 'Community Hero',
    summary: 'An Android app that lets a neighborhood create and join events.',
    detail:
      'People collaborate to make and join social events for the greater good. A user joins an event from another user or an admin, ranked by proximity. The app records the events of a user in a portfolio and generates a social welfare score. It calls the Transposit API to run sentiment analysis on an event request that may be negative.',
    stack: ['Android', 'Java', 'Transposit API'],
    href: 'https://dashboard.hackumass.com/projects/63',
    event: { name: 'HackUMass 2019, Transposit winner', href: 'https://hackumass.com/' },
  },
  {
    name: 'IMDB Web Scraper',
    summary: 'Scrapes IMDB for a hit and sends a notification.',
    detail:
      'The scraper watches an IMDB page for a match, then notifies the user. It runs on a schedule, so the user does not check the page.',
    stack: ['Python', 'Beautiful Soup'],
    event: { name: 'LexHack', href: 'https://lexhack.devpost.com/' },
  },
  {
    name: 'Motion Music Controller',
    summary: 'Controls music with a hand gesture over a Leap Motion sensor.',
    detail:
      'This project was a top 3 finalist of 121 teams and 1000 hackers. The demonstration decided it. A judge could use the Leap Motion sensor and run an audio command by hand. The Python backend reads the Cartesian coordinates of the finger tips from the Leap Motion SDK and detects the gesture. It forwards the command to the front end, which updates the command indicator.',
    stack: ['Python', 'Leap Motion SDK', 'JavaScript'],
    event: { name: 'HackUMass 2018', href: 'https://hackumass.com/' },
  },
];
