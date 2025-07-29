# Metacritic App - React Native con TypeScript

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

### 🎨 Tailwind CSS con NativeWind

El proyecto está **completamente configurado** para usar Tailwind CSS con NativeWind:

#### ✅ Configuración Incluida:
- `babel.config.js` - Plugin de NativeWind configurado
- `tailwind.config.js` - Configuración optimizada para React Native
- `types/nativewind.d.ts` - Tipos de TypeScript para NativeWind
- Colores personalizados del tema integrados

#### 📦 Dependencias Instaladas:
- `nativewind: "^4.1.23"`
- `tailwindcss: "3.3.2"`

#### 🚀 Uso Inmediato:
```tsx
<View className="flex-1 bg-white p-4">
  <Text className="text-lg font-bold text-primary">
    ¡Tailwind funcionando!
  </Text>
</View>
```

#### 🎨 Colores del Tema Disponibles:
- `bg-primary`, `text-primary`
- `bg-secondary`, `text-secondary`
- `bg-accent`, `text-accent`
- `bg-error`, `bg-success`, `bg-warning`

**📖 Guía completa:** [TAILWIND_GUIDE.md](./TAILWIND_GUIDE.md)