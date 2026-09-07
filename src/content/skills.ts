export interface SkillGroup {
  name: string;
  score: number;
  tools: string[];
}

/** `score` runs from 0 to 10. */
export const skillsData: SkillGroup[] = [
  {
    name: 'JavaScript',
    score: 10,
    tools: ['React', 'TypeScript', 'ES6', 'Express', 'Passport', 'react-i18next'],
  },
  {
    name: 'Python',
    score: 8,
    tools: ['Nose', 'Flask', 'Beautiful Soup', 'OpenCV', 'Pandas'],
  },
  {
    name: 'Java',
    score: 8,
    tools: ['Jersey', 'Gradle', 'Maven', 'Tomcat'],
  },
];
