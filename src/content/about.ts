export interface Approach {
  title: string;
  summary: string;
  practice: string;
  tools: string[];
}

export const aboutText = [
  'I studied computer science at UMass Amherst and graduated in May 2021.',
  'I work on linguistics, deep learning, and NLP. My greatest passion is building web utilities that make life more fun.',
];

export const statusText = 'Software engineer at Klaviyo.';

export const approachData: Approach[] = [
  {
    title: 'DevOps',
    summary:
      'DevOps automates QA and release engineering, and it still ships quality code.',
    practice: 'CI/CD infrastructure',
    tools: ['Jenkins', 'GitLab', 'Docker'],
  },
  {
    title: 'Front end',
    summary:
      'The front end shows my work. Clean state management and fast load times make it convincing.',
    practice: 'Web and mobile apps',
    tools: ['React', 'TypeScript', 'CSS and flexbox'],
  },
  {
    title: 'Agile',
    summary:
      'Agile gives a project efficiency and accountability. It moves a group toward one goal.',
    practice: 'Agile in practice',
    tools: ['Jira', 'Scrum', 'Kanban'],
  },
];
