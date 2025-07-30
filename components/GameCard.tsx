import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ActivityIndicator, Animated } from 'react-native';
import { commonStyles, colors, typography } from '../styles/common';
import { GameCardProps, AnimatedGameCardProps } from '../types';

export default function GameCard({ game, onPress }: GameCardProps): React.JSX.Element {
  const [imageLoading, setImageLoading] = useState<boolean>(true);

  const handlePress = () => {
    if (onPress) {
      onPress(game);
    }
  };

  // Función para obtener el color del score
  const getScoreColor = (score: number) => {
    if (score >= 75) return '#66CC33'; // Verde
    if (score >= 50) return '#FFCC33'; // Amarillo
    return '#FF6B6B'; // Rojo
  };

  // Función para obtener la descripción del score
  const getScoreDescription = (score: number) => {
    if (score >= 75) return 'Generally Favorable';
    if (score >= 50) return 'Mixed or Average';
    return 'Generally Unfavorable';
  };

  // Función para calcular los segmentos de la barra de calificaciones
  const getRatingBarSegments = (score: number) => {
    // Normalizar el score a un rango de 0-100
    const normalizedScore = Math.max(0, Math.min(100, score));
    
    // Calcular los segmentos basados en el score
    let positive = 0;
    let mixed = 0;
    let negative = 0;
    
    if (normalizedScore >= 75) {
      // Score alto: mayor parte verde, algo amarillo
      positive = normalizedScore - 50;
      mixed = 50 - positive;
      negative = 0;
    } else if (normalizedScore >= 50) {
      // Score medio: mayor parte amarillo, algo verde y rojo
      positive = normalizedScore - 50;
      mixed = 50 - positive;
      negative = 0;
    } else {
      // Score bajo: mayor parte rojo, algo amarillo
      negative = 50 - normalizedScore;
      mixed = normalizedScore;
      positive = 0;
    }
    
    // Asegurar que los valores no sean negativos y sumen aproximadamente 100
    positive = Math.max(0, positive);
    mixed = Math.max(0, mixed);
    negative = Math.max(0, negative);
    
    return { positive, mixed, negative };
  };

  const scoreColor = getScoreColor(game.score);
  const scoreDescription = getScoreDescription(game.score);
  const ratingSegments = getRatingBarSegments(game.score);

  return (
    <TouchableOpacity 
      style={styles.cardContainer} 
      onPress={handlePress}
      activeOpacity={0.7}
    >
      <View style={styles.imageContainer}>
        <Image 
          source={{uri: game.image}} 
          style={styles.gameImage}
          resizeMode="contain" 
          onLoadStart={() => setImageLoading(true)}
          onLoadEnd={() => setImageLoading(false)}
        />
        {imageLoading && (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color={colors.primary} />
          </View>
        )}
      </View>
      
      <View style={styles.contentContainer}>
        <Text style={styles.gameTitle} numberOfLines={2}>
          {game.title}
        </Text>
        
        <View style={styles.gameTag}>
          <Text style={styles.gameTagText}>game</Text>
        </View>
        
        <View style={styles.metascoreSection}>
          <Text style={styles.metascoreLabel}>METASCORE</Text>
          <Text style={styles.scoreDescription}>{scoreDescription}</Text>
          <Text style={styles.reviewCount}>Based on 75 Critic Reviews</Text>
          
          <View style={[styles.scoreBox, { backgroundColor: scoreColor }]}>
            <Text style={styles.scoreNumber}>{game.score}</Text>
          </View>
        </View>
        
        <View style={styles.ratingBar}>
          <View style={[styles.ratingSegment, styles.positiveSegment, { flex: ratingSegments.positive }]} />
          <View style={[styles.ratingSegment, styles.mixedSegment, { flex: ratingSegments.mixed }]} />
          <View style={[styles.ratingSegment, styles.negativeSegment, { flex: ratingSegments.negative }]} />
        </View>
      </View>
    </TouchableOpacity>
  );
}

export function AnimatedGameCard({ game, index, onPress }: AnimatedGameCardProps): React.JSX.Element {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
      Animated.timing(opacity, {
          toValue: 1,
          duration: 1000,
          delay: index * 250,
          useNativeDriver: true,
      }).start();
  }, [opacity, index]);

  return (
      <Animated.View style={{ opacity }}>
          <GameCard game={game} onPress={onPress} />
      </Animated.View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: colors.background,
    borderRadius: 12,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: colors.accent,
  },
  imageContainer: {
    position: 'relative',
    width: '100%',
    height: 180, 
  },
  gameImage: {
    width: '100%',
    height: '100%',
    backgroundColor: '#e9ecef', 
  },
  loadingContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
  },
  titleOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 12, // Reducido de 16 a 12
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  overlayTitle: {
    color: colors.textWhite,
    fontSize: 14, // Reducido de 16 a 14
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.8)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  contentContainer: {
    padding: 16,
  },
  gameTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 8,
    lineHeight: 24,
  },
  gameTag: {
    alignSelf: 'flex-start',
    backgroundColor: '#f0f0f0',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginBottom: 16,
  },
  gameTagText: {
    fontSize: 12,
    color: colors.text,
    textTransform: 'lowercase',
  },
  metascoreSection: {
    position: 'relative',
    marginBottom: 12,
    paddingRight: 70, // Espacio para la caja de score
  },
  metascoreLabel: {
    fontSize: 10,
    color: colors.textLight,
    fontWeight: 'normal',
    marginBottom: 4,
    textTransform: 'uppercase',
  },
  scoreDescription: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 4,
  },
  reviewCount: {
    fontSize: 12,
    color: colors.text,
    marginBottom: 8,
  },
  scoreBox: {
    position: 'absolute',
    right: 0,
    top: 0,
    width: 60,
    height: 60,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  scoreNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.textWhite,
  },
  ratingBar: {
    flexDirection: 'row',
    height: 6, // Aumentado de 4 a 6 para mejor visibilidad
    borderRadius: 3,
    overflow: 'hidden',
    backgroundColor: '#f0f0f0', // Color de fondo para la barra
  },
  ratingSegment: {
    height: '100%',
    minWidth: 1, // Asegurar que segmentos muy pequeños sean visibles
  },
  positiveSegment: {
    backgroundColor: '#66CC33',
  },
  mixedSegment: {
    backgroundColor: '#FFCC33',
  },
  negativeSegment: {
    backgroundColor: '#FF6B6B',
  },
}); 