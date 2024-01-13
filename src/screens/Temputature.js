import { View, Text, TouchableOpacity, Button } from 'react-native'
import { StyleSheet } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';
import PushNotification from 'react-native-push-notification';

export default function Temputature() {
    const { temp, soilHumidity, airHumidity } = useSelector((state) => state.appSlice);

    PushNotification.localNotification({
        channelId: 'channel-id',
        title: 'My Notification Title',
        message: 'Hello, this is a local notification!',
    })

    return (
        <View style={styles.container}>
            <View style={{}}>
                <Text style={{color: 'white', opacity: .7 }}>Current temperature: </Text>
                <Text style={{ fontSize: 30, color: 'white' }}>{temp}°C</Text>
            </View>
            <View>
                <Text style={{ color: 'white', opacity: .7, marginTop: 20 }}>The optimal temperature for teff is between 10°C and 27°C</Text>
            </View>
            <View style={{marginTop: 30,}}>
            <Button title='Turn on Fans' />
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