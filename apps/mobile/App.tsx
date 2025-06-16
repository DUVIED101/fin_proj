import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Test Tailwind Styling</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#ef4444', // Tailwind's red-500
    fontSize: 32,     // text-4xl
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
});
