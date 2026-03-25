import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type Props = {
  emoji: string;
  message: string;
};

export const StatusBadge: React.FC<Props> = ({ emoji, message }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.emoji}>{emoji}</Text>
      <Text style={styles.message}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#0d1117',
    borderWidth: 1,
    borderColor: '#30363d',
    borderRadius: 24,
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginTop: 8,
    alignSelf: 'flex-start',
  },
  emoji: {
    fontSize: 14,
    marginRight: 6,
  },
  message: {
    color: '#c9d1d9',
    fontSize: 14,
  },
});