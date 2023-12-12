import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function Home({navigation}) {
  return (
    <View style={styles.container}>
          <Text>Home</Text>
          <Button title='Back to Login' onPress={()=>navigation.navigate('Login')}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 20
    },
})