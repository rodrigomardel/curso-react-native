# 🎨 Guía de Tailwind CSS con NativeWind

## Configuración Completada ✅

Tu proyecto ya está configurado para usar Tailwind CSS con NativeWind. Aquí tienes todo lo que necesitas saber:

## 📁 Archivos de Configuración

### 1. `babel.config.js`
```javascript
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: ['nativewind/babel'],
  };
};
```

### 2. `tailwind.config.js`
```javascript
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./lib/**/*.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
    "./**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: '#4CAF50',
        secondary: '#FF6B6B',
        // ... más colores personalizados
      },
    },
  },
};
```

### 3. `types/nativewind.d.ts`
```typescript
/// <reference types="nativewind/types" />
// Declaraciones de tipos para imágenes
```

## 🚀 Cómo Usar Tailwind

### Sintaxis Básica
```tsx
import { View, Text } from 'react-native';

export default function MyComponent() {
  return (
    <View className="flex-1 bg-white p-4">
      <Text className="text-lg font-bold text-gray-800">
        Hola Tailwind!
      </Text>
    </View>
  );
}
```

### Clases Disponibles

#### Layout
- `flex-1`, `flex-row`, `flex-col`
- `justify-center`, `items-center`
- `p-4`, `m-2`, `px-6`, `py-3`

#### Colores
- `bg-primary`, `bg-secondary`
- `text-white`, `text-text`, `text-textLight`
- `border-border`

#### Tipografía
- `text-sm`, `text-lg`, `text-xl`
- `font-bold`, `font-normal`
- `text-center`, `text-left`

#### Espaciado
- `p-4` (padding: 16px)
- `m-2` (margin: 8px)
- `gap-4` (gap: 16px)

#### Bordes y Sombras
- `rounded-lg`, `rounded-full`
- `border`, `border-2`
- `shadow-sm`, `shadow-lg`

## 🎯 Ejemplo Práctico

### Antes (StyleSheet)
```tsx
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
});

<View style={styles.container}>
  <Text style={styles.title}>Título</Text>
</View>
```

### Después (Tailwind)
```tsx
<View className="flex-1 bg-white p-4">
  <Text className="text-lg font-bold text-text mb-2">Título</Text>
</View>
```

## 🎨 Colores Personalizados

Puedes usar los colores definidos en tu configuración:

```tsx
// Colores del tema
<View className="bg-primary">Primary</View>
<View className="bg-secondary">Secondary</View>
<View className="bg-accent">Accent</View>

// Estados
<View className="bg-error">Error</View>
<View className="bg-success">Success</View>
<View className="bg-warning">Warning</View>
```

## 📱 Componentes Responsivos

```tsx
// Diferentes tamaños para diferentes pantallas
<View className="w-full md:w-1/2 lg:w-1/3">
  <Text className="text-sm md:text-base lg:text-lg">
    Texto responsivo
  </Text>
</View>
```

## ⚡ Ventajas de Usar Tailwind

1. **Desarrollo más rápido** - No necesitas crear StyleSheets
2. **Consistencia** - Sistema de diseño unificado
3. **Mantenimiento** - Menos archivos CSS/TS
4. **Flexibilidad** - Fácil modificación de estilos
5. **TypeScript** - Autocompletado y verificación de tipos

## 🔧 Comandos Útiles

```bash
# Verificar configuración
npx tailwindcss --help

# Generar CSS (para desarrollo)
npx tailwindcss -i ./input.css -o ./output.css --watch

# Verificar tipos
npx tsc --noEmit
```

## 📚 Recursos Adicionales

- [Documentación de NativeWind](https://www.nativewind.dev/)
- [Tailwind CSS Cheat Sheet](https://nerdcave.com/tailwind-cheat-sheet)
- [React Native + Tailwind](https://www.nativewind.dev/quick-starts/expo)

## 🎯 Próximos Pasos

1. **Migrar componentes existentes** gradualmente
2. **Crear nuevos componentes** con Tailwind
3. **Personalizar el tema** según tus necesidades
4. **Optimizar el bundle** para producción

¡Tu proyecto está listo para usar Tailwind CSS! 🎉 