import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../styles/common';

interface ScoreProps {
  score: number;
  showBar?: boolean;
}

export default function Score({ score, showBar = false }: ScoreProps): React.JSX.Element {
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
    
    // Calcular porcentajes reales basados en el score
    let positive = 0;
    let mixed = 0;
    let negative = 0;
    
    if (normalizedScore >= 75) {
      // Score alto: mayor parte verde, algo amarillo
      positive = normalizedScore - 25;
      mixed = 25;
      negative = 0;
    } else if (normalizedScore >= 50) {
      // Score medio: mayor parte amarillo, algo verde
      positive = normalizedScore - 50;
      mixed = 50 - positive;
      negative = 0;
    } else {
      // Score bajo: mayor parte rojo, algo amarillo
      negative = 50 - normalizedScore;
      mixed = normalizedScore;
      positive = 0;
    }
    
    // Asegurar que los valores no sean negativos
    positive = Math.max(0, positive);
    mixed = Math.max(0, mixed);
    negative = Math.max(0, negative);
    
    // Convertir a porcentajes
    const total = positive + mixed + negative;
    if (total > 0) {
      positive = (positive / total) * 100;
      mixed = (mixed / total) * 100;
      negative = (negative / total) * 100;
    }
    
    return { positive, mixed, negative };
  };

  const scoreColor = getScoreColor(score);
  const scoreDescription = getScoreDescription(score);
  const ratingSegments = getRatingBarSegments(score);

  return (
    <View style={styles.container}>
      <View style={styles.metascoreSection}>
        <Text style={styles.metascoreLabel}>METASCORE</Text>
        <Text style={styles.scoreDescription}>{scoreDescription}</Text>
        <Text style={styles.reviewCount}>Based on 75 Critic Reviews</Text>
        
        <View style={[styles.scoreBox, { backgroundColor: scoreColor }]}>
          <Text style={styles.scoreNumber}>{score}</Text>
        </View>
      </View>
      
      {showBar && (
        <View style={styles.ratingBar}>
          <View style={[styles.ratingSegment, styles.positiveSegment, { width: `${ratingSegments.positive}%` }]} />
          <View style={[styles.ratingSegment, styles.mixedSegment, { width: `${ratingSegments.mixed}%` }]} />
          <View style={[styles.ratingSegment, styles.negativeSegment, { width: `${ratingSegments.negative}%` }]} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  metascoreSection: {
    position: 'relative',
    marginBottom: 12,
    paddingRight: 70, // Espacio para la caja de score
  },
  metascoreLabel: {
    fontSize: 10,
    color: colors.textWhite,
    fontWeight: 'normal',
    marginBottom: 4,
    textTransform: 'uppercase',
    textShadowColor: 'rgba(0, 0, 0, 0.8)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  scoreDescription: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.textWhite,
    marginBottom: 4,
    textShadowColor: 'rgba(0, 0, 0, 0.8)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  reviewCount: {
    fontSize: 12,
    color: colors.textWhite,
    marginBottom: 8,
    textShadowColor: 'rgba(0, 0, 0, 0.8)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
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
    height: 6,
    borderRadius: 3,
    overflow: 'hidden',
    backgroundColor: '#f0f0f0', // Color de fondo fijo para la barra
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
