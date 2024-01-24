import {View, Text, Modal, TextInput, TouchableOpacity, Alert} from "react-native"
import { useState, useEffect } from "react"
import { useNavigation } from "@react-navigation/native"
import AsyncStorage from "@react-native-async-storage/async-storage"

import Icon from "react-native-vector-icons/FontAwesome"

import CustomButton from '../components/CustomButton'
import Home from "../screens/Home"


export default function SignUpForm({style, isVisible, setVisible}){    

  const storeData = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value);
      console.log('Data stored successfully.')
    }catch (error){
      console.log("Error storing data : ", error)
    }
  }

  const navigation = useNavigation()
  
  const [show, setShow] = useState(true)
  const [cshow, setcShow] = useState(true)
  const [data, setData] = useState({})
  const [email, setEmail] = useState('')
  const [password, setPassWord] = useState('')
  const [confirm_password, setConfirmPassWord] = useState('')

  const validateEmail = () => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

    if (emailPattern.test(email)){
      Alert.alert('valid email')
      return true
    } else {
      console.log(email)
      Alert.alert("invalid email")
      return False
    }

  }


  const validatePassword = () => {
    const passwordPattern = /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{8,}$/

    if (!passwordPattern.test(password)){
      Alert.alert("Invalid Password, Try again")
      return false
    }

    if (password !== confirm_password){
      Alert.alert("Passwords do not match, Please confirm it again")
      return false
    }

    return true
  }

  const handleSubmit = () => {
      
      if (validatePassword() && validateEmail()){
        setData({email, password}) 
        storeData(email,password)
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
            
            <Text style = {[style.title,style.inside ]}>Sign Up</Text>
            
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
                    onChangeText={(text) => {
                      text !== "" ? setPassWord(text) : console.log("required")
                    }}
                    
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
                  
                  <TextInput 
                    placeholder = "Confirm Password" 
                    secureTextEntry = {cshow} 
                    style = {style.input}
                    onChangeText={(text) => {
                      {text !== "" ? setConfirmPassWord(text) : console.log("required")}
                    }}
                    
                  />
                  <TouchableOpacity 
                  
                    onPress={() => setcShow(!cshow)}
                    style = {{alignSelf : 'center'}}>
                    <Icon 
                      name = {cshow ? 'eye' : 'eye-slash'}  
                      color = 'gray'
                    />

                  </TouchableOpacity></View>
                

            <CustomButton
              children="Sign Up"
              style = {style.button}
              onPress={handleSubmit}
                
            />
          </View>
        </Modal>
      </View>
}
