import { TouchableOpacity, View, Text } from "react-native";

export default function CustomButton ({children, style, onPress}) { 

    return <View>
        <TouchableOpacity style = {style} onPress={onPress}>
            <Text style = {{fontSize : 20 , textAlign : 'center', color : 'lightgreen'}}>
                 {children}
            </Text>
        </TouchableOpacity>

    </View>
}

