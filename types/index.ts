// Tipos para los datos de juegos
export interface Game {
  title: string;
  score: number;
  releaseDate: string;
  description: string;
  slug: string;
  image: string;
}

// Tipos para la respuesta de la API
export interface MetacriticApiResponse {
  data: {
    items: MetacriticGameItem[];
  };
}

export interface MetacriticGameItem {
  description: string;
  slug: string;
  releaseDate: string;
  image: {
    bucketType: string;
    bucketPath: string;
  };
  criticScoreSummary: {
    score: number;
  };
  title: string;
}

// Tipos para los detalles del juego
export interface GameDetails {
  img: string;
  title: string;
  slug: string;
  description: string;
  score: number;
  reviews: Review[];
}

export interface Review {
  quote: string;
  score: number;
  date: string;
  publicationName: string;
  author: string;
}

// Tipos para las props de los componentes
export interface GameCardProps {
  game: Game;
  onPress?: (game: Game) => void;
}

export interface AnimatedGameCardProps {
  game: Game;
  index: number;
  onPress?: (game: Game) => void;
}

// Tipos para React Navigation
export type RootTabParamList = {
  Home: undefined;
  Games: undefined;
};

// Tipos para los estilos
export interface Colors {
  primary: string;
  secondary: string;
  accent: string;
  text: string;
  textLight: string;
  textWhite: string;
  background: string;
  backgroundDark: string;
  border: string;
  shadow: string;
  error: string;
  success: string;
  warning: string;
  info: string;
}

export interface Typography {
  h1: {
    fontSize: number;
    fontWeight: 'bold' | 'normal' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900';
  };
  h2: {
    fontSize: number;
    fontWeight: 'bold' | 'normal' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900';
  };
  h3: {
    fontSize: number;
    fontWeight: 'bold' | 'normal' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900';
  };
  h4: {
    fontSize: number;
    fontWeight: 'bold' | 'normal' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900';
  };
  bodyText: {
    fontSize: number;
    fontWeight: 'bold' | 'normal' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900';
  };
  bodySmall: {
    fontSize: number;
    fontWeight: 'bold' | 'normal' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900';
  };
  errorText: {
    fontSize: number;
    fontWeight: 'bold' | 'normal' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900';
    color: string;
  };
} 