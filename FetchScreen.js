import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native';
import { useState, useEffect } from 'react';

export default function FetchScreen() {
  const [games, setGames] = useState([]);
  
  useEffect(() => {
    getLatestGames().then((games) => {
        setGames(games);
    });
  }, []);
} 