import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { setIp } from '../redux/reducer';

export default function Login({ navigation }) {
    const [text, setText] = useState('');
    const dispatch = useDispatch();
    return (
        <View style={styles.container}>
            <Text>Welcome</Text>
            <TextInput placeholder='Ip address' style={{ backgroundColor: 'white', marginTop: 20, padding: 10, width: 300 }} onChangeText={text => setText(text)} />
            <Button title='Go to Home' onPress={() => { dispatch(setIp(text)); navigation.navigate('Home'); }} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 20
    },
});
