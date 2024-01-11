import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import Temputature from './Temputature';
import Home from './Home';

export default function HomeContainer() {
    const Stack = createNativeStackNavigator();
  return (
      <NavigationContainer independent>
          <Stack.Navigator>
              <Stack.Screen name="home" component={Home} options={{
                  animation: "slide_from_left", headerBackVisible: false, headerStyle: {
                      backgroundColor: '#172A3A',
                  },
                  headerTitleStyle: {
                      color: 'white',
                      fontSize: 20,
                      fontWeight: '200',
                  }
              }} />
              <Stack.Screen name="temp" component={Temputature} options={{
                  animation: "slide_from_left", headerStyle: {
                      backgroundColor: '#172A3A',
                  },
                  headerBackTitleStyle: {
                      color: 'white'
                  },
                  headerTitleStyle: {
                      color: 'white',
                      fontSize: 20,
                      fontWeight: '200',
                  }
              }} />
              {/* <Stack.Screen name="Home" component={AppContainer} options={{
                  animation: "slide_from_left",
                  headerShown: false,
              }} /> */}
          </Stack.Navigator>
      </NavigationContainer>
  )
}