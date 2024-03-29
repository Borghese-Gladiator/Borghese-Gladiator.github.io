// import UMassLogoImg from '../img/umass.png'
import React from 'react'
import Typography from '@material-ui/core/Typography'
import RSASecurityLogoImg from '../img/RSA_Security_Logo.png'
import AvidLogoImg from '../img/avid_logo.png'
import DellEMCImg from '../img/dell_emc_logo.jpg';

export const experienceData = [
  {
    company: "Dell EMC",
    title: "Software Engineer 1",
    dateText: "May 2021 – Present",
    location: "Hopkinton, MA",
    skills: ['Java', 'Python', 'Git', 'Jenkins', 'Agile/Jira', 'Selenium', 'Linux'],
    teamInfo: "CloudIQ - Analytics Team",
    summary: "Entry level software engineering job with both data enginering and testing automation tasks.",
    materialUIDesc: () => {
      return (
        <div>
          <Typography paragraph>May 2021 - Present</Typography>
          <Typography paragraph>
            Migrated time series similarity microservice from R to Python for license compliance and this microservice enables customers to troubleshoot resources in contention.
          </Typography>
          <ul>
            <li>
              <Typography paragraph>
                Investigated legacy R microservice and documented both existing functionality and interconnection to other microservices in Confluence
              </Typography>
            </li>
            <li>
              <Typography paragraph>
                Created new Python common library for time series similarity and deprecated legacy R microservice to reduce CPU/memory usage on Pivotal Cloud Foundry (PCF) and integrated new common library into existing Python microservice.
              </Typography>
            </li>
            <li>
              <Typography paragraph>
                Validated new Python common library results against legacy R microservice using Production performance data of 1000 systems. Aggregated data with Pandas, saved reports to Elasticsearch, and summarized with Kibana
              </Typography>
            </li>
          </ul>
          <Typography paragraph>
            Designed and implemented an intelligent test automation system to re-configure and re-start all required data processors when it detects any microservice failures due to environmental issues. This is written in Python, Selenium on a Jenkins server.
          </Typography>
          <Typography paragraph>
            Refactored existing E2E tests to match updated Angular 9 plugins - numerous selectors were changed.  
          </Typography>
          <Typography paragraph>
            Developed 2 new E2E API tests to validate new powersizer-data-api as part of the Capacity Expansion feature.
          </Typography>
          <Typography paragraph>
            Maintained E2E integration test framework built with Java, Maven, and Selenium.
          </Typography>
        </div>
      )
    },
    desc: ``,
    experienceImage: DellEMCImg,
    color: "#1c8aff",
  },
  {
    company: "RSA Security",
    title: "Software Engineering Intern",
    dateText: "June – July 2020",
    location: "Bedford, MA",
    skills: ['Jenkins', 'Python', 'Git', 'Agile/Jira', 'Linux'],
    teamInfo: "NetWitness Team - SIEM Technology",
    summary: "I setup CD for threat content with Jenkins pipeline list to auto test & auto deploy to production new and modified content.",
    materialUIDesc: () => {
      return (
        <div>
          <Typography paragraph>2020 Summer:</Typography>
          <Typography paragraph>
            Established CI/CD Jenkins Scripted Pipeline that automated testing and deployment of threat content (specifically lua parsers and esa rules).
          </Typography>
          <Typography paragraph>
            Each individual pipeline did one task (eg: run regression test, deploy content from inputted file) and were coordinated by the Scripted Pipeline.
          </Typography>
          <Typography paragraph>
            Created custom scripts to find all modified content, setup for regression tests, aggregate Python nosetest XML reports, and deploy to test production server. This foundation means when all content is added, QA and Release Engineering will have been completely automated for the threat content team.
          </Typography>
          <Typography paragraph>
            Automated Jira (and Zephyr) movement with integration into pipeline. Tickets automatically moved to Ready for Release or Ready for Review depending on test results.
          </Typography>
          <Typography>
            Updated threat_content JSON scenarios from last year's internship to help co-worker with new hardening requirements
          </Typography>
        </div>
      )
    },
    desc: `Established CI/CD Jenkins Scripted Pipeline that automated testing and deployment of threat content (specifically lua parsers and esa rules).
    \nCreated custom scripts to find all modified content, setup for regression tests, aggregate Python nosetest XML reports, and deploy to test production server. This foundation means when all content is added, QA and Release Engineering will have been completely automated for the threat content team.
    \nAutomated Jira (& Zephyr) movement with integration into pipeline. Tickets automatically moved to Ready for Release or Ready for Review depending on test results.
    \nUpdated threat_content JSON scenarios from last year's internship to help co-worker with new hardening requirements`,
    experienceImage: RSASecurityLogoImg,
    color: "#f01e13",
  },
  {
    company: "RSA Security",
    title: "Quality Engineering Intern",
    dateText: "May – August 2019",
    location: "Bedford, MA",
    skills: ['Python', 'Ruby', 'Linux', 'Agile/Jira', 'Git'],
    teamInfo: "NetWitness Team - SIEM Technology",
    summary: "I wrote new Python regression tests for 31 manually tested ESA rules and added a pipeline for my test to the daily build.",
    materialUIDesc: () => {
      return (
        <div>
          <Typography paragraph>2019 Summer:</Typography>
          <Typography paragraph>
            Wrote new Python regression tests for 31 manually tested ESA Rules which use ContextHub data sources, a new feature of the 11.2 release. Created Jenkins pipelines for my regression tests in the daily build on the Bangalore server
          </Typography>
          <Typography paragraph>
            Added automatic import of ContextHub lists and enrichment sources functionality to UniTe framework (a homegrown Python testing framework).
          </Typography>
          <Typography paragraph>
            Created JSON threat content scenarios for dataconfig tool to automate hardening process: deploying pre-packaged threat content from Live and custom content from a local directory.
          </Typography>
        </div>
      )
    },
    desc: `Wrote new Python regression tests for 31 manually tested ESA Rules which use ContextHub data sources, a new feature of the 11.2 release. Created Jenkins pipelines for my regression tests in the daily build on the Bangalore server
    \nAdded automatic import of ContextHub lists and enrichment sources functionality to UniTe framework (a homegrown Python testing framework).
    \nImplemented new Ruby functionality for Data As A Deliverable (dataconfig) tool to deploy live content onto any service (Decoder, Log Decoder, Correlation Server, etc.)
    \nCreated JSON threat content scenarios for dataconfig tool to automate hardening process: deploying pre-packaged threat content from Live and custom content from a local directory.`,
    experienceImage: RSASecurityLogoImg,
    color: "#f01e13",
  },
  {
    company: "Avid Technology",
    title: "Software Engineering Intern",
    dateText: "July – August 2018",
    location: "Burlington, MA",
    skills: ['PSH', 'Git', 'Gradle', 'Jenkins', 'VirtualBox'],
    teamInfo: "Media Composer Team - Video Editing Software",
    summary: "I setup CD for Avid Installers of 3 Services & tested the VCS migration from AccuRev to GitLab.",
    materialUIDesc: () => {
      return (
        <div>
          <Typography paragraph>2018 Summer:</Typography>
          <Typography paragraph>
            Implemented Powershell scripts to migrate source trees from AccuRev to GitLab. These scripts reduced source tree from 20 GB to 1.9 MB by moving binaries to an internal Nexus server and generating Gradle properties files to download at runtime.
          </Typography>
          <Typography paragraph>
            Tested the migration by hosting a private GitLab server with a CentOS 7 VM on VirtualBox and set up CI to test the build.
          </Typography>
          <Typography paragraph>
            Created Jenkins pipelines and executors to download nightly builds from internal server and run Windows Batch scripts automatically to test the installers.
          </Typography>
        </div>
      )
    },
    desc: `Implemented Powershell scripts to migrate source trees from AccuRev to GitLab. These scripts reduced source tree from 20 GB to 1.9 MB by moving binaries to an internal Nexus server and generating Gradle properties files to download at runtime.
    \nTested the migration by hosting a private GitLab server with a CentOS 7 VM on VirtualBox and set up CI to test the build.
    \nCreated Jenkins pipelines and executors to download nightly builds from internal server and run Windows Batch scripts automatically to test the installers.`,
    experienceImage: AvidLogoImg,
    color: "#6d1787",
  }
]