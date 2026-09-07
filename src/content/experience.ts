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
    company: 'Dell EMC',
    title: 'Software Engineer 1',
    dateText: 'From May 2021',
    location: 'Hopkinton, MA',
    team: 'CloudIQ, Analytics team',
    summary: 'Data engineering and test automation on the analytics platform.',
    skills: ['Java', 'Python', 'Git', 'Jenkins', 'Jira', 'Selenium', 'Linux'],
    highlights: [
      'Migrated a time series similarity microservice from R to Python for license compliance. The service lets a customer troubleshoot resources in contention.',
      'Documented the functionality of the legacy R service and its links to the other services in Confluence.',
      'Built a Python common library for time series similarity, then deprecated the R service. This cut CPU and memory use on Pivotal Cloud Foundry.',
      'Validated the new library against the R service with production data from 1000 systems. Aggregated the data with Pandas, saved the reports to Elasticsearch, and summarized them in Kibana.',
      'Designed a test automation system that detects a service failure from an environment problem, then reconfigures and restarts every data processor that the test needs. Written in Python and Selenium on Jenkins.',
      'Refactored the E2E tests for the Angular 9 plugin update, which changed many selectors.',
      'Added 2 E2E API tests for the powersizer data API, part of the capacity expansion feature.',
      'Maintained the E2E integration test framework built with Java, Maven, and Selenium.',
    ],
  },
  {
    company: 'RSA Security',
    title: 'Software Engineering Intern',
    dateText: 'June – July 2020',
    location: 'Bedford, MA',
    team: 'NetWitness, SIEM technology',
    summary:
      'Set up continuous delivery for threat content. New and modified content tests and deploys itself.',
    skills: ['Jenkins', 'Python', 'Git', 'Jira', 'Linux'],
    highlights: [
      'Established a Jenkins scripted pipeline that tests and deploys threat content, which means the lua parsers and the ESA rules.',
      'Gave each pipeline one task, such as run the regression test or deploy the content of one file. The scripted pipeline coordinates them.',
      'Wrote scripts that find every modified file, set up the regression tests, aggregate the Python nosetest XML reports, and deploy to the test production server.',
      'Integrated Jira and Zephyr into the pipeline. A ticket moves itself to Ready for Release or Ready for Review from the test result.',
      'Updated the threat content JSON scenarios from the previous internship for the new hardening requirements.',
    ],
  },
  {
    company: 'RSA Security',
    title: 'Quality Engineering Intern',
    dateText: 'May – August 2019',
    location: 'Bedford, MA',
    team: 'NetWitness, SIEM technology',
    summary:
      'Wrote Python regression tests for 31 manually tested ESA rules and added them to the daily build.',
    skills: ['Python', 'Ruby', 'Linux', 'Jira', 'Git'],
    highlights: [
      'Wrote Python regression tests for 31 manually tested ESA rules that use ContextHub data sources, a new feature of the 11.2 release.',
      'Created the Jenkins pipelines for those tests in the daily build on the Bangalore server.',
      'Added automatic import of the ContextHub lists and the enrichment sources to UniTe, an internal Python test framework.',
      'Implemented Ruby functionality in the dataconfig tool to deploy live content to any service, such as a Decoder, a Log Decoder, or a Correlation Server.',
      'Created JSON threat content scenarios for the dataconfig tool to automate the hardening process. It deploys packaged content from Live and custom content from a local directory.',
    ],
  },
  {
    company: 'Avid Technology',
    title: 'Software Engineering Intern',
    dateText: 'July – August 2018',
    location: 'Burlington, MA',
    team: 'Media Composer, video editing software',
    summary:
      'Set up continuous delivery for 3 Avid installers and tested the move from AccuRev to GitLab.',
    skills: ['PowerShell', 'Git', 'Gradle', 'Jenkins', 'VirtualBox'],
    highlights: [
      'Wrote PowerShell scripts that migrate a source tree from AccuRev to GitLab. The scripts cut the tree from 20 GB to 1.9 MB. They move the binaries to an internal Nexus server and generate the Gradle properties files that download them at build time.',
      'Tested the migration on a private GitLab server, hosted on a CentOS 7 virtual machine in VirtualBox, then set up CI to test the build.',
      'Created Jenkins pipelines and executors that download the nightly build from the internal server and run the Windows batch scripts that test the installers.',
    ],
  },
];
