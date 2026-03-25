import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type Props = {
  thisYear: number;
  lastYear: number;
};

export const Contributions: React.FC<Props> = ({ thisYear, lastYear }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contributions</Text>

      <View style={styles.statsContainer}>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>{thisYear.toLocaleString()}</Text>
          <Text style={styles.statLabel}>This year</Text>
        </View>

        <View style={styles.statItem}>
          <Text style={styles.statNumber}>{lastYear.toLocaleString()}</Text>
          <Text style={styles.statLabel}>Last year</Text>
        </View>
      </View>

      {/* Simplified contribution graph - in a real app, this would be more complex */}
      <View style={styles.graphContainer}>
        <Text style={styles.graphTitle}>Contribution activity</Text>
        <View style={styles.graphPlaceholder}>
          <Text style={styles.graphText}>
            {thisYear} contributions in the last year
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
  },
  title: {
    color: '#f0f6fc',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 16,
  },
  statsContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  statItem: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#161b22',
    borderRadius: 8,
    padding: 16,
    marginHorizontal: 4,
    borderWidth: 1,
    borderColor: '#30363d',
  },
  statNumber: {
    color: '#f0f6fc',
    fontSize: 24,
    fontWeight: '700',
  },
  statLabel: {
    color: '#8b949e',
    fontSize: 14,
    marginTop: 4,
  },
  graphContainer: {
    backgroundColor: '#161b22',
    borderRadius: 8,
    padding: 16,
    borderWidth: 1,
    borderColor: '#30363d',
  },
  graphTitle: {
    color: '#f0f6fc',
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 12,
  },
  graphPlaceholder: {
    alignItems: 'center',
    padding: 20,
  },
  graphText: {
    color: '#8b949e',
    fontSize: 14,
  },
});