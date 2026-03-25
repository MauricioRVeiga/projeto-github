import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

type Props = {
  organizations: string[];
};

export const Organizations: React.FC<Props> = ({ organizations }) => {
  if (!organizations || organizations.length === 0) return null;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Organizations</Text>
      <View style={styles.orgsContainer}>
        {organizations.map((org, index) => (
          <View key={index} style={styles.orgItem}>
            <View style={styles.orgAvatar}>
              <Text style={styles.orgInitial}>{org.charAt(0).toUpperCase()}</Text>
            </View>
            <Text style={styles.orgName}>{org}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  title: {
    color: '#f0f6fc',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 12,
  },
  orgsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  orgItem: {
    alignItems: 'center',
    marginRight: 16,
    marginBottom: 12,
  },
  orgAvatar: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: '#30363d',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 4,
  },
  orgInitial: {
    color: '#c9d1d9',
    fontSize: 18,
    fontWeight: '600',
  },
  orgName: {
    color: '#8b949e',
    fontSize: 12,
    textAlign: 'center',
  },
});