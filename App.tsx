import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './components/Navigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </SafeAreaProvider>
  );
} 