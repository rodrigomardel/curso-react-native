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
        <View style={styles.scoreBadge}>
          <Text style={styles.scoreText}>{game.score}</Text>
        </View>
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.gameTitle} numberOfLines={1}>
          {game.title}
        </Text>
        <Text style={styles.releaseDate}>
          {game.releaseDate}
        </Text>
        <Text 
          style={styles.description} 
          numberOfLines={2}
        >
          {game.description}
        </Text>
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
    backgroundColor: '#f8f9fa',
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
  },
  imageContainer: {
    position: 'relative',
    width: '100%',
    height: 200,
  },
  gameImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain', 
    transform: [{ scale: 1.1 }], 
  },
  scoreBadge: {
    position: 'absolute',
    top: 12,
    right: 12,
    backgroundColor: colors.primary,
    borderRadius: 20,
    paddingHorizontal: 8,
    paddingVertical: 4,
    minWidth: 40,
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
  scoreText: {
    color: colors.textWhite,
    fontSize: 14,
    fontWeight: 'bold',
  },
  contentContainer: {
    padding: 16,
  },
  gameTitle: {
    ...typography.h4,
    color: colors.text,
    marginBottom: 4,
    fontWeight: 'bold',
  },
  releaseDate: {
    ...typography.bodySmall,
    color: colors.textLight,
    marginBottom: 8,
  },
  description: {
    ...typography.bodySmall,
    color: colors.text,
    lineHeight: 20,
  },
}); 