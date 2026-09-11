export interface AboutBlock {
  /** A short label in the left column. It replaces the old card heading. */
  label: string;
  paragraphs: string[];
}

/** `**name**` marks a word that reads at full strength. See `splitEmphasis`. */
export const aboutLead =
  'Hi, I am Tim. I build the systems that turn raw event data into a number somebody can act on, and I like the part where a slow manual step disappears.';

export const aboutBlocks: AboutBlock[] = [
  {
    label: 'Now',
    paragraphs: [
      'I am a Software Engineer III at **Klaviyo**, where I own the **Reporting Query Platform**. It joins raw event data with user-defined queries to calculate marketing performance.',
      'The platform backs the external reporting API and public work such as the **2024 Consumer Spending Report**. I built the asynchronous export service behind **Report Builder**, and every Black Friday I keep the platform standing with load tests, autoscaling, and a dashboard that pages me before a customer notices.',
    ],
  },
  {
    label: 'Before',
    paragraphs: [
      'I built features across a Next.js and GraphQL monorepo at **Rewst**, and I worked on the CloudIQ analytics platform at **Dell EMC**. Earlier still I spent three summers on CI/CD and test automation at **RSA Security** and **Avid Technology**, which is where I learned that the build pipeline is a product too.',
    ],
  },
  {
    label: 'Outside work',
    paragraphs: [
      'Language came before code for me. I speak English, Chinese, and Japanese, plus enough Spanish to be dangerous. That interest turned into **NLP** work: a chatbot that reads my own transaction history, a prototype that answers a question about a dashboard.',
      'The rest of the time I build small web utilities that make life more fun, which is the most honest description of the hobby I have.',
    ],
  },
];

export const aboutFacts = [
  'Boston, MA',
  '5 years shipping',
  'Python and TypeScript',
  '4 spoken languages',
];
