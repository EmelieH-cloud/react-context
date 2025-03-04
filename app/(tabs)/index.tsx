import React from 'react';
import {  StyleSheet } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import AppLayout from '../AppLayout';  // Importera AppLayout-komponenten
import { useMyContext } from '../../context/myContext';

export default function HomeScreen() {
  const { count, increment, decrement } = useMyContext();

  return (
    <AppLayout>
        {/* Knappar för att interagera med kontexten */}
        <ThemedView style={styles.stepContainer}>
          <ThemedText onPress={increment}>Increment Count</ThemedText> {/* Använd funktionen för att uppdatera count */}
          <ThemedText onPress={decrement}>Decrement Count</ThemedText> {/* Använd funktionen för att minska count */}
          <ThemedText>Count: {count}</ThemedText>
        </ThemedView>
    </AppLayout>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
