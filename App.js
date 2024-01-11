import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Navigation from './src/components/Navigation';

export default function App() {

    

  return (
    <View style={styles.container}>
      {/* <Login /> */}
      {/* <TryRoute /> */}
      {/* <Threshold /> */}
      

      <Navigation />
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
