export interface ProjectImage {
  /** A path under `public/`. Vite copies that folder to the site root. */
  src: string;
  /** Describes the picture for the case where it fails to load. */
  alt: string;
}

export interface Project {
  name: string;
  summary: string;
  detail: string;
  stack: string[];
  /** The banner on the collapsed card. The card drops it when it is absent. */
  image?: ProjectImage;
  /** The public source. Contract work and unbuilt work carry none. */
  repo?: string;
  href?: string;
  event?: { name: string; href: string };
  /** A draft stays out of the site until the copy is ready. */
  draft?: boolean;
}

export const githubProfile = 'https://github.com/Borghese-Gladiator';

export const projectData: Project[] = [
  {
    name: 'Scrape as a Service',
    summary: 'A scraping platform that scales on the depth of the job queue.',
    detail:
      'A visitor submits a list of URLs. The FastAPI server queues each job in Redis and Kafka, and the worker count follows the queue depth. A Python worker scrapes the target, stores the raw page in Minio, then sends the HTML to a local Ollama model that parses it into structured data. The worker publishes a completion notice to Redis, and the React front end collects the result by job id.',
    stack: ['Python', 'FastAPI', 'Kafka', 'Redis', 'Minio', 'Ollama', 'Docker'],
    repo: 'https://github.com/Borghese-Gladiator/scrape-as-a-service',
  },
  {
    name: 'Financial Report RAG',
    summary: 'An AI chatbot that answers a question about my own transactions.',
    detail:
      'The chatbot generates a table, a graph, and an insight about my transactions, which means the category, the merchant, and the card use. It reads Plaid data from Lunch Money and answers with RAG over a FAISS index and WordLlama embeddings. Llama 3 writes the answer, so the transaction data never leaves the machine.',
    stack: ['Python', 'Llama 3', 'RAG', 'FAISS', 'Plaid'],
    image: {
      src: '/images/financial-report-rag.png',
      alt: 'The chat window of the expense assistant.',
    },
    repo: 'https://github.com/Borghese-Gladiator/lm-expense-chatbot-pwa',
    href: 'https://lm-expense-chatbot-pwa.vercel.app',
  },
  {
    name: 'Follow Phone Robot',
    summary: 'A robot box that drives after your phone, so you carry nothing.',
    detail:
      'The box holds the beers, the beach equipment, or the picnic, then follows the owner at walking pace. An ESP32 runs a two wheel differential drive and avoids an obstacle with a pair of ultrasonic sensors. It reports the battery, the motor state, and the position estimate to the phone over Bluetooth Low Energy. The phone app maps the live position of both the owner and the robot. The project is a work in progress.',
    stack: ['ESP32', 'Bluetooth LE', 'C++', 'Robotics'],
    repo: 'https://github.com/Borghese-Gladiator/wip-mobile-box',
  },
  {
    name: 'Creaticles DApp',
    summary: 'Contract work on a Web3 voting platform.',
    detail:
      'A creator posts a contest and the holders vote on the entries. The front end is Next.js with MongoDB. The smart contracts are Solidity, built and tested with Hardhat and called with Ethers. The DApp runs on Vercel and the contract runs on the Ropsten Ethereum test network.',
    stack: ['Next.js', 'Solidity', 'Hardhat', 'Ethers', 'MongoDB'],
  },
  {
    name: 'Motion Music Controller',
    summary: 'Controls music with a hand gesture over a Leap Motion sensor.',
    detail:
      'This project was a top 3 finalist of 121 teams and 1000 hackers. The demonstration decided it. A judge could use the Leap Motion sensor and run an audio command by hand. The Python backend reads the Cartesian coordinates of the finger tips from the Leap Motion SDK and detects the gesture. It forwards the command to the front end, which updates the command indicator.',
    stack: ['Python', 'Leap Motion SDK', 'JavaScript'],
    repo: 'https://github.com/Borghese-Gladiator/hackumassvi',
    event: { name: 'HackUMass 2018', href: 'https://hackumass.com/' },
  },
  {
    // TODO: write this card. It needs the real summary, the real detail, the
    // real stack, and a repository link. Delete `draft` to publish it.
    name: 'Stock Trader',
    summary: 'TODO: one sentence on what the trader does.',
    detail: 'TODO: the strategy, the data source, and the result.',
    stack: ['Python'],
    draft: true,
  },
];

export const visibleProjects = projectData.filter((project) => !project.draft);
