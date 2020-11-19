import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import Landing from '../components/Landing'
import About from '../components/About'
import AboutRoles from '../components/AboutRoles'
import ExperienceTimeline from '../components/ExperienceTimeline'
import ProjectList from '../components/ProjectList';
import SkillsList from '../components/Skills';
import Language from '../components/Language'

import { currentStatusText, aboutText } from '../constants/about'
import { aboutRolesData } from '../constants/aboutRoles'
import { experienceData } from '../constants/experience'
import { projectData } from '../constants/projects'
import { skillsData } from '../constants/skills';

import './HomePage.css'

export default function HomePage() {
  return (
    <div id="home">
      <ScrollAnimation animateIn="fadeIn">
        <Landing id="home" />
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeIn">
        <About id="about" currentStatusText={currentStatusText} aboutText={aboutText} />
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeIn">
        <AboutRoles aboutRolesData={aboutRolesData} />
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeIn">
        <ExperienceTimeline id="experience" experienceData={experienceData} />
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeIn">
        <ProjectList id="projects" projectData={projectData} />
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeIn">
        <SkillsList id="skills" skillsData={skillsData} />
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeIn">
        <Language id="languages" />
      </ScrollAnimation>
    </div>
  )
}