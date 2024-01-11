import { View, Text } from 'react-native'
import { StyleSheet } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';

export default function Temputature() {
    const { temp, soilHumidity, airHumidity } = useSelector((state) => state.appSlice);
    return (
        <View style={styles.container}>
            <View style={{margin: 10}}>
                <Text style={{color: 'white', opacity: .7 }}>Current temperature: </Text>
                <Text style={{ fontSize: 30, color: 'white' }}>{temp}°C</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 5,
        flex: 1,
        gap: 20,
        backgroundColor: '#004346',
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
})