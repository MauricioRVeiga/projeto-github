import { UserProfile } from '../types';

export const user: UserProfile = {
  avatarUrl: 'https://i.ibb.co/TNz9sB4/Mauricio-Gold-2.jpg',
  name: 'Mauricio Rafael',
  username: 'MauricioRVeiga',
  bio: 'Sou movido por desafios e pela constante evolução. Atualmente, estou aprofundando meus conhecimentos em desenvolvimento fullstack e Power BI',
  location: 'São Paulo, Brazil',
  company: '@goldcreditcapital',
  website: 'https://v3iguinha.dev',
  twitter: 'v3iguinha',
  repos: 19,
  followers: 28,
  following: 86,
  status: {
    emoji: '🚀',
    message: 'Building amazing apps',
  },
  contributions: {
    thisYear: 1247,
    lastYear: 892,
  },
  organizations: ['Rocketseat', 'React-BR'],
  pinnedRepos: [
    {
      id: '1',
      name: 'avatar7',
      description: 'Lib para geração dinâmica de avatars em React Native & React.',
      language: 'TypeScript',
      stars: 63,
      forks: 1,
      updatedAt: '2024-01-15',
    },
    {
      id: '2',
      name: 'pokedex-api',
      description: 'API simples para consumo com pokemons.',
      language: 'JavaScript',
      stars: 29,
      forks: 4,
      updatedAt: '2023-12-20',
    },
    {
      id: '3',
      name: 'portfolio',
      description: 'Site pessoal com animações e projetos destacados.',
      language: 'React',
      stars: 45,
      forks: 8,
      updatedAt: '2024-02-01',
    },
  ],
};
