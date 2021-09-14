import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import IndexScreen from './src/screens/IndexScreen';
import ShowScreen from './src/screens/ShowScreen';
import { BlogProvider } from './src/context/BlogContext';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';

const Stack = createStackNavigator();

function MyStack() {
  const navigate= useNavigation();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Index'
        component={IndexScreen}
        options={{
          title: 'Notes', headerRight: (() => {
            return (<AntDesign
              name="addfile"
              size={24}
              color="black"
              style={{ paddingRight: 10 }}
              onPress={()=>{navigate.navigate('Creat')}}
            />)
          })
        }}
      />
      <Stack.Screen
        name='Creat'
        component={ShowScreen}
        options={{ title: 'Creat Note' }}
      />
    </Stack.Navigator>
  )
}

const App = function () {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
export default () => {
  return (
    <BlogProvider>
      <App />
    </BlogProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
