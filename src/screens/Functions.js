import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { setIp } from '../redux/reducer';
import { useDispatch } from 'react-redux';

export default function Functions() {
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <TextInput placeholder='Ip address' style={{ backgroundColor: 'white', marginTop: 20, padding: 10, width: 300 }} onChangeText={text => setText(text)} />
      <TouchableOpacity onPress={()=>dispatch(setIp(text))}>
        <Text style={{color: 'white'}}>OK</Text>
      </TouchableOpacity>
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
})