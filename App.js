import { StyleSheet,Text, View } from 'react-native';

import { NavigationContainer } from '@react-natigation/native';
import { createNativeStackNavigator } from 'react-navigation/native-stack';

import Home from './src/pages/Home';
import Home from './src/pages/Sobre';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Sreen name="Sobre" component={Sobre}/>
      </Stack.Navigator>
    </NavigationContainer>
  );

}


























import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
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