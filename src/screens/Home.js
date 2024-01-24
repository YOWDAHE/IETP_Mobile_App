import { Button, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import '../../assets/Images/matthew-smith-Rfflri94rs8-unsplash.jpg';
import '../../assets/Images/teemu-paananen-OOE4xAnBhKo-unsplash.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { setAirHumidity, setFan, setPump, setSoilHumidity, setTemp, setWaterLevel } from '../redux/reducer';

import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

export default function Home({ navigation }) {

  const { temp, soilHumidity, airHumidity, water, fan, ip } = useSelector((state) => state.appSlice);
  const dispatch = useDispatch();

  let connect = false;

  let socket;

  
  // useEffect(() => {
    //   console.log("the first statement");
    // },[])
    
  const createConnection = () => {
    console.log("creating connection.");
      
    socket = new WebSocket(`ws://${ip}:90`);


    socket.onopen = () => {
      console.log('WebSocket connection opened');
    };

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      console.log('Received data from ESP8266:', data);

      dispatch(setSoilHumidity(data['soilHumidity']));
      dispatch(setTemp(data['temp']));
      dispatch(setAirHumidity(data['airHumidity']));
      dispatch(setWaterLevel(data['waterLevel']));
      dispatch(setFan(data['fan']));
      dispatch(setPump(data['pump']));

      // Handle the received data as needed
    };

    socket.onerror = (error) => {
      console.error('WebSocket error:', error);
      dispatch(setTemp(0));
      dispatch(setAirHumidity(0));
      dispatch(setSoilHumidity(0));
    };

    socket.onclose = () => {
      console.log('WebSocket connection closed');
    };
  }

  // useEffect(() => {

  //   console.log("Initial useEffect called.");

  //   socket.onopen = () => {
  //     console.log('WebSocket connection opened');
  //   };

  //   socket.onmessage = (event) => {
  //     const data = JSON.parse(event.data);
  //     console.log('Received data from ESP8266:', data);

  //     dispatch(setSoilHumidity(data['soilHumidity']));
  //     dispatch(setTemp(data['temp']));
  //     dispatch(setAirHumidity(data['airHumidity']));
  //     dispatch(setWaterLevel(data['waterLevel']));
  //     dispatch(setFan(data['fan']));
  //     dispatch(setPump(data['pump']));

  //     // Handle the received data as needed
  //   };

  //   socket.onerror = (error) => {
  //     console.error('WebSocket error:', error);
  //     dispatch(setTemp(0));
  //     dispatch(setAirHumidity(0));
  //     dispatch(setSoilHumidity(0));
  //   };

  //   socket.onclose = () => {
  //     console.log('WebSocket connection closed');
  //   };

  //   // Cleanup the WebSocket connection on component unmount
  //   return () => {
  //     socket.close();
  //   };
  // }, [connect]);

  const sendDataToArduino = (data) => {
    socket.send(JSON.stringify(data));
  };


  const day = new Date().toLocaleString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

  const dayParts = day.split(',');
  return (
    <ScrollView>
      <View style={styles.container}>
        {/* The temp, day and water display */}
        <View style={{ height: 400, width: '95%', marginTop: 20, flexDirection: 'row', gap: 10 }} >
          <TouchableOpacity onPress={() => navigation.navigate('temp')}>
            <View style={{ height: '100%', flex: 1, borderRadius: 10 }}>
              <ImageBackground
                source={require('../../assets/Images/teemu-paananen-OOE4xAnBhKo-unsplash.jpg')}
                style={styles.backgroundImage}
                imageStyle={{ borderRadius: 10, borderColor: 'black', borderWidth: .4 }}
              >
                <View style={{ height: '100%', flexDirection: 'column', justifyContent: 'space-between', padding: 20 }}>
                  <View>
                    {fan == 0 && <MaterialCommunityIcons name="fan" size={34} color="white" />}
                  </View>
                  <View>
                    <Text style={{ color: 'white', fontSize: 40, opacity: .8 }}>{temp}°C</Text>
                    <Text style={{ color: 'white', fontSize: 20, opacity: .9, marginLeft: 0, marginTop: -7 }}>Tempurature</Text>
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
                    <Text style={{ color: 'white', fontSize: 30, opacity: .8 }}>{water}</Text>
                    <Text style={{ color: 'white', fontSize: 15, opacity: .9, marginLeft: 2, marginTop: -7 }}>Water Level</Text>
                  </View>
                </View>
              </ImageBackground>
            </View>
          </View>
        </View>



        {/* airSensor display */}
        <View style={{ backgroundColor: 'white', width: '95%', height: 200, borderRadius: 10 }}>
          <TouchableOpacity>
            <View style={{ backgroundColor: 'white', width: '100%', height: 200, borderRadius: 10 }}>
              <ImageBackground
                source={require('../../assets/Images/vi-tran-CgIZm6ho4mU-unsplash.jpg')}
                style={styles.backgroundImage}
                imageStyle={{ borderRadius: 10, borderColor: 'black', borderWidth: .4 }}
              >
                <View style={{ height: '100%', flexDirection: 'column', justifyContent: 'flex-end', padding: 20 }}>
                  <View>
                    <Text style={{ color: 'white', fontSize: 35, opacity: .9 }}>{airHumidity}%</Text>
                    <Text style={{ color: 'white', fontSize: 20, opacity: .9, marginLeft: 2, marginTop: -7 }}>Air Humidity</Text>
                  </View>
                </View>
              </ImageBackground>
            </View>
          </TouchableOpacity>
        </View>



        {/* Soil Humidity display */}
        <View style={{ backgroundColor: 'white', width: '95%', height: 200, borderRadius: 10 }}>
          <TouchableOpacity onPress={() => navigation.navigate('soil')}>
            <View style={{ backgroundColor: 'white', width: '100%', height: 200, borderRadius: 10 }}>
              <ImageBackground
                source={require('../../assets/Images/gabriel-jimenez-jin4W1HqgL4-unsplash.jpg')}
                style={styles.backgroundImage}
                imageStyle={{ borderRadius: 10, borderColor: 'black', borderWidth: .4 }}
              >
                <View style={{ height: '100%', flexDirection: 'column', justifyContent: 'space-between', padding: 20 }}>
                  <View>
                    <Text style={{ color: 'white', fontSize: 20, opacity: .6, marginLeft: 2, marginTop: -7 }}>Soil Humidity</Text>
                    <Text style={{ color: 'white', fontSize: 35, opacity: .7 }}>{soilHumidity == 1 ? 'Dry' : 'Wet'}</Text>
                  </View>
                  <View>
                    {water == 0 && <MaterialCommunityIcons name="water" size={34} color="white" />}
                  </View>
                </View>
              </ImageBackground>
            </View>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => socket.close()} style={{ margin: 20 }}>
          <Text>
            Close Connection.
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => createConnection()} style={{ marginBottom: 20 }}>
          <Text>
            Create Connection.
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
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