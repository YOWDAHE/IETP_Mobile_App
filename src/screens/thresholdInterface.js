import {View, ScrollView, Text, TouchableOpacity, Button} from 'react-native'
import {useState, useEffect} from 'react'
import { useNavigation } from '@react-navigation/native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FontIcons from 'react-native-vector-icons/FontAwesome'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import Inputs from '../components/Inputs'

import style from '../styles'


function Threshold(){

    const navigation = useNavigation()

    const goToSign = () => {
        navigation.navigate('signup')
    }
    


    const [wet, setWet] = useState(80)
    const [dry, setDry] = useState(40)
    const [waterLevel, setWaterLevel] = useState(50)
    const [temperature, setTemperature] = useState(40)
    const [humidity, setHumidity] = useState(50)

    const [data, setData] = useState({})

    useEffect(() => {console.log(data)}, [data])

    return <View style = {style.thresholdInterface}>

        <ScrollView>
        
        <Inputs 
            text={"Wet Moisure Threshold: "} 
            placeholder={"Wet Moisure Threshold"} 
            value = {parseInt(wet, 10)}
            // value = {wet}
            onChange = {(number) => setWet(number)}
            >
                <MaterialIcon name = "beach-access" size = {30} color = '#999' />
            </Inputs>
        
        <Inputs 
            text={"Dry Moisure Threshold: "} 
            placeholder={"Dry Moisure Threshold"} 
            value = {parseInt(dry, 10)}  
            // value={dry}
            onChange={(number) => setDry(number)}
            >
                <MaterialIcon name = 'opacity' size = {30} color = "gray" />
            </Inputs>
        
        <Inputs
            text={"Water Level Threshold: "} 
            placeholder={"Water Level Threshold"} 
            value = {parseInt(waterLevel, 10)}
            // value = {waterLevel}
            onChange={(number) => setWaterLevel(number)} >
                <MaterialCommunityIcons name = 'water-percent' size = {30} color = "gray" />
            </Inputs>
        
        <Inputs 
            text={"Humidity Threshold: "} 
            placeholder={"Humidity Threshold"} 
            value = {parseInt(humidity, 10)}
            onChange={(number) => setHumidity(number)}
            // value = {humidity}
            >
                <MaterialCommunityIcons name = 'water-outline' size = {30} color = "gray" />
            </Inputs>
        
        <Inputs 
            text={"Temperature Threshold: "} 
            placeholder={"Temperature Threshold"} 
            value = {parseInt(temperature, 10)}
            // value = {temperature}
            onChange={(number) => setTemperature(number)}
            >
                <FontIcons name = 'thermometer-full' size = {30} color = "gray" />
            </Inputs>
        <TouchableOpacity 
            style = {style.submitButton}
            onPress = {() => {
                setData({wet, dry, waterLevel, temperature, humidity})
            }}
            >
            <Text style = {style.submitText}>Submit</Text>
        </TouchableOpacity>

    </ScrollView>
    </View>
}

export default Threshold