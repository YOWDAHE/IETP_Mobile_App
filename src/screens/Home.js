import { Button, ImageBackground,ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import '../../assets/Images/matthew-smith-Rfflri94rs8-unsplash.jpg';
import '../../assets/Images/teemu-paananen-OOE4xAnBhKo-unsplash.jpg';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      
      {/* The temp, day and humidity display */}
      <View style={{ height: 400, width: '95%', marginTop: 20, flexDirection: 'row', gap: 10 }} >
        <View style={{ height: '100%', flex: 1, borderRadius: 10 }}>
          <ImageBackground
            source={require('../../assets/Images/teemu-paananen-OOE4xAnBhKo-unsplash.jpg')}
            style={styles.backgroundImage}
            imageStyle={{borderRadius: 10, borderColor: 'black', borderWidth: .4}}
          >
          </ImageBackground>
        </View>
        <View style={{
          flex: 1,
          flexDirection: 'column',
          gap: 10
        }}>
          <View style={{ backgroundColor: '#002F31', width: '100%', flex: 1, borderRadius: 10 }}></View>
          <View style={{ backgroundColor: 'gray', width: '100%', flex: 3, borderRadius: 10 }}>
            <ImageBackground
              source={require('../../assets/Images/david-emrich-Xlzx6sEoenQ-unsplash.jpg')}
              style={styles.backgroundImage}
              imageStyle={{ borderRadius: 10, borderColor: 'black', borderWidth: .4 }}
            >
            </ImageBackground>
          </View>
        </View>
      </View>
      {/* Light display */}
      <View style={{ backgroundColor: 'white', width: '95%', height: 200, borderRadius: 10 }}>
        <ImageBackground
          source={require('../../assets/Images/gabriel-jimenez-jin4W1HqgL4-unsplash.jpg')}
          style={styles.backgroundImage}
          imageStyle={{ borderRadius: 10, borderColor: 'black', borderWidth: .4 }}
        >
        </ImageBackground>
        
      </View>
      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
    gap: 20,
    backgroundColor: '#004346',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
})