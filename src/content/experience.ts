export interface Role {
  company: string;
  title: string;
  dateText: string;
  location: string;
  team: string;
  summary: string;
  skills: string[];
  highlights: string[];
}

export const experienceData: Role[] = [
  {
    company: 'Klaviyo',
    title: 'Software Engineer III',
    dateText: 'From January 2024',
    location: 'Boston, MA',
    team: 'Reporting Query Platform',
    summary:
      'I own the platform that calculates marketing performance for every customer.',
    skills: ['Python', 'AWS', 'Terraform', 'Grafana', 'Locust', 'LangChain'],
    highlights: [
      'Manage the Reporting Query Platform. It calculates marketing performance by joining raw event data with databases from user-defined queries.',
      'Maintain an external API and an internal service that standardize reporting for every customer. The platform also produces public reports such as the 2024 Consumer Spending Report.',
      'Implemented an asynchronous export service API. It runs a query, then stores the formatted CSV result in AWS S3 and Aurora. The Report Builder BI tool for CDP customers calls it directly.',
      'Supported Black Friday and Cyber Monday performance planning. Wrote load tests with Locust, scaled AWS with Terraform, and built a Mission Control Grafana dashboard with quick debug links and error thresholds that page through PagerDuty.',
      'Developed a proof of concept for the Ask the Data AI chatbot at an internal hackathon. It uses RAG with LangChain and the OpenAI chat completions API to generate a graph, a table, and an insight from a user prompt.',
      'Integrated the proprietary backend translation framework into the query platform results, so a report header reads in the language of the customer.',
    ],
  },
  {
    company: 'Rewst',
    title: 'Software Engineer II',
    dateText: 'June 2022 – November 2023',
    location: 'Remote',
    team: 'Rewst Automation Platform',
    summary:
      'Built features across a monorepo: a Next.js front end, an Apollo GraphQL API, and a Faust Python engine on AWS.',
    skills: [
      'Python',
      'JavaScript',
      'Next.js',
      'GraphQL',
      'SQLAlchemy',
      'Playwright',
      'Pytest',
    ],
    highlights: [
      'Developed features for the Rewst Automation Platform in a monorepo. It holds a Next.js front end, an Apollo GraphQL API, and a Faust Python engine on AWS. Tested each feature with Pytest integration tests and Playwright E2E tests.',
      'Built a SQL integration with SQLAlchemy, so a client manages its own Postgres, MSSQL, or MySQL database.',
      'Built a Liongard integration over REST. It loads client resources and automates attack surface management.',
      'Built a React Jinja editor, so a customer debugs the Jinja template code of a workflow against their own data.',
      'Built cron data pruning for data compliance. A Faust cron job reads the org settings of each tenant in the multi-tenant platform.',
      'Built a Grafana dashboard on a SQL data source that reports workflow usage. It exports a CSV for investors.',
    ],
  },
  {
    company: 'Dell EMC',
    title: 'Software Engineer I',
    dateText: 'May 2021 – June 2022',
    location: 'Hopkinton, MA',
    team: 'CloudIQ, Analytics team',
    summary: 'Data engineering and test automation on the CloudIQ analytics platform.',
    skills: ['Python', 'Java', 'Selenium', 'Jenkins', 'Elasticsearch', 'Pandas'],
    highlights: [
      'Supported development for the CloudIQ analytics platform for storage devices on Pivotal Cloud Foundry.',
      'Helped migrate time series similarity from an R microservice to a Python library for license compliance. The feature lets a customer troubleshoot resources in contention.',
      'Validated the new library against the R service with production data from 1000 systems. Aggregated the data with Pandas, saved the reports to Elasticsearch, and summarized them in Kibana.',
      'Designed a test automation system that separates a service failure from an environment problem, then reconfigures and restarts every data processor that the test needs. Written in Python and Selenium on Jenkins.',
      'Maintained the E2E integration test framework for the analytics team, built with Java, Maven, and Selenium.',
    ],
  },
];
