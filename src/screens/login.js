import { Button, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native';

export default function Login({navigation}) {
    return (
        <View style={styles.container}>
            <Text>This is the Log In/Sign Up page</Text>
            <Button title='Go to Home' onPress={()=> navigation.navigate('Home')}/>
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
