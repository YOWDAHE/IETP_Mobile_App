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
import { AppRegistry } from 'react-native';
import PushNotificationIOS from "@react-native-community/push-notification-ios";
import PushNotification from "react-native-push-notification";
import { useEffect } from 'react';

export default function App() {

  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  // const socket = new WebSocket('ws://your-esp8266-ip-address:your-port');

  useEffect(() => {
    console.log("the first statement");
  },[])

  // useEffect(() => {

  //   socket.onopen = () => {
  //     console.log('WebSocket connection opened');
  //   };

  //   socket.onmessage = (event) => {
  //     const data = JSON.parse(event.data);
  //     console.log('Received data from ESP8266:', data);
  //     // Handle the received data as needed
  //   };

  //   socket.onerror = (error) => {
  //     console.error('WebSocket error:', error);
  //   };

  //   socket.onclose = () => {
  //     console.log('WebSocket connection closed');
  //   };

  //   // Cleanup the WebSocket connection on component unmount
  //   return () => {
  //     socket.close();
  //   };
  // }, []);

  const sendDataToArduino = (data) => {
    socket.send(JSON.stringify(data));
  };



  return (
    <>
      <Provider store={store}>
        <StatusBar style='light' />
        <NavigationContainer>
          <Stack.Navigator>
            {/* <Stack.Screen name="Login" component={Login} options={{ animation: "slide_from_right" }} /> */}
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
