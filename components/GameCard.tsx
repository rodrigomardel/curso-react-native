import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ActivityIndicator, Animated } from 'react-native';
import { commonStyles, colors, typography } from '../styles/common';
import { GameCardProps, AnimatedGameCardProps } from '../types';
import Score from './Score';

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
      <Image 
        source={{uri: game.image}} 
        style={styles.gameImage}
        resizeMode="cover" 
        onLoadStart={() => setImageLoading(true)}
        onLoadEnd={() => setImageLoading(false)}
      />
      {imageLoading && (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color={colors.primary} />
        </View>
      )}
      
      <View style={styles.overlay}>
        <View style={styles.contentContainer}>
          <Text style={styles.gameTitle} numberOfLines={2}>
            {game.title}
          </Text>
          
          <View style={styles.gameTag}>
            <Text style={styles.gameTagText}>game</Text>
          </View>
          
          <Score score={game.score} />
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
    position: 'relative',
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
    height: 420, 
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
  overlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    paddingTop: 20,
    paddingBottom: 16,
    paddingHorizontal: 16,
  },
  contentContainer: {
    // Sin padding adicional ya que el overlay ya tiene padding
  },
  gameTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.textWhite,
    marginBottom: 8,
    lineHeight: 26,
    textShadowColor: 'rgba(0, 0, 0, 0.8)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  gameTag: {
    alignSelf: 'flex-start',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 4,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginBottom: 16,
  },
  gameTagText: {
    fontSize: 12,
    color: colors.text,
    textTransform: 'lowercase',
    fontWeight: '500',
  },
}); 