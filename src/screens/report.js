import {View, Text} from 'react-native'
import { useNavigation } from '@react-navigation/native'

const Report = () => {

    const navigate = useNavigation()

    const goToSignUp = () => {
        navigate.navigate('signup')
    }

    const goToThreshold = () => {
        navigate.navigate('threshold')
    }
    return (
        <View>
            <Text style = {{padding : 20}} onPress={goToSignUp}>
                Sign UP
            </Text>
            <Text style = {{padding : 20}} onPress={goToThreshold}>
                Threshold
            </Text>
            
        </View>
    )
}

export default Report