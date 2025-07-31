import 'expo-router/entry';

// Inicializar servicios cuando la app esté lista
import { initializeOneSignal } from './lib/onesignal';
import { initializeFirebase } from './lib/firebase';

// Inicializar servicios
initializeOneSignal();
initializeFirebase(); 