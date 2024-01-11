import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../screens/login";
import Threshold from "../screens/thresholdInterface";
import Report from "../screens/report";

const Navigation = () => {

    const Stack = createStackNavigator()

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name = "report" component = {Report} />
                <Stack.Screen name = "threshold" component = {Threshold} />
                <Stack.Screen name = "signup" component = {Login} />
            </Stack.Navigator>
        </NavigationContainer>
    )

}

export default Navigation