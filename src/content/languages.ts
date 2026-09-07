export interface SpokenLanguage {
  name: string;
  proficiency: string;
  /** A percent from 0 to 100. */
  level: number;
}

export const languageData: SpokenLanguage[] = [
  { name: 'English', proficiency: 'Native', level: 100 },
  {
    name: 'Chinese (简体中文)',
    proficiency: 'Professional working proficiency',
    level: 80,
  },
  { name: 'Japanese (日本語)', proficiency: 'Proficient', level: 60 },
  { name: 'Spanish (Español)', proficiency: 'Elementary proficiency', level: 30 },
];
