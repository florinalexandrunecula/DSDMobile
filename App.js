import { StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MovieList from './components/MovieList';
import HomeScreen from './components/HomeScreen';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <>
      <NavigationContainer>
        <StatusBar style="dark" />
        <Stack.Navigator>
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{ title: 'Home' }}
          />
          <Stack.Screen
            name="MovieList"
            component={MovieList}
            options={{ title: 'Movies' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({

});
