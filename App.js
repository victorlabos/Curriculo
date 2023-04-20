import { StyleSheet,Text, View } from 'react-native';

import { NavigationContainer } from '@react-natigation/native';
import { createNativeStackNavigator } from 'react-navigation/native-stack';

import Home from './src/pages/Home';
import Formacao from './src/pages/Formacao';
import Especializacao from './src/pages/Especializacao';
import Caracteristicas from './src/pages/Caracteristicas';
import Graduacao from './src/pages/Graduacao'
import Cursos from './src/pages/Cursos';
import Academica from './src/pages/Academica';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Sreen name="Formacao" component={Formacao}/>
        <Stack.Sreen name="Especializacao" component={Especializacao}/>
        <Stack.Sreen name="Caracteristicas" component={Caracteristicas}/>        
        <Stack.Sreen name="Graduacao" component={Graduacao}/>
        <Stack.Sreen name="Cursos" component={Cursos}/>
        <Stack.Sreen name="Academica" component={Academica}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },


});