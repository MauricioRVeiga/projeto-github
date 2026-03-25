export type Repository = {
  id: string;
  name: string;
  description: string;
  language: string;
  stars: number;
  forks: number;
  updatedAt: string;
  isPrivate?: boolean;
};

export type UserProfile = {
  avatarUrl: string;
  name: string;
  username: string;
  bio: string;
  location?: string;
  company?: string;
  website?: string;
  twitter?: string;
  repos: number;
  followers: number;
  following: number;
  pinnedRepos: Repository[];
  organizations?: string[];
  status?: {
    emoji: string;
    message: string;
  };
  contributions?: {
    thisYear: number;
    lastYear: number;
  };
};
