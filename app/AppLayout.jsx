import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ThemedText } from '@/components/ThemedText';

const AppLayout = ({ children }) => {
  return (
    <View style={styles.container}>
      {/* Sidhuvud */}
      <View style={styles.header}>
        <ThemedText type="title">Min Expo App</ThemedText>
      </View>

      {/* Dynamiskt innehåll via children, kan innehålla vad som helst ! */}
      <View style={styles.content}>{children}</View>

      {/* Sidfot */}
      <View style={styles.footer}>
        <ThemedText>© 2025 Min Expo App</ThemedText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 20,
    backgroundColor: '#A1CEDC',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  footer: {
    padding: 10,
    backgroundColor: '#A1CEDC',
    alignItems: 'center',
  },
});

export default AppLayout;
