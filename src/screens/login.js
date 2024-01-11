import { View, Text, StyleSheet, Image, Modal} from 'react-native'
import { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
// import Google from '@mui/icons-material/Google';



import SignUpForm from '../components/SignUpForm'
import CustomButton from '../components/CustomButton'
import style from '../styles'


const img = require('../../assets/plant.png')

export default function Login(){

    const nav = useNavigation()

    
    
    const [isVisible, setVisible] = useState(false)

    return <View
    style = {style.container}
    >
     <View style = {style.imgcontainer}>
            <Image  style = {style.img} source = {img} />
        </View>
        
        <View style = {style.div2}> 
            <View>
                <Text style = {style.title}>Sign Up</Text>
            </View>

            <View>
            <CustomButton style = {style.button}
            onPress = {
                () => console.log("First")
            }            
            >
                {/* <Google />  */}
                <Text>Continue With Google</Text>
            </CustomButton>
            <CustomButton children = "I'll Use Email Instead" style = {style.button}
            onPress = {
                () => setVisible(true)}  />
            <SignUpForm style = {style} isVisible = {isVisible} setVisible = {setVisible} />
            </View>
           
           <Text>Already Have an Account Login</Text>
        </View>

        
    </View>
}

