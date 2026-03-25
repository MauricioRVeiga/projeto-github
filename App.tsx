import React from 'react';
import { SafeAreaView, ScrollView, View, Text, StyleSheet, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { user } from './src/data/user';
import { RepoCard } from './src/components/RepoCard';
import { StatusBadge } from './src/components/StatusBadge';
import { ProfileInfo } from './src/components/ProfileInfo';
import { Organizations } from './src/components/Organizations';
import { Contributions } from './src/components/Contributions';

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style='light' />
      <ScrollView contentContainerStyle={styles.container}>
        {/* Header Section */}
        <View style={styles.header}>
          <Image source={{ uri: user.avatarUrl }} style={styles.avatar} />
          <View style={styles.headerInfo}>
            <Text style={styles.name}>{user.name}</Text>
            <Text style={styles.username}>{user.username}</Text>
          </View>
        </View>

        {/* Status Badge */}
        {user.status && (
          <StatusBadge emoji={user.status.emoji} message={user.status.message} />
        )}

        {/* Bio */}
        <Text style={styles.bio}>{user.bio}</Text>

        {/* Profile Info */}
        <ProfileInfo
          location={user.location}
          company={user.company}
          website={user.website}
          twitter={user.twitter}
        />

        {/* Stats */}
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>{user.repos}</Text>
            <Text style={styles.statLabel}>repositories</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>{user.followers}</Text>
            <Text style={styles.statLabel}>followers</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>{user.following}</Text>
            <Text style={styles.statLabel}>following</Text>
          </View>
        </View>

        {/* Organizations */}
        {user.organizations && (
          <Organizations organizations={user.organizations} />
        )}

        {/* Pinned Repositories */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Pinned</Text>
          {user.pinnedRepos.map((repo) => (
            <RepoCard key={repo.id} repo={repo} />
          ))}
        </View>

        {/* Contributions */}
        {user.contributions && (
          <Contributions
            thisYear={user.contributions.thisYear}
            lastYear={user.contributions.lastYear}
          />
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#0d1117',
  },
  container: {
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 16,
    borderWidth: 2,
    borderColor: '#30363d',
  },
  headerInfo: {
    flex: 1,
  },
  name: {
    color: '#f0f6fc',
    fontSize: 26,
    fontWeight: '700',
    marginBottom: 4,
  },
  username: {
    color: '#8b949e',
    fontSize: 18,
  },
  bio: {
    color: '#c9d1d9',
    fontSize: 16,
    lineHeight: 24,
    marginTop: 16,
    marginBottom: 16,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#161b22',
    borderRadius: 8,
    padding: 16,
    marginTop: 16,
    borderWidth: 1,
    borderColor: '#30363d',
  },
  statItem: {
    flex: 1,
    alignItems: 'center',
  },
  statValue: {
    color: '#f0f6fc',
    fontSize: 18,
    fontWeight: '700',
  },
  statLabel: {
    color: '#8b949e',
    fontSize: 14,
    marginTop: 4,
  },
  section: {
    marginTop: 24,
  },
  sectionTitle: {
    color: '#f0f6fc',
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 16,
  },
});
