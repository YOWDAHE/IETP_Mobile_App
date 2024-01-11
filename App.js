import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from './src/screens/Login';
import Home from './src/screens/Home';
import AppContainer from './src/screens/AppContainer';
import Temputature from './src/screens/Temputature';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';

export default function App() {

  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  return (
    <>
      <Provider store={store}>
        <StatusBar style='light' />
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} options={{ animation: "slide_from_right" }} />
            <Stack.Screen name="Home" component={AppContainer} options={{
              animation: "slide_from_left",
              headerShown: false,
            }} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </>
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
