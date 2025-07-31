// Mock OneSignal implementation for Expo Go compatibility
export const initializeOneSignal = () => {
  console.log('OneSignal initialized (mock mode for Expo Go)');
};

// Mock notification functions
export const sendNotificationToUser = async (playerId: string, message: string, title?: string) => {
  console.log('Mock notification sent:', { playerId, message, title });
  return { success: true };
};

// Mock player ID
export const getPlayerId = (): string | null => {
  return 'mock-player-id';
};

// Mock channel subscription
export const subscribeToChannel = (channel: string) => {
  console.log('Mock subscribed to channel:', channel);
};

// Mock channel unsubscription
export const unsubscribeFromChannel = () => {
  console.log('Mock unsubscribed from channel');
}; 