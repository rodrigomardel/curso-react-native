import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, TouchableHighlight, TouchableOpacity, Pressable } from 'react-native';
import { commonStyles, colors, typography, componentStyles } from '../styles/common';

import icon from '../assets/icon-metacritic.png';

export default function HomeScreen(): React.JSX.Element {
  return (
    <View style={commonStyles.containerDark}>
      <View style={styles.iconContainer}>
        <Image fadeDuration={1000} source={icon} style={styles.icon}/>
      </View>
      <View style={commonStyles.centerContainer}>
        <Image source={{uri: 'https://i0.wp.com/www.gammaminus.com/wp-content/uploads/2023/11/metacriticthumb-1.jpg?fit=500%2C500&ssl=1'}} style={commonStyles.imageLarge}/>
        <Text style={styles.title}>Curso de React Native Metacritic App</Text>
        {/* Button no se puede estilizar con css */}
        <View style={styles.buttonsContainer}>
          <Text style={styles.buttonsTitle}>Tipos de Botones en React Native:</Text>
          <View style={styles.buttonContainer}>
            <Button color="fuchsia" title="Button" onPress={() => alert('Button pressed')} />
            <Text style={styles.buttonDescription}>Botón nativo con estilos limitados</Text>
          </View>
          <TouchableHighlight 
          underlayColor="yellow"
          onPress={() => alert('TouchableHighlight pressed')} style={componentStyles.touchableHighlight}>    
            <Text style={componentStyles.touchableHighlightText}>TouchableHighlight</Text>
          </TouchableHighlight>
          <Text style={styles.buttonDescription}>Efecto de resaltado al presionar</Text>
          <TouchableOpacity onPress={() => alert('TouchableOpacity pressed')} style={componentStyles.touchableOpacity}>
            <Text style={componentStyles.touchableOpacityText}>TouchableOpacity</Text>
          </TouchableOpacity>
          <Text style={styles.buttonDescription}>Reduce opacidad al presionar</Text>
          <Pressable 
            onPress={() => alert('Pressable pressed')} 
            onPressIn={() => console.log('Pressable press in')}
            onPressOut={() => console.log('Pressable press out')}
            onLongPress={() => alert('Pressable long press!')}
            style={({ pressed }) => [
              componentStyles.pressable,
              pressed && componentStyles.pressablePressed
            ]}
          >
            <Text style={componentStyles.pressableText}>Pressable</Text>
          </Pressable>
          <Text style={styles.buttonDescription}>Componente moderno con estados dinámicos y más personalizable</Text>
        </View>
      </View>
       <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    paddingTop: 50,
    paddingLeft: 20,
    paddingBottom: 20,
  },
  icon: {
    width: 30,
    height: 30,
    resizeMode: 'center',
  },
  title: {
    color: colors.textWhite,
    ...typography.h1,
    marginTop: 10,
    textAlign: 'center',
  },
  buttonsContainer: {
    marginTop: 40,
    alignItems: 'center',
  },
  buttonsTitle: {
    color: colors.textWhite,
    ...typography.h4,
    marginBottom: 10,
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
  },
  buttonDescription: {
    color: colors.textLight,
    fontSize: 12,
    marginTop: 5,
    textAlign: 'center',
  },
}); 