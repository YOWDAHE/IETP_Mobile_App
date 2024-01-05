import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// import Login from './src/screens/login';
import Threshold from './src/screens/thresholdInterface';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Login /> */}
      {/* <Threshold /> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    
  },
});
