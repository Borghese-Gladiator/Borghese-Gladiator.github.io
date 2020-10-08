import React from 'react';
import Landing from '../components/Landing'
import About from '../components/About'
import AboutRoles from '../components/AboutRoles'
import ExperienceTimeline from '../components/ExperienceTimeline'
import ProjectList from '../components/ProjectList'
import Language from '../components/Language'

import { aboutText } from '../constants/about'
import { aboutRolesData } from '../constants/aboutRoles'
import { experienceData } from '../constants/experience'
import { projectData } from '../constants/projects'

export default function HomePage() {
  return (
    <div style={{backgroundColor:"#ededed", paddingBottom: '50px',}}>
      <Landing id="home" />
      <About id="about" aboutText={aboutText} />
      <AboutRoles aboutRolesData={aboutRolesData} />
      <ExperienceTimeline id="experience" experienceData={experienceData} />
      <ProjectList id="projects" projectData={projectData} />
      <Language id="languages" />
    </div>
  )
}