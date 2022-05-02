import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.yellow}>YELLOW TEXT!</Text>
      <Text style={styles.largeGreen}>This is the big green text!</Text>
      <Text style={[styles.yellow, styles.largeGreen]}>Yellow text, then big green text</Text>
      <Text style={[styles.largeGreen, styles.yellow]}>This is the big green text, then yellow text</Text>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    marginTop: 60,
  },

  largeGreen: {
    color: 'green',
    fontWeight: 'bold',
    fontSize: 30,
  },

  yellow: {
    color: 'yellow',
    fontSize: 20,

  }
});