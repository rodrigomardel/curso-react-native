import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button ,TouchableHighlight, TouchableOpacity, Pressable } from 'react-native';

import icon from './assets/icon.png';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Image fadeDuration={1000} source={icon} style={styles.icon}/>
      </View>
      <View style={styles.contentContainer}>
        <Image source={{uri: 'https://www.metacritic.com/a/img/resize/992c08116b294fe020594f15145f0da8bc21d8f0/catalog/provider/6/12/6-1-1109235-52.jpg?auto=webp&fit=crop&height=170&width=300'}} style={styles.image}/>
        <Text style={styles.text}>Donkey Kong Bananza</Text>
        {/* Button no se puede estilizar con css */}
        <View style={styles.buttonsContainer}>
          <Text style={styles.buttonsTitle}>Tipos de Botones en React Native:</Text>
          <View style={styles.buttonContainer}>
            <Button color="fuchsia" title="Button" onPress={() => alert('Button pressed')} />
            <Text style={styles.buttonDescription}>Botón nativo con estilos limitados</Text>
          </View>
          <TouchableHighlight 
          underlayColor="yellow"
          onPress={() => alert('TouchableHighlight pressed')} style={styles.touchableHighlight}>    
            <Text style={styles.touchableHighlightText}>TouchableHighlight</Text>
          </TouchableHighlight>
          <Text style={styles.buttonDescription}>Efecto de resaltado al presionar</Text>
          <TouchableOpacity onPress={() => alert('TouchableOpacity pressed')} style={styles.touchableOpacity}>
            <Text style={styles.touchableOpacityText}>TouchableOpacity</Text>
          </TouchableOpacity>
          <Text style={styles.buttonDescription}>Reduce opacidad al presionar</Text>
          <Pressable 
            onPress={() => alert('Pressable pressed')} 
            onPressIn={() => console.log('Pressable press in')}
            onPressOut={() => console.log('Pressable press out')}
            onLongPress={() => alert('Pressable long press!')}
            style={({ pressed }) => [
              styles.pressable,
              pressed && styles.pressablePressed
            ]}
          >
            <Text style={styles.pressableText}>Pressable</Text>
          </Pressable>
          <Text style={styles.buttonDescription}>Componente moderno con estados dinámicos y más personalizable</Text>
        </View>
      </View>
       <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  iconContainer: {
    paddingTop: 50,
    paddingLeft: 20,
    paddingBottom: 20,
  },
  icon: {
    width: 60,
    height: 60,
    resizeMode: 'center',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 300,
    height: 170,
    resizeMode: 'contain'
  },
  text: {
    color: '#fff',
    fontSize: 20,
    marginTop: 10,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  touchableHighlight: {
    backgroundColor: '#4A90E2',
    padding: 15,
    marginTop: 10,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#357ABD',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  touchableHighlightText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  touchableOpacity: {
    backgroundColor: '#FF6B6B',
    padding: 12,
    marginTop: 10,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#FF5252',
    minWidth: 200,
  },
  touchableOpacityText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  buttonsContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  buttonsTitle: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 10,
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
  },
  buttonDescription: {
    color: '#888',
    fontSize: 12,
    marginTop: 5,
    textAlign: 'center',
  },
  pressable: {
    backgroundColor: '#FFD700',
    padding: 15,
    marginTop: 10,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#FFC107',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  pressablePressed: {
    backgroundColor: '#FF5722',
    borderColor: '#E64A19',
    borderWidth: 3,
    shadowColor: '#FF5722',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.6,
    shadowRadius: 8,
    elevation: 10,
    transform: [{ scale: 0.95 }],
  },
  pressableText: {
    color: '#000',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
});
