import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';

type Props = {
  location?: string;
  company?: string;
  website?: string;
  twitter?: string;
};

export const ProfileInfo: React.FC<Props> = ({ location, company, website, twitter }) => {
  const handleLinkPress = (url: string) => {
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      {location && (
        <View style={styles.infoItem}>
          <Text style={styles.icon}>📍</Text>
          <Text style={styles.text}>{location}</Text>
        </View>
      )}

      {company && (
        <View style={styles.infoItem}>
          <Text style={styles.icon}>🏢</Text>
          <Text style={styles.text}>{company}</Text>
        </View>
      )}

      {website && (
        <TouchableOpacity
          style={styles.infoItem}
          onPress={() => handleLinkPress(website)}
        >
          <Text style={styles.icon}>🔗</Text>
          <Text style={styles.link}>{website.replace('https://', '')}</Text>
        </TouchableOpacity>
      )}

      {twitter && (
        <TouchableOpacity
          style={styles.infoItem}
          onPress={() => handleLinkPress(`https://twitter.com/${twitter}`)}
        >
          <Text style={styles.icon}>🐦</Text>
          <Text style={styles.link}>@{twitter}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 12,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  icon: {
    fontSize: 16,
    marginRight: 8,
    width: 20,
    textAlign: 'center',
  },
  text: {
    color: '#c9d1d9',
    fontSize: 14,
  },
  link: {
    color: '#58a6ff',
    fontSize: 14,
    textDecorationLine: 'underline',
  },
});