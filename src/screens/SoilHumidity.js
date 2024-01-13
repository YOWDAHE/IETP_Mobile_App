import { View, Text } from 'react-native'
import React from 'react'
import { StyleSheet, Button } from 'react-native'
import { useSelector } from 'react-redux';

export default function SoilHumidity() {
    const { temp, soilHumidity, airHumidity } = useSelector((state) => state.appSlice);
  return (
      <View style={styles.container}>
          <View style={{}}>
              <Text style={{ color: 'white', opacity: .7 }}>Current Soil Humidity: </Text>
              <Text style={{ fontSize: 30, color: 'white' }}>{soilHumidity}%</Text>
          </View>
          <View>
              <Text style={{ color: 'white', opacity: .7, marginTop: 20 }}>The optimal temperature for teff is between 40% and 70%</Text>
          </View>
          <View style={{ marginTop: 30, }}>
              <Button title='Turn on Irrigation' />
          </View>
      </View>
  )
}

const styles = StyleSheet.create({
    container: {
        padding: 15,
        flex: 1,
        backgroundColor: '#004346',
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
})