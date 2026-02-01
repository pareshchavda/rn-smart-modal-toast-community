// App.tsx
import React from 'react';
import { StyleSheet, View } from 'react-native';
import 'react-native-gesture-handler';
import { Slot } from 'expo-router';
import { ToastProvider } from 'rn-smart-modal-toast';

export default function App() {
  return (
    <View style={styles.container}>
      <ToastProvider
        defaultDuration={4000}
        maxToasts={3}
      >
        <Slot />
      </ToastProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});
