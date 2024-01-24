import {View, Text, Modal, TextInput, TouchableOpacity, Alert} from "react-native"
import { useState, useEffect } from "react"
import { useNavigation } from "@react-navigation/native"
import AsyncStorage from "@react-native-async-storage/async-storage"

import Icon from "react-native-vector-icons/FontAwesome"

import CustomButton from '../components/CustomButton'
import Home from "../screens/Home"


export default function LoginForm({style, isVisible, setVisible}){    

  const navigation = useNavigation()
  
  const [show, setShow] = useState(true)
  const [data, setData] = useState({})
  const [email, setEmail] = useState('')
  const [password, setPassWord] = useState('')

  const validateEmail = () => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

    if (emailPattern.test(email)){
      Alert.alert('valid email')
      return true
    } else {
      console.log(email)
      Alert.alert("invalid email")
      return false
    }

  }

  const retrieveData = async (key) => {
    try {
        const value = await AsyncStorage.getItem(key)
        if (value !== null){
            console.log('Retrived data:', value)
            return value
        }else {
            console.log('No data with the specified key')
            return ""
        }
    }catch (error){
        console.log('Error', error)
    }
  }

  const removeData = async (key) => {
    try {
        await AsyncStorage.removeItem(key)
        console.log("Data removed successfully")
    }catch(error){
        console.log("Error removing data", error)
    }
  }

  const validatePassword =  () => {
    // retrieveData(email).then((data)=>console.log(data))
    try{
    const storedData =  String(retrieveData(email))
      if (password === storedData){
        return true
      }else{
        console.log(password)
        Alert.alert("Passwords do not match, Please confirm it again")
        return false
      }
  } catch (error){
    console.log("Error")
    return false
  }

} 


  const handleSubmit = () => {
    console.log("pass", validatePassword() )
    console.log("email,", validateEmail() )
      
      if (validatePassword() && validateEmail()){
        console.log(validatePassword() && validateEmail())
        setData({email, password}) 
        navigation.navigate('Home')
      }
                  
  }

  useEffect(() => {
    console.log(data)
  },[data])
  
  return <View>
        <Modal 
          visible={isVisible}
          onRequestClose={() => setVisible(false)}
          transparent={true}
        >
          <View style={style.modalContainer}>
            <View style = {{display : 'flex'}}>
              <TouchableOpacity style = {style.closeButton} 
                onPress={() => setVisible(false)}
              >
                <Text>X</Text>
              </TouchableOpacity>
            </View>
            
            <Text style = {[style.title,style.inside ]}>Log in</Text>
            
                <TextInput  
                    placeholder="Email" 
                    style = {style.input}
                    onChangeText={(text) => {setEmail(text) 
                    }}

                    
                  />
                <View style = {{display : 'flex', flexDirection: 'row', justifyContent : 'space-between'}}>
                  
                  <TextInput 
                    placeholder = "Password" 
                    secureTextEntry = {show} 
                    style = {style.input}
                    onChangeText={(text) => setPassWord(text)}
                    
                  /> 
                  <TouchableOpacity 
                  
                    onPress={() => setShow(!show)}
                    style = {{alignSelf : 'center'}}>
                    <Icon 
                      name = {show ? 'eye' : 'eye-slash'}  
                      color = 'gray'
                    />

                  </TouchableOpacity></View>
                  <View style = {{display : 'flex', flexDirection: 'row', justifyContent : 'space-between'}}>
                  
                
                  </View>
                

            <CustomButton
              children="Login"
              style = {style.button}
              onPress={()=> handleSubmit()}
                
            />
          </View>
        </Modal>
      </View>
}
