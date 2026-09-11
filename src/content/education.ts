export interface Internship {
  company: string;
  title: string;
  dateText: string;
  location: string;
  team: string;
  summary: string;
  skills: string[];
}

export interface Education {
  school: string;
  degree: string;
  field: string;
  dateText: string;
  location: string;
  detail: string;
  internships: Internship[];
}

export const education: Education = {
  school: 'University of Massachusetts Amherst',
  degree: "Bachelor's degree",
  field: 'Computer Science',
  dateText: 'May 2021',
  location: 'Amherst, MA',
  detail: 'GPA 3.6 / 4.0',
  internships: [
    {
      company: 'RSA Security',
      title: 'Software Engineering Intern',
      dateText: 'June – July 2020',
      location: 'Bedford, MA',
      team: 'NetWitness, SIEM technology',
      summary:
        'Set up a Jenkins CD pipeline that tests and deploys threat content. Python scripts discover new content from LibHQ and deploy it to production on VMware vSphere virtual machines.',
      skills: ['Jenkins', 'Python', 'VMware vSphere'],
    },
    {
      company: 'RSA Security',
      title: 'Quality Engineering Intern',
      dateText: 'May – August 2019',
      location: 'Bedford, MA',
      team: 'NetWitness, SIEM technology',
      summary:
        'Wrote a Python nosetest suite for 31 manually tested rules. Added ContextHub import list functionality to the integration test framework, then added the suite to the Jenkins daily build.',
      skills: ['Python', 'Ruby', 'Jenkins', 'Linux'],
    },
    {
      company: 'Avid Technology',
      title: 'Software Engineering Intern',
      dateText: 'July – August 2018',
      location: 'Burlington, MA',
      team: 'Media Composer, video editing software',
      summary:
        'Cut the source tree from 20 GB to 1.9 GB. PowerShell scripts move the binaries to an internal Nexus server and generate the Gradle properties files that download them at build time.',
      skills: ['PowerShell', 'Gradle', 'Git', 'Jenkins'],
    },
  ],
};
