import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Repository } from '../types';

type Props = {
  repo: Repository;
};

const getLanguageColor = (language: string): string => {
  const colors: { [key: string]: string } = {
    TypeScript: '#3178c6',
    JavaScript: '#f1e05a',
    React: '#61dafb',
    Python: '#3572A5',
    Java: '#ed8c33',
    'C++': '#f34b7d',
    Go: '#00ADD8',
    Rust: '#dea584',
  };
  return colors[language] || '#586069';
};

export const RepoCard: React.FC<Props> = ({ repo }) => {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.name}>{repo.name}</Text>
        {repo.isPrivate && <Text style={styles.privateBadge}>Private</Text>}
      </View>

      <Text style={styles.description}>{repo.description}</Text>

      <View style={styles.footer}>
        <View style={styles.languageContainer}>
          <View style={[styles.languageDot, { backgroundColor: getLanguageColor(repo.language) }]} />
          <Text style={styles.language}>{repo.language}</Text>
        </View>

        <View style={styles.stats}>
          <Text style={styles.stat}>★ {repo.stars}</Text>
          <Text style={styles.stat}>🍴 {repo.forks}</Text>
        </View>

        <Text style={styles.updated}>Updated {repo.updatedAt}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#161b22',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#30363d',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  name: {
    color: '#f0f6fc',
    fontSize: 16,
    fontWeight: '600',
    marginRight: 8,
  },
  privateBadge: {
    color: '#f85149',
    fontSize: 12,
    backgroundColor: '#0d1117',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#30363d',
  },
  description: {
    color: '#c9d1d9',
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 12,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  languageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  languageDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 6,
  },
  language: {
    color: '#c9d1d9',
    fontSize: 12,
  },
  stats: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  stat: {
    color: '#8b949e',
    fontSize: 12,
    marginRight: 12,
  },
  updated: {
    color: '#8b949e',
    fontSize: 12,
  },
});
