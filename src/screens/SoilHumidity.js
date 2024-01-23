import { View, Text } from 'react-native'
import React from 'react'
import { StyleSheet, Button } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { turnPumpOff, turnPumpOn } from '../functions/Endpoints';
import { setPump, setSoilHumidity } from '../redux/reducer';

export default function SoilHumidity() {
    const { temp, soilHumidity, airHumidity, water, ip } = useSelector((state) => state.appSlice);
    const dispatch = useDispatch();
  return (
      <View style={styles.container}>
          <View style={{}}>
              <Text style={{ color: 'white', opacity: .7 }}>Current Soil Humidity: </Text>
              <Text style={{ fontSize: 30, color: 'white' }}>{soilHumidity == 1 ? 'Dry' : 'Wet'}</Text>
          </View>
          <View>
              <Text style={{ color: 'white', opacity: .7, marginTop: 20 }}>The optimal temperature for teff is between 40% and 70%</Text>
          </View>
          <View style={{ marginTop: 30, }}>
              {water == 1 && <Button title='Turn on the Pumps' onPress={() => {
                  let waterBool = turnPumpOn(ip);
                  if (waterBool == true) {
                      dispatch(setPump(true));
                  }
              }} />}
              {water == 0 && <Button title='Turn off the Pumps' color='red' onPress={
                  () => {
                      let waterBool = turnPumpOff(ip);
                      if (waterBool == false) {
                          dispatch(setPump(false))
                      }
                  }
              } />}
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