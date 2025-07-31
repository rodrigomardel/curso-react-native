import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ActivityIndicator, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { getLatestGames } from '../lib/metacritic';
import { commonStyles, colors, typography } from '../styles/common';
import GameCard, { AnimatedGameCard } from './GameCard';
import Logo from './Logo';
import { Game } from '../types';

export default function Games(): React.JSX.Element {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const insets = useSafeAreaInsets();
  
  useEffect(() => {
    const fetchGames = async () => {
      try {
        setLoading(true);
        setError(null);
        const gamesData = await getLatestGames();
        console.log('Games data received:', gamesData);
        console.log('Number of games:', gamesData.length);
        setGames(gamesData);
      } catch (err) {
        console.error('Error fetching games:', err);
        setError(err instanceof Error ? err.message : 'Unknown error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchGames();
  }, []);

  const handleGamePress = (game: Game) => {
    console.log('Game pressed:', game.title);
    // Agregar navegación a detalles del juego
    alert(`Seleccionaste: ${game.title}\nScore: ${game.score}`);
  };

  if (loading) {
    return (
      <View style={[commonStyles.loadingContainer, { paddingTop: insets.top }]}>
        <ActivityIndicator size="large" color={colors.primary} />
        <Text style={commonStyles.bodyText}>Cargando juegos...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={[commonStyles.container, { paddingTop: insets.top }]}>
        <Text style={commonStyles.errorText}>Error: {error}</Text>
        <TouchableOpacity style={styles.retryButton} onPress={() => window.location.reload()}>
          <Text style={styles.retryButtonText}>Reintentar</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={[commonStyles.container, { paddingTop: insets.top }]}>
      <StatusBar style="light" />
      <View style={styles.logoContainer}>
        <Logo />
      </View>
      <View style={styles.header}>
        <Text style={styles.title}>{games.length} juegos disponibles</Text>
      </View>
      {/* Se debe usar FlatList para mostrar los juegos, ya que es más eficiente que ScrollView debido a que no se renderiza todo el contenido de la lista, sino que se renderiza solo el contenido visible.
      <ScrollView 
        style={styles.scrollView} 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      > */}
      <FlatList
        style={styles.scrollView}
        data={games}
        keyExtractor={(item) => item.slug}
        renderItem={({ item, index }) => (
        //   <GameCard game={item} onPress={() => handleGamePress(item)} />
        <AnimatedGameCard game={item} index={index} onPress={handleGamePress} />
        )}
      />
        {/* {games.length === 0 ? (
          <View style={styles.emptyContainer}>
            <Text style={styles.noDataText}>No se encontraron juegos</Text>
          </View>
        ) : (
          games.map((game) => (
            <GameCard 
              key={game.slug} 
              game={game} 
              onPress={() => handleGamePress(game)}
            />
          ))
        )}
      </ScrollView> */}
    </View>
  );
}


const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 16,
    paddingVertical: 20,
    backgroundColor: colors.background,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    alignItems: 'center',
    marginBottom: 10,
  },
  title: {
    ...typography.h2,
    color: colors.text,
    marginBottom: 4,
    textAlign: 'center', 
  },
  subtitle: {
    ...typography.bodySmall,
    color: colors.textLight,
    textAlign: 'center',
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 20 ,
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 40,
  },
  retryButton: {
    backgroundColor: colors.primary,
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 16,
  },
  retryButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  noDataText: {
    fontSize: 16,
    textAlign: 'center',
    color: colors.textLight,
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 16,
  },
}); 