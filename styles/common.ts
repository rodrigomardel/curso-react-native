import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { Colors, Typography } from '../types';

// Colores de la aplicación
export const colors: Colors = {
  primary: '#4CAF50',
  secondary: '#FF6B6B',
  accent: '#FFD700',
  background: '#fff',
  backgroundDark: '#000',
  text: '#333',
  textLight: '#666',
  textWhite: '#fff',
  border: '#ddd',
  shadow: '#000',
  error: '#FF5722',
  success: '#4CAF50',
  warning: '#FF9800',
  info: '#2196F3',
};

// Tipografías
export const typography: Typography = {
  h1: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  h2: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  h3: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  h4: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  bodyText: {
    fontSize: 16,
    fontWeight: 'normal',
  },
  bodySmall: {
    fontSize: 14,
    fontWeight: 'normal',
  },
  errorText: {
    fontSize: 16,
    fontWeight: 'normal',
    color: colors.error,
  },
};

// Estilos base comunes
export const commonStyles = StyleSheet.create({
  // Contenedores
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  containerDark: {
    flex: 1,
    backgroundColor: colors.backgroundDark,
  },
  centerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  paddingContainer: {
    padding: 16,
  },
  
  // Textos
  title: {
    ...typography.h2,
    color: colors.text,
    textAlign: 'center',
    marginBottom: 16,
  },
  titleWhite: {
    ...typography.h2,
    color: colors.textWhite,
    textAlign: 'center',
    marginBottom: 16,
  },
  subtitle: {
    ...typography.h3,
    color: colors.text,
    marginBottom: 8,
  },
  bodyText: {
    ...typography.bodyText,
    color: colors.text,
    lineHeight: 24,
  },
  bodyTextSmall: {
    ...typography.bodySmall,
    color: colors.textLight,
    lineHeight: 20,
  },
  caption: {
    fontSize: 12,
    color: colors.textLight,
    textAlign: 'center',
  },
  
  // Botones
  button: {
    backgroundColor: colors.primary,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: colors.shadow,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    color: colors.textWhite,
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  buttonSecondary: {
    backgroundColor: colors.secondary,
    padding: 12,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 200,
  },
  buttonAccent: {
    backgroundColor: colors.accent,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: colors.shadow,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  
  // Tarjetas
  card: {
    backgroundColor: '#f5f5f5',
    padding: 12,
    marginBottom: 12,
    borderRadius: 8,
    shadowColor: colors.shadow,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardRow: {
    flexDirection: 'row',
    backgroundColor: '#f5f5f5',
    padding: 12,
    marginBottom: 12,
    borderRadius: 8,
    shadowColor: colors.shadow,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  
  // Imágenes
  imageSmall: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 12,
  },
  imageMedium: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  imageLarge: {
    width: 300,
    height: 170,
    resizeMode: 'contain',
  },
  
  // Estados
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  errorText: {
    fontSize: 16,
    color: colors.error,
    textAlign: 'center',
  },
  
  // Utilidades
  marginTop: {
    marginTop: 10,
  },
  marginBottom: {
    marginBottom: 10,
  },
  textCenter: {
    textAlign: 'center',
  },
  flexRow: {
    flexDirection: 'row',
  },
  flex1: {
    flex: 1,
  },
});

// Estilos específicos para componentes
export const componentStyles = {
  // Estilos para botones específicos
  touchableHighlight: {
    backgroundColor: colors.info,
    padding: 15,
    marginTop: 10,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#357ABD',
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  touchableOpacity: {
    backgroundColor: colors.secondary,
    padding: 12,
    marginTop: 10,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#FF5252',
    minWidth: 200,
  },
  pressable: {
    backgroundColor: colors.accent,
    padding: 15,
    marginTop: 10,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#FFC107',
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  pressablePressed: {
    backgroundColor: colors.error,
    borderColor: '#E64A19',
    borderWidth: 3,
    shadowColor: colors.error,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.6,
    shadowRadius: 8,
    elevation: 10,
    transform: [{ scale: 0.95 }],
  },
  
  // Estilos para textos de botones
  touchableHighlightText: {
    color: colors.textWhite,
    fontSize: 16,
    fontWeight: '600' as const,
    textAlign: 'center' as const,
  },
  touchableOpacityText: {
    color: colors.textWhite,
    fontSize: 14,
    fontWeight: '500' as const,
    textAlign: 'center' as const,
    textTransform: 'uppercase' as const,
  },
  pressableText: {
    color: colors.text,
    fontSize: 16,
    fontWeight: '600' as const,
    textAlign: 'center' as const,
  },
}; 