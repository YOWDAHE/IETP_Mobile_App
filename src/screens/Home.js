import { Button, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import '../../assets/Images/matthew-smith-Rfflri94rs8-unsplash.jpg';
import '../../assets/Images/teemu-paananen-OOE4xAnBhKo-unsplash.jpg';
import { useSelector } from 'react-redux';

export default function Home({ navigation }) {
  const { temp, soilHumidity, airHumidity } = useSelector((state) => state.appSlice);

  const day = new Date().toLocaleString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  const dayParts = day.split(',');
  return (
    <View style={styles.container}>
      {/* The temp, day and humidity display */}
      <View style={{ height: 400, width: '95%', marginTop: 20, flexDirection: 'row', gap: 10 }} >
        <TouchableOpacity onPress={()=> navigation.navigate('temp')}>
          <View style={{ height: '100%', flex: 1, borderRadius: 10 }}>
            <ImageBackground
              source={require('../../assets/Images/teemu-paananen-OOE4xAnBhKo-unsplash.jpg')}
              style={styles.backgroundImage}
              imageStyle={{ borderRadius: 10, borderColor: 'black', borderWidth: .4 }}
            >
              <View style={{ height: '100%', flexDirection: 'column', justifyContent: 'flex-end', padding: 20 }}>
                <View>
                  <Text style={{ color: 'white', fontSize: 40, opacity: .7 }}>{temp}°C</Text>
                  <Text style={{ color: 'white', fontSize: 20, opacity: .6, marginLeft: 0, marginTop: -7 }}>Tempurature</Text>
                </View>
              </View>
            </ImageBackground>
          </View>
        </TouchableOpacity>
        <View style={{
          flex: 1,
          flexDirection: 'column',
          gap: 10
        }}>
          <View style={{ backgroundColor: '#002F31', width: '100%', flex: 1, borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 3 }}>
            <Text style={{ color: 'white', fontSize: 13, opacity: .5, marginLeft: 0, }}>{dayParts[0]}</Text>
            <Text style={{ color: 'white', fontSize: 20, opacity: .6, marginLeft: 0, }}>{dayParts[1]}</Text>
            <Text style={{ color: 'white', fontSize: 10, opacity: .5, marginLeft: 0, }}>{dayParts[2]}</Text>
          </View>
          <View style={{ backgroundColor: 'gray', width: '100%', flex: 3, borderRadius: 10 }}>
            <ImageBackground
              source={require('../../assets/Images/david-emrich-Xlzx6sEoenQ-unsplash.jpg')}
              style={styles.backgroundImage}
              imageStyle={{ borderRadius: 10, borderColor: 'black', borderWidth: .4 }}
            >
              <View style={{ height: '100%', flexDirection: 'column', justifyContent: 'flex-end', padding: 20 }}>
                <View>
                  <Text style={{ color: 'white', fontSize: 30, opacity: .7 }}>60%</Text>
                  <Text style={{ color: 'white', fontSize: 15, opacity: .6, marginLeft: 2, marginTop: -7 }}>Water Level</Text>
                </View>
              </View>
            </ImageBackground>
          </View>
        </View>
      </View>
      {/* Soil Humidity display */}
      <View style={{ backgroundColor: 'white', width: '95%', height: 200, borderRadius: 10 }}>
        <ImageBackground
          source={require('../../assets/Images/gabriel-jimenez-jin4W1HqgL4-unsplash.jpg')}
          style={styles.backgroundImage}
          imageStyle={{ borderRadius: 10, borderColor: 'black', borderWidth: .4 }}
        >
          <View style={{ height: '100%', flexDirection: 'column', justifyContent: 'flex-start', padding: 20 }}>
            <View>
              <Text style={{ color: 'white', fontSize: 35, opacity: .7 }}>{ soilHumidity }%</Text>
              <Text style={{ color: 'white', fontSize: 20, opacity: .6, marginLeft: 2, marginTop: -7 }}>Soil Humidity</Text>
            </View>
          </View>
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