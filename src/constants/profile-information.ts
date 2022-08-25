import { IProfile } from '../types/global';

export const PROFILE_INFORMATION: IProfile = {
  foreName: 'Dimas',
  surName: 'Mukti',

  fullName: 'Dimas Bagus Prayogo Mukti',

  title: 'JavaScript Developer',

  phone: '+6287748207313',
  email: 'dimas.bagus.pm@gmail.com',
  citizen: 'Yogyakarta, Indonesia',

  socialMedia: {
    github: {
      name: 'GitHub',
      url: 'https://github.com/dimasbaguspm',
    },
    hackerRank: {
      name: 'HackerRank',
      url: 'https://www.hackerrank.com/dimasbaguspm',
    },
    upWork: {
      name: 'UpWork',
      url: 'https://www.upwork.com/freelancers/~014d420038e64a64a6',
    },
    LinkedIn: {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/dimasbaguspm/',
    },
  },

  languages: {
    english: {
      name: 'English',
      status: 'Fluent',
    },
    indonesia: {
      name: 'Indonesia',
      status: 'Native',
    },
  },

  experiencesProgrammingLanguages: ['TypeScript', 'JavaScript', 'CSS', 'HTML'],
  // experiencesProgrammingLanguages: ['TypeScript', 'JavaScript', 'Rust'],

  behaviorStacks: [
    'React',
    'Next.JS',
    'React Query',
    'React Hook Form',
    'Yup',
    'Zod',
    'GraphQL',
    'Git',
    'Jest',
    'React Testing Library',
    'GraphQL',
    'REST API',
    'Linaria',
  ],
};
