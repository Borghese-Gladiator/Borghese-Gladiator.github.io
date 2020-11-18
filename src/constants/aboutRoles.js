import React from 'react'
import CodeIcon from '@material-ui/icons/Code';
import DeveloperModeIcon from '@material-ui/icons/DeveloperMode';
import AllOutIcon from '@material-ui/icons/AllOut';

export const aboutRolesData = [
  {
    title: "DevOps",
    icon: () => { return <CodeIcon style={{fontSize: 80}} />},
    titleText: "DevOps Engineer",
    desc: "I love how DevOps automates QA and Release Engineering, but still pushes quality code.",
    useDesc: "CI/CD Infrastructure",
    toolNamesList: [
      "Jenkins", "GitLab", "Docker"
    ]
  },
  {
    title: "FrontEnd",
    icon: () => { return <DeveloperModeIcon style={{fontSize: 80}} /> },
    titleText: "Front End Dev",
    desc: "I value how front end showcases my work with clean state management and fast load times",
    useDesc: "Web & Mobile Apps",
    toolNamesList: [
      "React", "Angular", "CSS3 & Flexbox"
    ]
  },
  {
    title: "Agile",
    icon: () => { return <AllOutIcon style={{fontSize: 80}} /> },
    titleText: "Agile Goal Setter",
    desc: "I prioritize using Agile in projects for efficiency, accountability, and to progress towards SMART goals (even in groups).",
    useDesc: "Agile in Practice",
    toolNamesList: [
      "Jira", "Scrum for Trello", "Kanban"
    ]
  }
]