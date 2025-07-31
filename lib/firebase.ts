import AsyncStorage from '@react-native-async-storage/async-storage';
import { Game, GameDetails } from '../types';

// Configuración de almacenamiento local
export const initializeFirebase = () => {
  console.log('Local storage initialized');
};

// Guardar un juego en el almacenamiento local
export const saveGame = async (game: Game): Promise<void> => {
  try {
    const games = await getGames();
    const existingGameIndex = games.findIndex(g => g.slug === game.slug);
    
    if (existingGameIndex >= 0) {
      games[existingGameIndex] = { ...game, updatedAt: new Date().toISOString() };
    } else {
      games.push({ ...game, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() });
    }
    
    await AsyncStorage.setItem('games', JSON.stringify(games));
    console.log('Game saved successfully:', game.title);
  } catch (error) {
    console.error('Error saving game:', error);
    throw error;
  }
};

// Obtener todos los juegos
export const getGames = async (): Promise<Game[]> => {
  try {
    const gamesData = await AsyncStorage.getItem('games');
    return gamesData ? JSON.parse(gamesData) : [];
  } catch (error) {
    console.error('Error fetching games:', error);
    return [];
  }
};

// Obtener un juego específico
export const getGame = async (slug: string): Promise<Game | null> => {
  try {
    const games = await getGames();
    return games.find(game => game.slug === slug) || null;
  } catch (error) {
    console.error('Error fetching game:', error);
    return null;
  }
};

// Actualizar un juego
export const updateGame = async (slug: string, updates: Partial<Game>): Promise<void> => {
  try {
    const games = await getGames();
    const gameIndex = games.findIndex(g => g.slug === slug);
    
    if (gameIndex >= 0) {
      games[gameIndex] = { ...games[gameIndex], ...updates, updatedAt: new Date().toISOString() };
      await AsyncStorage.setItem('games', JSON.stringify(games));
      console.log('Game updated successfully:', slug);
    }
  } catch (error) {
    console.error('Error updating game:', error);
    throw error;
  }
};

// Eliminar un juego
export const deleteGame = async (slug: string): Promise<void> => {
  try {
    const games = await getGames();
    const filteredGames = games.filter(g => g.slug !== slug);
    await AsyncStorage.setItem('games', JSON.stringify(filteredGames));
    console.log('Game deleted successfully:', slug);
  } catch (error) {
    console.error('Error deleting game:', error);
    throw error;
  }
};

// Guardar favoritos del usuario
export const saveUserFavorites = async (userId: string, gameSlugs: string[]): Promise<void> => {
  try {
    await AsyncStorage.setItem(`favorites_${userId}`, JSON.stringify(gameSlugs));
    console.log('Favorites saved for user:', userId);
  } catch (error) {
    console.error('Error saving favorites:', error);
    throw error;
  }
};

// Obtener favoritos del usuario
export const getUserFavorites = async (userId: string): Promise<string[]> => {
  try {
    const favoritesData = await AsyncStorage.getItem(`favorites_${userId}`);
    return favoritesData ? JSON.parse(favoritesData) : [];
  } catch (error) {
    console.error('Error fetching favorites:', error);
    return [];
  }
};

// Agregar juego a favoritos
export const addToFavorites = async (userId: string, gameSlug: string): Promise<void> => {
  try {
    const favorites = await getUserFavorites(userId);
    if (!favorites.includes(gameSlug)) {
      favorites.push(gameSlug);
      await saveUserFavorites(userId, favorites);
    }
  } catch (error) {
    console.error('Error adding to favorites:', error);
    throw error;
  }
};

// Remover juego de favoritos
export const removeFromFavorites = async (userId: string, gameSlug: string): Promise<void> => {
  try {
    const favorites = await getUserFavorites(userId);
    const updatedFavorites = favorites.filter(slug => slug !== gameSlug);
    await saveUserFavorites(userId, updatedFavorites);
  } catch (error) {
    console.error('Error removing from favorites:', error);
    throw error;
  }
};

// Escuchar cambios en tiempo real (simulado con polling)
export const subscribeToGames = (callback: (games: Game[]) => void) => {
  const interval = setInterval(async () => {
    try {
      const games = await getGames();
      callback(games);
    } catch (error) {
      console.error('Error in games subscription:', error);
    }
  }, 1000); // Poll every second
  
  return () => clearInterval(interval);
};

// Escuchar cambios en favoritos (simulado con polling)
export const subscribeToUserFavorites = (userId: string, callback: (favorites: string[]) => void) => {
  const interval = setInterval(async () => {
    try {
      const favorites = await getUserFavorites(userId);
      callback(favorites);
    } catch (error) {
      console.error('Error in favorites subscription:', error);
    }
  }, 1000); // Poll every second
  
  return () => clearInterval(interval);
}; 