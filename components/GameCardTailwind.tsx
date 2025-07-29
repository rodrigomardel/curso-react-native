import React, { useState, useRef, useEffect } from 'react';
import { Text, View, Image, TouchableOpacity, Animated } from 'react-native';
import { GameCardProps, AnimatedGameCardProps } from '../types';

export default function GameCardTailwind({ game, onPress }: GameCardProps): React.JSX.Element {
  const [imageLoading, setImageLoading] = useState<boolean>(true);

  const handlePress = () => {
    if (onPress) {
      onPress(game);
    }
  };

  return (
    <TouchableOpacity 
      className="bg-gray-50 rounded-xl mb-4 shadow-sm overflow-hidden"
      onPress={handlePress}
      activeOpacity={0.7}
    >
      <View className="relative w-full h-48">
        <Image 
          source={{uri: game.image}} 
          className="w-full h-full"
          resizeMode="contain" 
          onLoadStart={() => setImageLoading(true)}
          onLoadEnd={() => setImageLoading(false)}
        />
        <View className="absolute top-3 right-3 bg-primary rounded-full px-2 py-1 min-w-10 items-center shadow-lg">
          <Text className="text-white text-sm font-bold">{game.score}</Text>
        </View>
      </View>
      <View className="p-4">
        <Text className="text-lg font-bold text-text mb-1" numberOfLines={1}>
          {game.title}
        </Text>
        <Text className="text-sm text-textLight mb-2">
          {game.releaseDate}
        </Text>
        <Text 
          className="text-sm text-text leading-5" 
          numberOfLines={2}
        >
          {game.description}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

export function AnimatedGameCardTailwind({ game, index, onPress }: AnimatedGameCardProps): React.JSX.Element {
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
          <GameCardTailwind game={game} onPress={onPress} />
      </Animated.View>
  );
} 