# Metacritic App - React Native con TypeScript

Esta aplicación ha sido migrada exitosamente de JavaScript a TypeScript para mejorar la robustez del código y la experiencia de desarrollo.

```typescript
// Interfaces principales
interface Game {
  title: string;
  score: number;
  releaseDate: string;
  description: string;
  slug: string;
  image: string;
}

interface GameCardProps {
  game: Game;
  onPress?: (game: Game) => void;
}

// Tipos para React Navigation
type RootTabParamList = {
  Home: undefined;
  Games: undefined;
};
```

### Scripts Disponibles

```bash
# Instalar dependencias (si es la primera vez)
npm install

# Iniciar el proyecto con Expo
npm start
# o
expo start

# Ejecutar en Android
npm run android
# o
expo start --android

# Ejecutar en iOS
npm run ios
# o
expo start --ios

# Ejecutar en web
npm run web
# o
expo start --web

# Ejecutar en modo desarrollo con caché limpio
expo start --clear

# Ejecutar en modo túnel (para dispositivos físicos)
expo start --tunnel

# Linting
npm run lint

# Verificar tipos de TypeScript
npx tsc --noEmit
```

### Dependencias TypeScript

El proyecto ya incluye todas las dependencias necesarias:
- `typescript: "~5.8.3"`
- `@types/react: "~19.0.10"`
- `@types/react-native: "^0.72.8"`

### 🚀 Configuración y Ejecución con Expo

#### Requisitos Previos
```bash
# Instalar Expo CLI globalmente (si no lo tienes)
npm install -g @expo/cli

# Verificar que tienes Node.js instalado
node --version

# Verificar que tienes npm instalado
npm --version
```

#### Pasos para Ejecutar el Proyecto

1. **Instalar dependencias**
```bash
# Instalar dependencias
npm install
```

2. **Iniciar el proyecto**
```bash
# Opción 1: Usar npm scripts
npm start

# Opción 2: Usar Expo CLI directamente
expo start
```

3. **Ejecutar en diferentes plataformas**
```bash
# Para desarrollo web
expo start --web

# Para Android (requiere Android Studio o dispositivo físico)
expo start --android

# Para iOS (solo en macOS, requiere Xcode)
expo start --ios

# Para dispositivos físicos (modo túnel)
expo start --tunnel
```

#### Opciones Útiles de Expo

```bash
# Limpiar caché y reiniciar
expo start --clear

# Ejecutar en modo desarrollo
expo start --dev-client

# Ejecutar con configuración específica
expo start --port 19000

# Ver logs en tiempo real
expo logs
```