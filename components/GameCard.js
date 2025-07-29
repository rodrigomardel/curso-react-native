import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { commonStyles, colors, typography } from '../styles/common';

export default function GameCard({ game, onPress }) {
  return (
    <TouchableOpacity 
      style={styles.cardContainer} 
      onPress={onPress}
      activeOpacity={0.7}
    >
      <View style={styles.imageContainer}>
        <Image 
          source={{uri: game.image}} 
          style={styles.gameImage}
          resizeMode="cover"
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